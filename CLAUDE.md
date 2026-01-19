# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint check
npm run typecheck    # TypeScript check (tsc --noEmit)
```

## Epic A Scope

**Included:**
- Project structure & routing scaffold
- Design tokens & global styles (Tailwind v4 CSS-based theme)
- Core UI component library (Button, Link, Badge, Card, Tabs, Accordion, Modal, Drawer, Toast, form fields)
- Layout system (Header with mega-menu, Footer, Container, Section, Stack, Grid)
- Accessibility baseline (focus states, reduced motion, keyboard hooks)
- Analytics event placeholders (no vendor wiring)
- Performance baseline (next/font, next/image wrapper)
- UI Kit documentation page (`/ui-kit`)

**Explicitly excluded:**
- Marketing pages (Home, Services, About, Contact, etc.)
- CMS integration
- Case studies content
- Blog/news functionality
- SEO deep work (meta, structured data, sitemap)
- Third-party analytics vendor integration
- Form backend/submission handling

## Coding Conventions

### Folder Structure
```
app/
  layout.tsx          # Root layout
  page.tsx            # Home page
  globals.css         # Global styles + Tailwind imports + design tokens
  ui-kit/             # Component showcase (dev only)

components/
  ui/                 # Primitive UI components (Button, Card, etc.)
    index.ts          # Barrel export
  layout/             # Layout components (Header, Footer, etc.)
    index.ts          # Barrel export

lib/
  hooks/              # Custom React hooks (useMediaQuery, useToast, etc.)
    index.ts          # Barrel export
  analytics/          # Event tracking utilities
    index.ts          # Barrel export
  fonts.ts            # Font definitions (next/font)
  tokens.ts           # Design token constants
  utils.ts            # General utilities (cn)
```

### Naming Conventions
- **Components:** PascalCase files and exports (`Button.tsx` → `export const Button`)
- **Hooks:** camelCase with `use` prefix (`useMediaQuery.ts`)
- **Utilities:** camelCase (`cn.ts`, `formatDate.ts`)
- **Types:** PascalCase, suffix with `Props` for component props (`ButtonProps`)

### Component Patterns
- Use `forwardRef` for all interactive UI components
- Props interface defined above component, exported
- Default exports discouraged; use named exports
- Compose with `children` prop, not render props (unless necessary)
- Use `cn()` utility (clsx + tailwind-merge) for conditional classes
- Radix UI primitives for complex interactions (Dialog, Tabs, Accordion, etc.)

### Tailwind Usage
- Tailwind v4 with CSS-based configuration (`@theme inline` in globals.css)
- Prefer Tailwind utilities over custom CSS
- Extract repeated patterns to component, not `@apply`
- Use design tokens from CSS custom properties, avoid arbitrary values
- Responsive: mobile-first (`md:`, `lg:` for larger screens)
- Dark mode: automatic via `prefers-color-scheme` media query

### Accessibility Requirements
- All interactive elements must have visible focus states (`:focus-visible`)
- Use semantic HTML elements (`button`, `nav`, `main`, etc.)
- Images require `alt` text (empty string for decorative)
- Form fields require associated labels
- Support `prefers-reduced-motion` (global CSS rule + `useReducedMotion` hook)
- Skip-to-content link in root layout

## Definition of Done — Epic A

- [x] `npm run lint` passes with no errors
- [x] `npm run typecheck` passes with no errors
- [x] `npm run build` succeeds
- [x] UI Kit page (`/ui-kit`) renders all components
- [ ] All components responsive (tested at 320px, 768px, 1280px)
- [ ] Keyboard navigation works for all interactive components
- [ ] No accessibility errors in axe DevTools scan
- [ ] Lighthouse performance score ≥ 90 on UI Kit page
