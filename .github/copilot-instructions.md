# GitHub Copilot Instructions for HydroGraphix Pro

## Project Overview
HydroGraphix Pro is a production-ready marketing website for a hydrographics (water transfer printing) business. This is a static site built with **Astro v5**, **TypeScript**, and **Tailwind CSS** featuring a premium dark theme with cyan accents.

## Key Architecture Principles

### Framework & Stack
- **Astro v5** with static output configuration
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling with dark theme
- **Component-based architecture** using `.astro` files
- **Centralized configuration** in `src/data/site.ts`

### Design System
- **Dark theme**: Gray-900/950 backgrounds with cyan accents (cyan-400/500)
- **Responsive**: Mobile-first design patterns
- **Typography**: Clean, professional hierarchy
- **Accessibility**: WCAG compliant components with proper ARIA labels
- **Performance**: Minimal JavaScript, optimized for Lighthouse scores

## File Structure Guidelines

### Core Directories
- `/src/components/` - Reusable UI components (.astro files)
- `/src/pages/` - Route pages (file-based routing)
- `/src/layouts/` - Layout wrappers
- `/src/data/` - Central configuration and type definitions
- `/src/styles/` - Global CSS and theme variables
- `/public/` - Static assets

### Component Naming
- Use PascalCase for component files (e.g., `ServiceCards.astro`)
- Use semantic, descriptive names
- Group related functionality (e.g., `ContactForm.astro`, `FAQ.astro`)

## Coding Standards

### Astro Components
```astro
---
// TypeScript interface for props
interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

// Destructure props with defaults
const { title, subtitle, className = "" } = Astro.props;
---

<!-- Semantic HTML with Tailwind classes -->
<section class={`base-classes ${className}`}>
  <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
  {subtitle && <p class="text-gray-300 text-lg">{subtitle}</p>}
</section>
```

### TypeScript Patterns
- Export interfaces from `src/data/site.ts`
- Use proper typing for all component props
- Maintain centralized configuration approach

### Tailwind CSS Guidelines
- Use responsive prefixes (sm:, md:, lg:, xl:)
- Follow dark theme color scheme:
  - Backgrounds: `bg-gray-900`, `bg-gray-950`
  - Text: `text-white`, `text-gray-300`, `text-gray-400`
  - Accents: `text-cyan-400`, `text-cyan-500`
  - Buttons: `bg-cyan-500 hover:bg-cyan-600`
- Use consistent spacing scale (4, 6, 8, 12, 16, 20, 24, 32)

## Business Context

### Industry: Hydrographics (Water Transfer Printing)
- Custom automotive parts decoration
- Industrial coatings and finishes
- Multi-step dipping process
- B2B and B2C customers
- Local service business with multiple locations

### Key Services
1. **Automotive Hydrographics** - Custom car parts
2. **Industrial Coatings** - Equipment and machinery
3. **Custom Projects** - Unique one-off items
4. **Restoration Services** - Refinishing existing parts

### Content Areas
- Service descriptions with technical details
- Process steps (6-step dipping process)
- Gallery showcasing completed work
- Pricing tiers and packages
- Location-based content (multiple shop locations)
- FAQ addressing common customer questions

## SEO & Performance Requirements

### SEO Implementation
- Every page needs proper `<Seo>` component usage
- JSON-LD structured data for business info
- Meta descriptions under 155 characters
- Title tags with business name and location
- Canonical URLs for all pages

### Performance Targets
- Minimal client-side JavaScript
- Optimized images with proper alt text
- Fast loading times (target: <2s)
- Mobile-first responsive design

## Content Management

### Central Configuration
All business data is managed in `src/data/site.ts`:
```typescript
export const siteConfig = {
  brandName: "HydroGraphix Pro",
  services: Service[],
  locations: Location[],
  testimonials: Testimonial[],
  // ... more config
}
```

### Content Updates
- Business information changes should update `site.ts`
- New pages follow existing routing patterns
- Component modifications maintain accessibility standards
- All text content should be easily localizable

## Common Development Tasks

### Adding New Pages
1. Create `.astro` file in `src/pages/`
2. Use `Layout.astro` wrapper
3. Include `<Seo>` component with proper meta data
4. Follow responsive design patterns
5. Update navigation in `Header.astro` if needed

### Creating Components
1. Define TypeScript interface for props
2. Use semantic HTML structure
3. Apply consistent Tailwind styling
4. Include accessibility attributes (ARIA labels, etc.)
5. Test responsive behavior

### Content Updates
1. Modify `src/data/site.ts` for business data
2. Update component templates if needed
3. Regenerate build to update sitemap
4. Test SEO meta data and structured data

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement approach
- Graceful degradation for older browsers

## Deployment Notes
- Static site output (no server required)
- Compatible with Netlify, Vercel, Cloudflare Pages
- Automatic sitemap generation
- Optimized build output (~270KB)

When suggesting code changes:
1. Maintain the existing dark theme aesthetic
2. Follow established TypeScript patterns
3. Ensure accessibility compliance
4. Use the centralized configuration system
5. Keep performance optimization in mind
6. Consider mobile responsiveness first
7. Maintain SEO best practices