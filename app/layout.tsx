import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";

const cormorantInfant = localFont({
  src: "./fonts/cormorant-infant-latin.woff2",
  variable: "--font-cormorant-infant",
  weight: "400",
  display: "swap",
});

const muli = localFont({
  src: "./fonts/muli-latin.woff2",
  variable: "--font-muli",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Therapy for Anxiety & Trauma in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Dr. Maya Reynolds offers warm, collaborative therapy for adults navigating anxiety, panic, trauma, and burnout in Santa Monica, CA, with secure telehealth across California.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantInfant.variable} ${muli.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
