# HydroGraphix Pro Website

A production-ready marketing website for a hydrographics (water transfer printing) business built with Astro v5, TypeScript, and Tailwind CSS.

## Features

- ✨ **Modern Stack**: Astro v5 + TypeScript + Tailwind CSS
- 🚀 **Static Output**: Fast, SEO-friendly static site generation
- 📱 **Responsive Design**: Mobile-first, works on all devices
- 🎨 **Premium Dark Theme**: Custom shop aesthetic with cyan accents
- ♿ **Accessible**: WCAG compliant with semantic HTML
- 🔍 **SEO Optimized**:
  - OpenGraph and Twitter Card meta tags
  - Canonical URLs
  - JSON-LD structured data (LocalBusiness, Service, FAQPage)
  - Auto-generated sitemap
  - Robots.txt
- ⚡ **Performance**: Minimal JavaScript, optimized for Lighthouse scores
- 📝 **Content-Driven**: Centralized configuration for easy updates

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   ├── og-image.jpg (replace with actual image)
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ContactForm.astro
│   │   ├── FAQ.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── JsonLd.astro
│   │   ├── ProcessSteps.astro
│   │   ├── Seo.astro
│   │   ├── ServiceCards.astro
│   │   └── Testimonials.astro
│   ├── data/
│   │   └── site.ts (central configuration)
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── services.astro
│   │   ├── gallery.astro
│   │   ├── pricing.astro
│   │   ├── about.astro
│   │   ├── faq.astro
│   │   ├── contact.astro
│   │   ├── locations.astro
│   │   ├── privacy.astro
│   │   ├── terms.astro
│   │   ├── thanks.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Quick Start

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Visit `http://localhost:4321` to view the site.

### Build

```bash
# Build for production
npm run build
```

The static site will be generated in the `dist/` directory.

### Preview

```bash
# Preview production build locally
npm run preview
```

## Editing Content

All site content is centralized in `src/data/site.ts`. Edit this file to update:

### Basic Information
```typescript
brandName: "HydroGraphix Pro"
tagline: "Premium Water Transfer Printing & Custom Finishes"
phone: "(555) 123-4567"
email: "info@hydrographixpro.com"
address: "1234 Industrial Pkwy"
city: "Austin"
state: "TX"
zip: "78701"
hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-3PM"
siteUrl: "https://hydrographixpro.com"
```

### Services
Add, remove, or edit services in the `services` array:
```typescript
{
  id: "automotive",
  name: "Automotive Parts",
  description: "Custom hydrographic finishes for...",
  icon: "🚗",
  features: ["Interior trim pieces", "Dashboard components", ...],
  price: "Starting at $150"
}
```

### Locations
Update business locations in the `locations` array:
```typescript
{
  id: "austin",
  name: "Austin - Main Shop",
  address: "1234 Industrial Pkwy",
  city: "Austin",
  state: "TX",
  zip: "78701",
  phone: "(555) 123-4567",
  email: "austin@hydrographixpro.com",
  hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-3PM",
  mapUrl: "https://maps.google.com/?q=Austin+TX+78701"
}
```

### Process Steps
Customize the process steps displayed on the homepage:
```typescript
process: [
  {
    step: 1,
    title: "Surface Preparation",
    description: "Thorough cleaning and sanding..."
  },
  // ...
]
```

### FAQs
Add or modify frequently asked questions:
```typescript
faqs: [
  {
    question: "What is hydrographics?",
    answer: "Hydrographics, also known as..."
  },
  // ...
]
```

### Testimonials
Update customer testimonials:
```typescript
testimonials: [
  {
    name: "Mike Richardson",
    location: "Austin, TX",
    rating: 5,
    text: "Absolutely blown away...",
    project: "Automotive Interior"
  },
  // ...
]
```

### Social Media
Update social media links in the `socials` array:
```typescript
socials: [
  {
    platform: "Facebook",
    url: "https://facebook.com/hydrographixpro",
    icon: "facebook"
  },
  // ...
]
```

## Customizing Pages

### Adding Gallery Images
Edit `src/pages/gallery.astro` and update the `galleryItems` array:
```typescript
const galleryItems = [
  {
    id: 1,
    category: 'Automotive',
    title: 'Carbon Fiber Dashboard',
    image: '/images/gallery/item-1.jpg'
  },
  // ...
];
```

### Contact Form
The contact form in `src/components/ContactForm.astro` currently redirects to `/thanks` page. To connect to a backend:

1. Update the form submission handler in the `<script>` tag
2. Add your API endpoint
3. Handle form validation and errors

Example:
```javascript
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      window.location.href = '/thanks';
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
```

## SEO Configuration

### Updating Meta Tags
Edit individual page files to customize SEO:
```astro
<Layout
  title="Page Title"
  description="Page description for search engines"
  ogImage="/custom-og-image.jpg"
/>
```

### Sitemap
The sitemap is automatically generated at build time. Configure in `astro.config.mjs`:
```javascript
integrations: [
  sitemap({
    // Add custom configuration if needed
  })
]
```

### Robots.txt
Edit `public/robots.txt` to control search engine crawling.

## Deployment

### Deploy to Netlify
1. Connect your Git repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### Deploy to Vercel
1. Import your Git repository
2. Framework preset: Astro
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy!

### Deploy to Cloudflare Pages
1. Connect your Git repository
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Deploy!

### Other Platforms
Any static hosting platform that supports:
- Node.js for building
- Serving static files from `dist/` directory

## Performance Optimization

### Images
Replace placeholder images in `/public/` with optimized images:
- Use WebP format when possible
- Compress images before upload
- Consider using Astro's image optimization

### Fonts
The site uses system fonts by default for best performance. To add custom fonts:
1. Add font files to `/public/fonts/`
2. Update `src/styles/global.css` with `@font-face` rules
3. Apply to Tailwind config if needed

### Analytics
Add analytics by including the tracking script in `src/layouts/Layout.astro`:
```astro
<head>
  <!-- ... -->
  <script async src="https://your-analytics.com/script.js"></script>
</head>
```

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This is a commercial project. All rights reserved.

## Support

For issues or questions:
- Email: info@hydrographixpro.com
- Phone: (555) 123-4567

---

Built with ❤️ using [Astro](https://astro.build)
