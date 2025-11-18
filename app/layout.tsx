import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Julius Matheka Charles | Software Engineer",
  description:
    "Software Engineer specializing in building scalable web applications with machine learning capabilities. Expert in Python, Java, React, and modern web technologies.",
  icons: {
    icon: "/logo/logo.png",
  },
  keywords: [
    "Software Engineer",
    "Machine Learning",
    "Python",
    "Java",
    "React",
    "Next.js",
    "Django",
    "Web Development",
  ],
  authors: [{ name: "Julius Matheka Charles" }],
  openGraph: {
    title: "Julius Matheka Charles | Software Engineer",
    description:
      "Building intelligent solutions through scalable web applications and machine learning integration",
    url: "https://www.juliusmatheka.space/",
    siteName: "Julius Matheka Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julius Matheka Charles | Software Engineer",
    description:
      "Building intelligent solutions through scalable web applications and machine learning integration",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
