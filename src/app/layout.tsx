import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parth Soni — Full Stack Software Engineer",
  description:
    "Backend-first. AI-powered. Always shipping. Full Stack Software Engineer specializing in Node.js, NestJS, Next.js, and AI-powered systems.",
  keywords: [
    "Parth Soni",
    "Full Stack Engineer",
    "Backend Engineer",
    "Node.js",
    "NestJS",
    "Next.js",
    "AI Engineer",
    "Software Engineer",
    "Ahmedabad",
    "India",
  ],
  authors: [{ name: "Parth Soni", url: "https://github.com/parths07" }],
  creator: "Parth Soni",
  openGraph: {
    type: "website",
    title: "Parth Soni — Full Stack Software Engineer",
    description:
      "Backend-first. AI-powered. Always shipping.",
    siteName: "Parth Soni Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parth Soni — Full Stack Software Engineer",
    description: "Backend-first. AI-powered. Always shipping.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
