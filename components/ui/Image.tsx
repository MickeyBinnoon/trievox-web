"use client";

import { useState } from "react";
import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { cn } from "@/lib/utils";

export interface ImageProps extends Omit<NextImageProps, "onLoad"> {
  /**
   * Show a blur placeholder while image loads.
   * Requires blurDataURL for remote images.
   */
  showBlur?: boolean;
  /**
   * Aspect ratio for responsive sizing.
   * Use with fill prop or as a container constraint.
   */
  aspectRatio?: "square" | "video" | "wide" | "portrait";
  /**
   * Rounded corner style.
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  /**
   * Additional wrapper className.
   */
  wrapperClassName?: string;
}

const aspectRatioClasses = {
  square: "aspect-square",
  video: "aspect-video",
  wide: "aspect-[21/9]",
  portrait: "aspect-[3/4]",
};

const roundedClasses = {
  none: "",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

/**
 * Optimized image component with loading states and blur placeholder support.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Image src="/hero.jpg" alt="Hero" width={800} height={600} />
 *
 * // With blur placeholder
 * <Image
 *   src="/hero.jpg"
 *   alt="Hero"
 *   width={800}
 *   height={600}
 *   showBlur
 *   blurDataURL="data:image/jpeg;base64,..."
 * />
 *
 * // Fill container with aspect ratio
 * <Image
 *   src="/hero.jpg"
 *   alt="Hero"
 *   fill
 *   aspectRatio="video"
 * />
 * ```
 */
export function Image({
  className,
  wrapperClassName,
  showBlur = false,
  aspectRatio,
  rounded = "none",
  alt,
  ...props
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Use placeholder blur if showBlur is true
  const placeholder = showBlur ? "blur" : undefined;

  // For fill images, we need a wrapper
  if (props.fill) {
    return (
      <div
        className={cn(
          "relative overflow-hidden",
          aspectRatio && aspectRatioClasses[aspectRatio],
          roundedClasses[rounded],
          wrapperClassName
        )}
      >
        <NextImage
          className={cn(
            "object-cover transition-opacity duration-300",
            isLoading && "opacity-0",
            !isLoading && "opacity-100",
            className
          )}
          alt={alt}
          placeholder={placeholder}
          onLoad={() => setIsLoading(false)}
          {...props}
        />
      </div>
    );
  }

  return (
    <NextImage
      className={cn(
        "transition-opacity duration-300",
        isLoading && showBlur && "opacity-0",
        !isLoading && "opacity-100",
        roundedClasses[rounded],
        className
      )}
      alt={alt}
      placeholder={placeholder}
      onLoad={() => setIsLoading(false)}
      {...props}
    />
  );
}
