import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Amé Studio",
  description:
    "Read the terms and conditions for using Amé Studio's website and interior design services. Understand our policies on projects, payments, and more.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-cream-50">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-stone-500 text-sm">Last updated: 26 January 2026</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-24 px-6 md:px-12">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <p className="text-stone-600 leading-relaxed">
              Welcome to Amé Studio. By accessing or using our website and services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our website or services.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-stone-800 mt-12 mb-4">
              1. Services
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Amé Studio provides interior design, furnishing, styling, and related consulting services for residential and commercial properties. All services are provided subject to availability and agreed project scope.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-stone-800 mt-12 mb-4">
              2. Use of Website
            </h2>
            <p className="text-stone-600 leading-relaxed">
              You agree to use this website for lawful purposes only. You may not use the site in a way that could damage, disable, or impair the website or interfere with other users.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-stone-800 mt-12 mb-4">
              3. Intellectual Property
            </h2>
            <p className="text-stone-600 leading-relaxed">
              All content on this website, including images, designs, text, logos, and branding, is the property of Amé Studio unless otherwise stated. You may not copy, reproduce, or distribute any content without prior written consent.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-stone-800 mt-12 mb-4">
              4. Project Quotes & Pricing
            </h2>
            <p className="text-stone-600 leading-relaxed">
              All prices, quotes, and timelines provided are indicative unless confirmed in writing. Final pricing may vary based on scope changes, material availability, or client requests.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-stone-800 mt-12 mb-4">
              5. Payments
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Payment terms will be agreed upon per project. Deposits may be required before work begins. Failure to make payments on time may result in delays or suspension of services.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-stone-800 mt-12 mb-4">
              6. Cancellations & Refunds
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Cancellations must be communicated in writing. Fees already paid for completed work, sourcing, or custom items are non-refundable unless otherwise agreed.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-stone-800 mt-12 mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Amé Studio shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. We are not responsible for delays or issues caused by third-party suppliers or contractors.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-stone-800 mt-12 mb-4">
              8. Third-Party Links
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Our website may contain links to third-party websites. Amé Studio is not responsible for the content, policies, or practices of these websites.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-stone-800 mt-12 mb-4">
              9. Privacy
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Your use of this website is also governed by our{" "}
              <a
                href="/privacy-policy"
                className="text-stone-800 underline hover:text-stone-600 transition-colors"
              >
                Privacy Policy
              </a>
              , which explains how we collect and use personal data.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-stone-800 mt-12 mb-4">
              10. Changes to Terms
            </h2>
            <p className="text-stone-600 leading-relaxed">
              We reserve the right to update these Terms & Conditions at any time. Continued use of the website constitutes acceptance of the updated terms.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-stone-800 mt-12 mb-4">
              11. Governing Law
            </h2>
            <p className="text-stone-600 leading-relaxed">
              These Terms & Conditions shall be governed by and interpreted in accordance with the laws of the United Arab Emirates.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-stone-800 mt-12 mb-4">
              12. Contact
            </h2>
            <p className="text-stone-600 leading-relaxed">
              For questions regarding these Terms & Conditions, please contact us at:
            </p>
            <div className="mt-4 text-stone-600">
              <p>
                Email:{" "}
                <a
                  href="mailto:info@amestudio.me"
                  className="text-stone-800 underline hover:text-stone-600 transition-colors"
                >
                  info@amestudio.me
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
