import type { Metadata } from "next";
import "./globals.css";

import { EB_Garamond, Geist, Amiri } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "Noor Ramadan 2026 — Spiritual Tracker",
  description:
    "A peaceful, calming Ramadan tracker to help you stay consistent with your عبادات throughout the blessed month.",
  keywords: ["Ramadan", "Islam", "Ibadah", "Prayer", "Tracker", "Spiritual"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "font-sans",
        geist.variable,
        garamond.variable,
        amiri.variable
      )}
    >
      <body className={cn("font-sans antialiased", geist.variable)}>
        {children}
      </body>
    </html>
  );
}
