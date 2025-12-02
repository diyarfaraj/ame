import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started - Free Design Consultation",
  description:
    "Begin your interior design journey with Amé Studio. Complete our quick consultation quiz to help us understand your style, space, and budget. Get personalized design recommendations for your Dubai home.",
  keywords: [
    "interior design consultation Dubai",
    "free design consultation",
    "home styling quiz",
    "interior design quote",
    "furniture consultation UAE",
    "design services inquiry",
  ],
  openGraph: {
    title: "Start Your Design Journey | Amé Studio",
    description:
      "Take our quick consultation quiz and let us create your perfect space. Personalized interior design recommendations for your Dubai home.",
    type: "website",
    url: "https://ame-interiors.com/get-started",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amé Studio - Start Your Interior Design Consultation",
      },
    ],
  },
  alternates: {
    canonical: "/get-started",
  },
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
