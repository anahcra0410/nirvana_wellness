import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nirvana Wellness Centre | Ayurvedic & Spa Therapies",
  description:
    "Authentic Ayurvedic and spa therapies designed to restore balance, ease tension, and renew mind, body and spirit. Personalised massage and healing sessions.",
  keywords: [
    "Ayurvedic massage",
    "spa therapy",
    "deep tissue massage",
    "Swedish massage",
    "marma therapy",
    "Nirvana Wellness Centre",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
