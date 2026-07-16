import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Body: Inter — highly legible, neutral. Display: Fraunces — a soft, warm
// serif that gives headings personality while still reading senior.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Liam Shannon — Portfolio",
    template: "%s — Liam Shannon",
  },
  description:
    "Portfolio of Liam Shannon — full-stack & robotics developer. Palantir Foundry, ROS, and full-stack projects, plus experience and contact info.",
  openGraph: {
    title: "Liam Shannon — Full-Stack & Robotics Developer",
    description:
      "Full-stack & robotics developer. Projects across Palantir Foundry, ROS, and the web — plus experience and how to get in touch.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
