import type { Metadata } from "next";
import LoaderWrapper from "@/components/LoaderWrapper";

export const metadata: Metadata = {
  title: "Brand Art & Communications | Creative Branding Agency in Lagos",
  description:
    "Brand Art is an independent, insight-led creative agency crafting brand strategy, visual identity, and culturally-rooted campaigns. See our work with Lagos Arts, Original Coffee, and Streetsouk.",
  keywords: [
    "branding agency Lagos",
    "creative agency Nigeria",
    "brand strategy",
    "visual identity design",
    "brand communications",
    "creative direction Lagos",
  ],
  authors: [{ name: "Brand Art" }],
  creator: "Brand Art",
  publisher: "Brand Art",
  metadataBase: new URL("https://www.brandart.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Brand Art & Communications | Creative Branding Agency",
    description:
      "Insight-led branding, strategy, and creative campaigns that capture cultural nuance and inspire action. Explore our case studies.",
    url: "https://www.brandart.com",
    siteName: "Brand Art",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brand Art — Creative Branding Agency",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Art & Communications",
    description:
      "Insight-led branding, strategy, and creative campaigns rooted in culture.",
    images: ["/img/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <LoaderWrapper>{children}</LoaderWrapper>;
}