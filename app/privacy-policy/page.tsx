import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Amé Studio",
  description:
    "Learn how Amé Studio collects, uses, and protects your personal data. Read our privacy policy for details on data handling and your rights.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-cream-50">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-4">
              Privacy Policy
            </h1>
            <p className="text-stone-500 text-sm">Last updated: 26 January 2026</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-24 px-6 md:px-12">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <p className="text-stone-600 leading-relaxed">
              Amé Studio (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website, contact us, or submit your details through our forms or advertisements.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-stone-800 mt-12 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              We may collect the following information:
            </p>
            <ul className="text-stone-600 space-y-2 list-disc pl-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Any information you voluntarily provide through contact forms, lead forms, WhatsApp, or messages</li>
              <li>Basic technical data such as browser type, device information, and website usage data</li>
            </ul>

            <h2 className="font-heading text-2xl md:text-3xl text-stone-800 mt-12 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="text-stone-600 space-y-2 list-disc pl-6">
              <li>Respond to inquiries and contact you regarding our services</li>
              <li>Provide interior design, furnishing, and related services</li>
              <li>Follow up on requests submitted through ads, forms, or messages</li>
              <li>Improve our services, website, and customer experience</li>
              <li>Communicate offers or updates if you have requested or consented to receive them</li>
            </ul>

            <h2 className="font-heading text-2xl md:text-3xl text-stone-800 mt-12 mb-4">
              3. Marketing & Advertising
            </h2>
            <p className="text-stone-600 leading-relaxed">
              If you submit your information through our advertisements (such as Facebook, Instagram, or WhatsApp ads), your data may be processed in accordance with Meta&apos;s advertising and data policies. We do not sell your personal data to third parties.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-stone-800 mt-12 mb-4">
              4. Data Sharing
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              We do not sell or rent your personal information. We may share data only with:
            </p>
            <ul className="text-stone-600 space-y-2 list-disc pl-6">
              <li>Service providers who assist us in operating our business (such as hosting, analytics, or communication tools)</li>
              <li>Platforms used for advertising and communication (e.g. Meta, WhatsApp) strictly for performance and communication purposes</li>
              <li>Legal authorities if required by law</li>
            </ul>

            <h2 className="font-heading text-2xl md:text-3xl text-stone-800 mt-12 mb-4">
              5. Data Storage & Security
            </h2>
            <p className="text-stone-600 leading-relaxed">
              We take reasonable technical and organizational measures to protect your personal data against unauthorized access, loss, misuse, or disclosure. Your information is stored only for as long as necessary to fulfill the purposes described in this policy.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-stone-800 mt-12 mb-4">
              6. Your Rights
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="text-stone-600 space-y-2 list-disc pl-6">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Withdraw consent for communication at any time</li>
            </ul>
            <p className="text-stone-600 leading-relaxed mt-4">
              To exercise your rights, please contact us using the details below.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-stone-800 mt-12 mb-4">
              7. Third-Party Links
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-stone-800 mt-12 mb-4">
              8. Changes to This Policy
            </h2>
            <p className="text-stone-600 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-stone-800 mt-12 mb-4">
              9. Contact Us
            </h2>
            <p className="text-stone-600 leading-relaxed">
              If you have any questions about this Privacy Policy or how your data is handled, please contact us:
            </p>
            <div className="mt-4 text-stone-600">
              <p className="font-medium text-stone-800">Amé Studio</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@amestudio.me"
                  className="text-stone-800 underline hover:text-stone-600 transition-colors"
                >
                  info@amestudio.me
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://www.amestudio.me"
                  className="text-stone-800 underline hover:text-stone-600 transition-colors"
                >
                  www.amestudio.me
                </a>
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
