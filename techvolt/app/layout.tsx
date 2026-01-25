import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Power Electrical - Industrial & Oil Gas Electrical Solutions UAE",
  description: "Specialist supplier of industrial and Oil & Gas electrical and lighting solutions for demanding commercial, industrial, and hazardous environments. ATEX/IECEx certified products.",
  keywords: ["industrial electrical", "oil gas lighting", "explosion proof", "ATEX", "IECEx", "hazardous area", "UAE", "Sharjah"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppWidget />
        <ScrollToTop />
      </body>
    </html>
  );
}
