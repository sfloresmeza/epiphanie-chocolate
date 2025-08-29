# Epiphanie Chocolate - Calgary's Premier Artisanal Chocolate Shop

A beautiful, responsive marketing website for Epiphanie Chocolate, showcasing premium handcrafted chocolates, hot beverages, and custom treats in Calgary's Kensington district.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Architecture

This site is built with a **modular component system** that allows for easy reordering and customization:

### Core Technologies
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** with custom design system
- **Shadcn/ui** components
- **Lucide React** icons

### Design System
- **Brand Colors**: Dark chocolate, accent brown, cream, warm orange-red
- **Typography**: Playfair Display (headings) + Inter (body)
- **Accessibility**: WCAG AA compliant with semantic HTML
- **Performance**: Optimized images with lazy loading

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About/story section
│   ├── CategoryGrid.tsx # Product categories
│   ├── Seasonal.tsx    # Hot drinks & seasonal items
│   ├── Gallery.tsx     # Photo gallery
│   ├── Testimonials.tsx # Customer reviews
│   ├── HoursMap.tsx    # Store hours & location
│   ├── ContactForm.tsx # Contact form with validation
│   ├── Footer.tsx      # Site footer
│   └── SectionRenderer.tsx # Section orchestrator
├── content/            # Content management
│   ├── site.ts        # Business info & copy
│   └── sections.ts    # Section ordering
├── lib/               # Utilities
│   ├── utils.ts       # Utility functions
│   └── contact.ts     # Form handling & validation
└── pages/
    └── Index.tsx      # Main page
```

## 🎛️ Content Management

### Business Information
Edit `src/content/site.ts` to update:
- Business details (name, address, phone, hours)
- Hero section copy
- Product categories and descriptions
- Testimonials
- Social media links

### Section Reordering
Modify `src/content/sections.ts` to reorder page sections:

```typescript
export const sectionOrder = [
  'Hero',           // Always first
  'About', 
  'Categories',
  'Seasonal',
  'Gallery',
  'Testimonials',   // ← Move this up/down
  'HoursMap',
  'Contact',
  'Footer'          // Always last
] as const;
```

## 🖼️ Images

Images are stored in `public/images/` and include:
- Product category photos
- Gallery showcase images
- Workshop/process photos

Replace with your own high-quality images maintaining the same filenames.

## 📱 Features

- **Responsive Design**: Mobile-first with sticky bottom navigation
- **Contact Form**: Client-side validation with spam protection
- **SEO Optimized**: Meta tags, Open Graph, structured data
- **Accessibility**: Keyboard navigation, focus management, semantic HTML
- **Performance**: Lighthouse score 90+ with optimized assets
- **Google Maps**: Integration for store location
- **Call-to-Actions**: Direct calling and directions

## 🎨 Customization

### Colors
Update brand colors in `src/index.css`:
```css
:root {
  --dark-chocolate: 18 29% 24%;
  --accent-brown: 15 51% 23%;
  --cream: 48 69% 93%;
  --warm-orange: 17 57% 49%;
}
```

### Typography
Fonts are loaded from Google Fonts in `index.html`. Update font variables in `src/index.css` and `tailwind.config.ts`.

### Components
Each section is an independent component that can be:
- Modified individually
- Reordered via `sections.ts`
- Removed by excluding from the sections array

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Use the same build settings
- **GitHub Pages**: Use `gh-pages` package
- **Traditional Hosting**: Upload `dist/` folder contents

## 📊 Analytics & Performance

- Google Analytics ready (add tracking ID)
- Core Web Vitals optimized
- Image lazy loading
- Minimize JavaScript bundles
- Optimal font loading

## 🛠️ Development

### Available Scripts
```bash
npm run dev      # Development server with hot reload
npm run build    # Production build
npm run preview  # Preview production build locally
npm run lint     # ESLint code checking
```

### Adding New Sections
1. Create component in `src/components/`
2. Add to `sectionComponents` in `SectionRenderer.tsx`
3. Include in `sections.ts` array
4. Update content in `site.ts` if needed

## 📞 Support

For customization or technical support, refer to:
- Component documentation in individual files
- Tailwind CSS documentation
- Shadcn/ui component library
- React + Vite documentation

---

**Built with ❤️ for Calgary's sweetest chocolate shop**