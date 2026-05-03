import type { Metadata } from "next";
import Link from "next/link";
import { V2Header } from "@/components/marketing-v2/v2-header";
import { VfFooter } from "@/components/marketing-vf/vf-footer";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "GrubShelf terms of use — the rules and conditions for using the GrubShelf app and website.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/terms" },
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3010";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Terms of Use",
      item: `${siteUrl}/terms`,
    },
  ],
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <V2Header homeHref="/" featuresHref="/#vf-features" faqHref="/#v5-faq" />
      <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
        <Link
          href="/"
          className="inline-block font-sans text-sm font-medium text-gs-text-tertiary transition hover:text-gs-text-primary"
        >
          &larr; Back home
        </Link>

        <h1 className="mt-8 font-sans text-4xl font-bold tracking-tight text-gs-text-primary">
          Terms of Use
        </h1>
        <p className="mt-2 font-sans text-sm text-gs-text-tertiary">
          Last updated: May 2025
        </p>

        <div className="mt-10 space-y-10 font-sans text-[15px] leading-[1.8] text-gs-text-secondary">
          <section>
            <h2 className="text-lg font-semibold text-gs-text-primary">
              Acceptance
            </h2>
            <p className="mt-3">
              By using GrubShelf (&quot;the app&quot;, &quot;the service&quot;),
              you agree to these terms. If you do not agree, please do not use
              the app.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gs-text-primary">
              The service
            </h2>
            <p className="mt-3">
              GrubShelf is a pantry tracking, grocery list, and expense
              management tool. The app is currently in beta and features may
              change, be added, or be removed without notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gs-text-primary">
              Your account
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                You are responsible for keeping your account credentials secure.
              </li>
              <li>
                You must provide accurate information when creating an account.
              </li>
              <li>
                You may not use the service for any unlawful purpose or to harm
                others.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gs-text-primary">
              Your content
            </h2>
            <p className="mt-3">
              You own the data you enter into GrubShelf (pantry items, lists,
              expenses). We do not claim ownership of your content. We use it
              only to provide and improve the service as described in our{" "}
              <Link
                href="/privacy"
                className="font-medium text-gs-brand-primary underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gs-text-primary">
              Beta disclaimer
            </h2>
            <p className="mt-3">
              GrubShelf is currently in beta. The service is provided &quot;as
              is&quot; without warranty of any kind. We do our best to keep your
              data safe, but we cannot guarantee uninterrupted service or
              zero data loss during the beta period.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gs-text-primary">
              Intellectual property
            </h2>
            <p className="mt-3">
              The GrubShelf name, logo, and app design are our property. You may
              not copy, modify, or distribute any part of the app without written
              permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gs-text-primary">
              Limitation of liability
            </h2>
            <p className="mt-3">
              To the fullest extent permitted by law, GrubShelf and its creators
              are not liable for any indirect, incidental, or consequential
              damages arising from your use of the service, including but not
              limited to data loss or service interruption.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gs-text-primary">
              Termination
            </h2>
            <p className="mt-3">
              We may suspend or terminate your access to the service at any time
              for conduct that violates these terms or is otherwise harmful. You
              may delete your account at any time.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gs-text-primary">
              Changes to these terms
            </h2>
            <p className="mt-3">
              We may update these terms from time to time. Continued use of
              GrubShelf after changes constitutes acceptance of the updated
              terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gs-text-primary">
              Contact
            </h2>
            <p className="mt-3">
              Questions? Reach us at{" "}
              <a
                href="mailto:hello@grubshelf.com"
                className="font-medium text-gs-brand-primary underline-offset-4 hover:underline"
              >
                hello@grubshelf.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <VfFooter />
    </>
  );
}
