import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "IEEE Ashoka Student Branch | Building Bridges in STEM @ Ashoka",
  description:
    "IEEE Ashoka Student Branch fosters technological innovation and excellence at Ashoka University. Join us for workshops, seminars, and projects bridging academia and industry.",
  keywords:
    "IEEE Ashoka, IEEE Student Branch, Ashoka University, STEM, Technology, Engineering, Science",
  authors: [{ name: "IEEE Ashoka IT Team" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ieee-ashoka.in",
    siteName: "IEEE Ashoka Student Branch",
    title: "IEEE Ashoka Student Branch | Building Bridges in STEM @ Ashoka",
    description:
      "IEEE Ashoka Student Branch fosters technological innovation and excellence at Ashoka University. Join us for workshops, seminars, and projects bridging academia and industry.",
    images: [
      {
        url: "/images/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "IEEE Ashoka Student Branch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IEEE Ashoka Student Branch | Building Bridges in STEM @ Ashoka",
    description:
      "IEEE Ashoka Student Branch fosters technological innovation and excellence at Ashoka University. Join us for workshops, seminars, and projects bridging academia and industry.",
    images: ["/images/hero-1.jpg"],
    creator: "@IEEEAshoka",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
