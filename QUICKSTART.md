# Quick Start Guide - Ame Interior Design Website

## 🚀 Getting Started (3 Simple Steps)

### Step 1: Add Your Images

Copy your three images to `public/images/` with these exact names:

```
public/images/
  ├── hero.png         (Image #3 - Living room with sofa)
  ├── staircase.png    (Image #6 - Wooden staircase)
  └── designer.png     (Image #7 - Designer portrait)
```

### Step 2: Start Development Server

```bash
npm run dev
```

### Step 3: Open in Browser

Visit: **http://localhost:3000**

---

## 🎨 What You'll See

### Section 1: Hero
- Full-screen image (hero.png)
- Large "A" logo in top-left corner
- Smooth fade-in animation

### Section 2: Philosophy
- "Creating interiors that move you" heading
- Your mission statement text
- Cream background with elegant typography

### Section 3: About
- **Left Column**: Background image (staircase.png) with "Made with intention" text and CTA button
- **Right Column**: Designer profile with portrait (designer.png) and bio

---

## 🛠️ Common Tasks

### Change Text Content
Edit files in `/components`:
- `HeroSection.tsx` - Hero section
- `PhilosophySection.tsx` - Philosophy text
- `AboutSection.tsx` - About section text

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  cream: { ... },
  stone: { ... }
}
```

### Update SEO
Edit `app/layout.tsx` - metadata object

### Add More Pages
Create new files in `/app` directory

---

## 📦 Production Build

```bash
npm run build
npm start
```

---

## 🌐 Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Deploy automatically

Or use Vercel CLI:
```bash
npm install -g vercel
vercel
```

---

## ✅ Build Verification

Build successful! ✓
- Bundle size: 131 kB (First Load)
- All routes pre-rendered
- SEO files generated (sitemap.xml, robots.txt)

---

## 📧 Need Help?

Check the full README.md for detailed documentation.
