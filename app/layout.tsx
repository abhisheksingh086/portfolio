import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Software Development & AI Solutions Agency",
  description: "We help startups and businesses build scalable web applications, AI-powered solutions, APIs, dashboards, SaaS platforms, and mobile applications.",
  keywords: ["web development", "AI solutions", "mobile apps", "Laravel", "MERN stack", "Flutter", "custom software"],
  authors: [{ name: "Agency Team" }],
  openGraph: {
    title: "Software Development & AI Solutions Agency",
    description: "We help startups and businesses build scalable web applications, AI-powered solutions, APIs, dashboards, SaaS platforms, and mobile applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
