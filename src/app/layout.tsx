import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Jessi Magic - AI Productivity & Intelligence Platform",
  description:
    "Advanced AI tools for narrative forensics, missing persons workflows, and defensible documentation. Trusted by universities, law firms, and investigators.",
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
      </body>
    </html>
  );
}
