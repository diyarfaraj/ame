# Deployment Guide - Ame Interior Design

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

**Why Vercel?**
- Built by Next.js creators
- Zero configuration
- Automatic HTTPS
- Global CDN
- Free tier available

**Steps:**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts**
   - Link to your account
   - Configure project settings
   - Deploy!

**Or deploy via GitHub:**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

---

### Option 2: Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build your site**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

**Or via GitHub:**
1. Push to GitHub
2. Connect repository in Netlify dashboard
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

---

### Option 3: Self-Hosted (VPS)

**Requirements:**
- Node.js 18+
- PM2 (process manager)

**Steps:**

1. **Transfer files to server**
   ```bash
   scp -r . user@yourserver.com:/var/www/ame
   ```

2. **On server, install dependencies**
   ```bash
   cd /var/www/ame
   npm install
   npm run build
   ```

3. **Install PM2**
   ```bash
   npm install -g pm2
   ```

4. **Start application**
   ```bash
   pm2 start npm --name "ame" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx** (example)
   ```nginx
   server {
       listen 80;
       server_name ame-interiors.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

## 🔐 Environment Variables

If you need environment variables, create `.env.local`:

```bash
# Example
NEXT_PUBLIC_SITE_URL=https://ame-interiors.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Never commit `.env.local`** - it's already in `.gitignore`

---

## 📊 Analytics Setup

### Google Analytics

1. Get your GA4 tracking ID
2. Add to `app/layout.tsx`:

```tsx
import Script from 'next/script'

// In <head>:
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

---

## 🎯 Domain Setup

### Update Domain References

Change `https://ame-interiors.com` to your actual domain in:
- `app/layout.tsx` (metadataBase)
- `app/sitemap.ts`
- `app/robots.ts`

### DNS Configuration

**A Record:**
- Point `@` to your server IP or Vercel IP

**CNAME Record:**
- Point `www` to your main domain

---

## ✅ Pre-Deployment Checklist

- [ ] Add all three images to `public/images/`
- [ ] Update domain in all config files
- [ ] Test build locally (`npm run build`)
- [ ] Configure environment variables
- [ ] Set up analytics (optional)
- [ ] Test on mobile devices
- [ ] Check SEO with tools like Lighthouse
- [ ] Set up SSL certificate (auto with Vercel/Netlify)

---

## 📈 Performance Tips

1. **Image Optimization**: Already handled by Next.js
2. **Caching**: Vercel/Netlify handle this automatically
3. **CDN**: Built-in with Vercel/Netlify
4. **Compression**: Enabled by default

---

## 🔍 SEO Post-Deployment

1. **Submit sitemap to Google Search Console**
   - URL: `https://your-domain.com/sitemap.xml`

2. **Verify robots.txt**
   - URL: `https://your-domain.com/robots.txt`

3. **Test with tools:**
   - Google PageSpeed Insights
   - Google Mobile-Friendly Test
   - Lighthouse (in Chrome DevTools)

---

## 🆘 Troubleshooting

**Build fails:**
- Check Node.js version (18+)
- Run `npm install` again
- Clear `.next` folder and rebuild

**Images not loading:**
- Verify images are in `public/images/`
- Check file names match exactly
- Ensure images are not corrupted

**Slow loading:**
- Optimize image file sizes
- Use WebP format
- Enable caching headers

---

## 📞 Support

For Next.js issues: [nextjs.org/docs](https://nextjs.org/docs)
For Vercel support: [vercel.com/support](https://vercel.com/support)
