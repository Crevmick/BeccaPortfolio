import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rebecca Adewumi — Social Media Manager & Content Strategist",
  description:
    "Content that feels clear, useful, and worth saving. Helping small brands, schools, and business owners build intentional social media presence.",
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
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${sans.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#F8F5EE] text-[#201D1A] antialiased font-sans selection:bg-[#F7E078] selection:text-[#201D1A]">
        {children}
      </body>
    </html>
  );
}
