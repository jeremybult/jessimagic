import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jessi Magic - AI Productivity & Intelligence Platform",
  description: "Advanced AI tools for narrative forensics, missing persons workflows, and defensible documentation. Trusted by universities, law firms, and investigators.",
  keywords: "AI, productivity, intelligence, narrative forensics, stylometry, compliance, investigation",
  authors: [{ name: "Jessi Magic" }],
  openGraph: {
    title: "Jessi Magic - AI Productivity & Intelligence Platform",
    description: "Advanced AI tools for narrative forensics, missing persons workflows, and defensible documentation.",
    url: "https://jessimagic.com",
    siteName: "Jessi Magic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jessi Magic - AI Productivity & Intelligence Platform",
    description: "Advanced AI tools for narrative forensics, missing persons workflows, and defensible documentation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-gray-900 text-white">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
