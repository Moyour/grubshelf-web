import type { Metadata } from "next";
import Link from "next/link";
import { PrimaryHeader } from "@/components/marketing/primary-header";
import { SiteFooter } from "@/components/marketing/site-footer";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "GrubShelf terms of use — the rules and conditions for using the GrubShelf app and website.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PrimaryHeader />
      <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <h1 className="font-sans text-3xl font-bold text-gs-text-primary">
          Terms
        </h1>
        <p className="mt-4 font-sans text-[15px] leading-relaxed text-gs-text-secondary">
          This page is a placeholder. Replace with your terms of use before
          launch if required.
        </p>
        <p className="mt-6">
          <Link
            href="/"
            className="font-sans text-sm font-semibold text-gs-brand-primary underline-offset-4 hover:underline"
          >
            Back home
          </Link>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
