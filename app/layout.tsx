import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lion.industries"),
  title: {
    default: "Lion Industries — Small software, built with care",
    template: "%s — Lion Industries",
  },
  description:
    "David van Leeuwen’s independent company for useful apps, curious experiments, and occasional hardware.",
  applicationName: "Lion Industries",
  authors: [{ name: "David van Leeuwen", url: "https://davidvanleeuwen.nl" }],
  creator: "David van Leeuwen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lion.industries",
    siteName: "Lion Industries",
    title: "Lion Industries — Small software, built with care",
    description:
      "David van Leeuwen’s independent company for useful apps, curious experiments, and occasional hardware.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Lion Industries — Small software. Built with care.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lion Industries — Small software, built with care",
    description:
      "David van Leeuwen’s independent company for useful apps and curious experiments.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#11110f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
