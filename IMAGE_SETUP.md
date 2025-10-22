# Image Setup Guide

## Required Images (All PNG Format)

All images should be in **PNG format**. Place them in the `public/images/` directory.

### 1. hero.png
- **Source**: Image #3 from your provided images
- **Description**: Minimalist living space with sofa, pillows, and tree branch
- **Usage**: Full-screen hero section background
- **Recommended size**: 1920x1080px or larger
- **File location**: `public/images/hero.png`

### 2. staircase.png
- **Source**: Image #6 from your provided images
- **Description**: Architectural detail with wooden staircase and dramatic lighting
- **Usage**: Background for left column in about section
- **Recommended size**: 1200x1600px or larger
- **File location**: `public/images/staircase.png`

### 3. designer.png
- **Source**: Image #7 from your provided images
- **Description**: Portrait of Briar Faraj (designer in white shirt)
- **Usage**: Designer portrait in right column
- **Recommended size**: 800x1000px or larger (portrait orientation)
- **File location**: `public/images/designer.png`

## Quick Setup Steps

1. **Save your three images as PNG files**
2. **Rename them to match exactly:**
   - `hero.png`
   - `staircase.png`
   - `designer.png`
3. **Copy them to:** `public/images/`
4. **Run the dev server:** `npm run dev`
5. **Open:** http://localhost:3000

## File Structure

```
ame/
├── public/
│   └── images/
│       ├── hero.png         ✅ Image #3
│       ├── staircase.png    ✅ Image #6
│       └── designer.png     ✅ Image #7
├── components/
├── app/
└── ...
```

## Optimization Notes

- Next.js will automatically optimize PNG images
- Images will be converted to WebP/AVIF for modern browsers
- Lazy loading is enabled for below-the-fold images
- Responsive sizes are automatically generated

## Troubleshooting

**Images not showing?**
- Verify file names match exactly (lowercase, .png extension)
- Check files are in `public/images/` directory
- Restart dev server after adding images

**Images too large?**
- PNG files can be large - Next.js will optimize them automatically
- For very large files, consider using online PNG optimizers first
- Recommended max file size: 5MB per image

**Build errors?**
- Clear Next.js cache: Delete `.next` folder
- Rebuild: `npm run build`

## Testing

After adding images, test:
1. Desktop view (1920px+)
2. Tablet view (768px - 1024px)
3. Mobile view (< 768px)
4. Page load speed

All images should load smoothly with no layout shift.

---

**All images updated to PNG format! ✅**
