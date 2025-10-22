# Ame - Interior Design Website

A modern, world-class interior design website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 14** with App Router for optimal performance
- 🎨 **Tailwind CSS** for utility-first styling
- 🎭 **Framer Motion** for smooth animations
- 📱 **Fully Responsive** design
- 🔍 **SEO Optimized** with metadata, sitemap, and robots.txt
- 🖼️ **Image Optimization** with Next.js Image component
- ♿ **Accessible** and semantic HTML

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Images

Place your images in the `public/images/` directory with the following names:

- `hero.png` - The minimalist living space image (Image #3)
- `staircase.png` - The architectural detail image (Image #6)
- `designer.png` - The designer portrait (Image #7)

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
ame/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main home page
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # XML sitemap generation
│   └── robots.ts           # Robots.txt generation
├── components/
│   ├── HeroSection.tsx     # Full-screen hero with logo
│   ├── PhilosophySection.tsx # Philosophy/mission section
│   └── AboutSection.tsx    # Two-column about section
├── public/
│   └── images/             # Image assets
└── ...config files
```

## SEO Features

- Comprehensive metadata in layout.tsx
- Dynamic sitemap.xml generation
- Robots.txt configuration
- Open Graph and Twitter Card tags
- Semantic HTML structure
- Optimized images with proper alt text

## Performance Optimizations

- Next.js Image component with automatic optimization
- Lazy loading for images below the fold
- Framer Motion with optimized animations
- CSS code splitting
- Tree shaking for minimal bundle size

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette. Current theme uses cream and stone tones.

### Typography

The site uses Inter font from Google Fonts. Change in `app/layout.tsx`.

### Content

Edit the component files in `/components` to update text and content.

## Deployment

This project is ready to deploy to Vercel, Netlify, or any platform that supports Next.js.

### Recommended: Vercel

```bash
npm install -g vercel
vercel
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All Rights Reserved
