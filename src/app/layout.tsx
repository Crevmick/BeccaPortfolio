import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rebecca Adewumi — Social Media Manager & Content Strategist",
  description:
    "Content that feels clear, useful, and worth saving. Helping small brands, schools, and business owners build intentional social media presence.",
  authors: [{ name: "Rebecca Adewumi" }],
  creator: "Rebecca Adewumi",
  openGraph: {
    type: "website",
    title: "Rebecca Adewumi — Social Media Manager & Content Strategist",
    description: "Strategic content and thoughtful social media management for schools, small businesses, and growing brands.",
    siteName: "Rebecca Adewumi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rebecca Adewumi — Social Media Manager & Content Strategist",
    description: "Strategic content and thoughtful social media management for schools, small businesses, and growing brands.",
  },
  icons: {
    icon: [{ url: "/icon.png?v=2", type: "image/png" }],
    shortcut: "/icon.png?v=2",
    apple: "/icon.png?v=2",
  },
  keywords: [
    "Rebecca Adewumi",
    "Social Media Manager",
    "Content Strategist",
    "Havilah Schools",
    "Instagram Optimization",
    "Content Creation"
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[#F8F5EE] text-[#201D1A] antialiased font-sans selection:bg-[#F7E078] selection:text-[#201D1A]"
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
