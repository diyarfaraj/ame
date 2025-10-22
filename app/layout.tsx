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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
