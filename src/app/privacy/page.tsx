import type { Metadata } from "next";
import Link from "next/link";
import { V2Header } from "@/components/marketing-v2/v2-header";
import { VfFooter } from "@/components/marketing-vf/vf-footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "GrubShelf privacy policy — how we handle your pantry, grocery, and meal planning data.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <V2Header homeHref="/" featuresHref="/#vf-features" faqHref="/#v5-faq" />
      <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
        <Link
          href="/"
          className="inline-block font-sans text-sm font-medium text-gs-text-tertiary transition hover:text-gs-text-primary"
        >
          &larr; Back home
        </Link>

        <h1 className="mt-8 font-sans text-4xl font-bold tracking-tight text-gs-text-primary">
          Privacy Policy
        </h1>
        <p className="mt-2 font-sans text-sm text-gs-text-tertiary">
          Last updated: May 2025
        </p>

        <div className="mt-10 space-y-10 font-sans text-[15px] leading-[1.8] text-gs-text-secondary">
          <section>
            <h2 className="text-lg font-semibold text-gs-text-primary">
              Overview
            </h2>
            <p className="mt-3">
              GrubShelf (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a
              pantry and grocery management app. We believe your kitchen data is
              personal. This policy explains what we collect, why, and how we
              protect it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gs-text-primary">
              What we collect
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong>Account information</strong> — email address when you
                sign up or subscribe to our newsletter.
              </li>
              <li>
                <strong>App data</strong> — pantry items, shopping lists, expiry
                dates, and spending entries you create within the app. This data
                is stored to provide the service.
              </li>
              <li>
                <strong>Device information</strong> — basic device type, OS
                version, and app version for crash reporting and compatibility.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gs-text-primary">
              What we do not collect
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>We do not sell your data to third parties.</li>
              <li>We do not use your data for advertising.</li>
              <li>
                We do not track your location, contacts, or browsing activity.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gs-text-primary">
              Third-party services
            </h2>
            <p className="mt-3">
              We use{" "}
              <a
                href="https://buttondown.com/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gs-brand-primary underline-offset-4 hover:underline"
              >
                Buttondown
              </a>{" "}
              to manage our newsletter. When you subscribe, your email address is
              shared with Buttondown under their privacy policy. No other app
              data is shared with them.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gs-text-primary">
              Data storage and security
            </h2>
            <p className="mt-3">
              Your data is stored securely using industry-standard encryption in
              transit and at rest. We retain your data for as long as you have an
              active account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gs-text-primary">
              Your rights
            </h2>
            <p className="mt-3">You can at any time:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong>Export</strong> your data from within the app.
              </li>
              <li>
                <strong>Delete</strong> your account and all associated data by
                contacting us.
              </li>
              <li>
                <strong>Unsubscribe</strong> from our newsletter using the link
                in any email.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gs-text-primary">
              Changes to this policy
            </h2>
            <p className="mt-3">
              We may update this policy from time to time. Significant changes
              will be communicated through the app or via email. Continued use of
              GrubShelf after changes constitutes acceptance of the updated
              policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gs-text-primary">
              Contact
            </h2>
            <p className="mt-3">
              Questions about your data? Reach us at{" "}
              <a
                href="mailto:privacy@grubshelf.com"
                className="font-medium text-gs-brand-primary underline-offset-4 hover:underline"
              >
                privacy@grubshelf.com
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
