import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: {
    default: "Amé Studio | Holiday Home Furnishing Dubai | Guest-Ready in 14 Days",
    template: "%s | Amé Studio",
  },
  description: "Amé Studio furnishes holiday homes and investment properties in Dubai. Fixed-price guarantee, guest-ready in 14 days. Turn-key packages from AED 71,600. Bespoke residential design available.",
  keywords: [
    "holiday home furnishing Dubai",
    "investment property furniture Dubai",
    "Airbnb furniture packages Dubai",
    "short-term rental furnishing",
    "turn-key property setup Dubai",
    "interior design Dubai",
    "fixed-price furnishing",
    "furniture packages Dubai",
    "guest-ready property setup",
    "bespoke interior design Dubai",
    "Scandinavian interior design Dubai",
    "luxury home furnishing UAE",
    "property investor interior design",
    "holiday home setup Dubai",
    "rental property design",
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
    title: "Amé Studio | Holiday Home Furnishing Dubai | Guest-Ready in 14 Days",
    description: "Turn-key holiday home furnishing in Dubai. Fixed-price guarantee, guest-ready in 14 days. Packages from AED 71,600.",
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
    title: "Amé Studio | Holiday Home Furnishing Dubai",
    description: "Turn-key holiday home furnishing in Dubai. Fixed-price, guest-ready in 14 days.",
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
      description: "Holiday home furnishing and bespoke interior design studio in Dubai. Turn-key packages, fixed-price guarantee, guest-ready in 14 days.",
      email: "Briar@Ame-studio.com",
      sameAs: [],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://ame-studio.com/#localbusiness",
      name: "Amé Studio",
      image: "https://ame-studio.com/images/og-image.jpg",
      description: "Turn-key holiday home furnishing and bespoke interior design in Dubai. Fixed-price guarantee, guest-ready in 14 days.",
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
        "Holiday Home Furnishing",
        "Investment Property Design",
        "Turn-key Furniture Packages",
        "Bespoke Interior Design",
        "Short-term Rental Setup",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WJMW8CE6K9"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WJMW8CE6K9');
          `}
        </Script>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="beforeInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1408525177345613');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1408525177345613&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
