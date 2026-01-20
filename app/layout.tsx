import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Amé Studio | Luxury Interior Design Dubai | Modern Home Furnishing",
    template: "%s | Amé Studio",
  },
  description: "Amé Studio is a luxury interior design studio in Dubai specializing in modern, minimalist home furnishing. We create warm, timeless spaces with turnkey solutions - from concept to full setup. Transform your home with our curated design packages.",
  keywords: [
    "interior design Dubai",
    "luxury interior designer UAE",
    "home furnishing Dubai",
    "modern interior design",
    "minimalist home design",
    "turnkey interior solutions",
    "furniture packages Dubai",
    "residential interior design",
    "contemporary home styling",
    "Scandinavian interior design Dubai",
    "Japandi design UAE",
    "home styling services",
    "interior decorator Dubai",
    "full home furnishing",
    "bespoke interior design",
  ],
  authors: [{ name: "Amé Studio", url: "https://ame-studio.com" }],
  creator: "Amé Studio",
  publisher: "Amé Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Amé Studio | Luxury Interior Design Dubai",
    description: "Transform your space with Amé Studio. We design warm, modern, neutral spaces that feel calm, curated, and timeless. Turnkey interior solutions in Dubai.",
    type: "website",
    locale: "en_US",
    url: "https://ame-studio.com",
    siteName: "Amé Studio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amé Studio - Luxury Interior Design Dubai - Modern minimalist living space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amé Studio | Luxury Interior Design Dubai",
    description: "Transform your space with Amé Studio. We design warm, modern spaces that feel calm, curated, and timeless.",
    images: ["/images/og-image.jpg"],
    creator: "@amestudio",
  },
  metadataBase: new URL("https://ame-studio.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "Interior Design",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ame-studio.com/#organization",
      name: "Amé Studio",
      url: "https://ame-studio.com",
      logo: {
        "@type": "ImageObject",
        url: "https://ame-studio.com/images/ame.png",
        width: 200,
        height: 80,
      },
      description: "Luxury interior design studio in Dubai specializing in modern, minimalist home furnishing with turnkey solutions.",
      email: "Briar@Ame-studio.com",
      sameAs: [],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://ame-studio.com/#localbusiness",
      name: "Amé Studio",
      image: "https://ame-studio.com/images/og-image.jpg",
      description: "Luxury interior design and home furnishing services in Dubai. We create warm, modern, neutral spaces with full turnkey solutions.",
      url: "https://ame-studio.com",
      email: "Briar@Ame-studio.com",
      priceRange: "AED 15,000 - AED 200,000+",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.2048,
        longitude: 55.2708,
      },
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 25.2048,
          longitude: 55.2708,
        },
        geoRadius: "50000",
      },
      serviceType: [
        "Interior Design",
        "Home Furnishing",
        "Interior Styling",
        "Furniture Packages",
        "Turnkey Interior Solutions",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://ame-studio.com/#website",
      url: "https://ame-studio.com",
      name: "Amé Studio",
      description: "Luxury Interior Design Dubai",
      publisher: {
        "@id": "https://ame-studio.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://ame-studio.com/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Service",
      "@id": "https://ame-studio.com/#service",
      name: "Interior Design Services",
      provider: {
        "@id": "https://ame-studio.com/#organization",
      },
      serviceType: "Interior Design",
      areaServed: {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Interior Design Packages",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Starter Package",
              description: "Perfect for single-room refreshes or consultations. Includes design consultation, mood board, and shopping list.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Boutique Package",
              description: "Ideal for complete room transformations. Includes full design plans, 3D renderings, project management, and sourcing.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Signature Package",
              description: "Comprehensive whole-home design experience. Includes complete design service, custom furnishings, white-glove service, and ongoing support.",
            },
          },
        ],
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WJMW8CE6K9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WJMW8CE6K9');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
