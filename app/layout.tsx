import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ame - Creating Interiors That Move You",
  description: "We don't just design spaces – we translate emotion into form. Every curve, texture, and line is shaped with intention, carrying both soul and structure. Our work is calm, timeless, and deeply personal.",
  keywords: ["interior design", "luxury interiors", "home design", "interior designer", "modern interiors", "timeless design"],
  authors: [{ name: "Ame Interior Design" }],
  openGraph: {
    title: "Ame - Creating Interiors That Move You",
    description: "We don't just design spaces – we translate emotion into form. Every curve, texture, and line is shaped with intention.",
    type: "website",
    locale: "en_US",
    siteName: "Ame Interior Design",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ame - Creating Interiors That Move You",
    description: "We don't just design spaces – we translate emotion into form.",
  },
  metadataBase: new URL('https://ame-interiors.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body">
        {/* Hidden form for Netlify Forms detection */}
        <form name="consultation" netlify-honeypot="bot-field" data-netlify="true" hidden>
          <input type="hidden" name="form-name" value="consultation" />
          <input type="hidden" name="bot-field" />
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <input type="text" name="projectType" />
          <input type="text" name="spaceType" />
          <input type="text" name="squareFootage" />
          <input type="text" name="timeline" />
          <input type="text" name="budgetRange" />
          <input type="text" name="selectedPackage" />
          <input type="text" name="stylePreferences" />
          <textarea name="inspirations"></textarea>
          <textarea name="message"></textarea>
          <input type="text" name="selectedInspirationImages" />
        </form>
        {children}
      </body>
    </html>
  );
}
