import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  Inter,
  Outfit,
  Patrick_Hand,
} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

function getMetadataSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    try {
      new URL(raw);
      return raw;
    } catch {
      /* fall through */
    }
  }
  return "http://localhost:3010";
}

const siteUrl = getMetadataSiteUrl();

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-patrick-hand",
  display: "swap",
});

const description =
  "Track pantry, expiry, meals, and shopping in one place. Less waste, fewer surprises.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GrubShelf — Groceries without the guesswork",
    template: "%s | GrubShelf",
  },
  description,
  applicationName: "GrubShelf",
  keywords: [
    "pantry tracker",
    "food expiry tracker",
    "meal planner",
    "grocery list",
    "kitchen organizer",
    "reduce food waste",
    "shopping list app",
    "pantry management",
  ],
  authors: [{ name: "GrubShelf" }],
  creator: "GrubShelf",
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "GrubShelf — Groceries without the guesswork",
    description,
    url: siteUrl,
    siteName: "GrubShelf",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "GrubShelf — Groceries without the guesswork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GrubShelf — Groceries without the guesswork",
    description,
    images: ["/og.png"],
  },
  alternates: { canonical: "/" },
  manifest: "/manifest.json",
  robots: { index: true, follow: true },
  other: {
    "theme-color": "#04342c",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "GrubShelf",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS",
  description,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  image: `${siteUrl}/og.png`,
  url: siteUrl,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GrubShelf",
  url: siteUrl,
  logo: `${siteUrl}/icon-512.png`,
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@grubshelf.com",
    contactType: "customer support",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I join the beta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tap 'Download for iOS' anywhere on this page — it opens TestFlight on your iPhone or iPad. Install the app, and you're in. No waitlist.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your pantry, lists, and spending stay on your device and in your private cloud sync. We don't sell data, show ads, or share your grocery habits with anyone.",
      },
    },
    {
      "@type": "Question",
      name: "Is there an Android version?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not yet. We're focused on getting the iPhone & iPad experience right first. Android is on the roadmap — join the beta and we'll keep you posted.",
      },
    },
    {
      "@type": "Question",
      name: "Does it cost anything?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The beta is free. We'll share pricing details before any paid features launch — no surprises.",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${ibmPlexMono.variable} ${patrickHand.variable} min-h-screen font-sans`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
