import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "AI Creative Engine | Evan Pancis";
const siteDescription =
  "A spec candidate prototype showing how creative briefs can become repeatable, QA-ready AI production workflows.";

export const metadata: Metadata = {
  metadataBase: new URL("https://colliersimon-ai-creative-engine.vercel.app"),
  title: siteTitle,
  description: siteDescription,
  applicationName: "AI Creative Engine",
  authors: [{ name: "Evan Pancis" }],
  creator: "Evan Pancis",
  keywords: [
    "Creative Technologist",
    "AI workflow systems",
    "creative QA",
    "brand context",
    "prompt engineering",
    "production handoff",
    "performance creative"
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    images: [
      {
        url: "/og-placeholder.svg",
        width: 1200,
        height: 630,
        alt: "AI Creative Engine spec prototype preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-placeholder.svg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
