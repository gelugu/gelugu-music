import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/analytics";
import PixelTracker from "@/components/pixel-tracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Gelugu Music",
    description: "Gelugu - indie electronic music artist",
    keywords: ['gelugu', 'music', 'indie', 'electronic'],
    metadataBase: new URL('https://music.gelugu.com'),
    alternates: {
        canonical: '/',
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://music.gelugu.com',
        siteName: 'Gelugu Music',
        title: 'Gelugu Music',
        description: 'Gelugu - indie electronic music artist',
        images: [
            {
                url: 'https://ams1.vultrobjects.com/gelugu-music/cover.webp',
                width: 300,
                height: 300,
                alt: 'Gelugu - indie electronic music artist',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Gelugu Music',
        description: 'Gelugu - indie electronic music artist',
        images: ['https://ams1.vultrobjects.com/gelugu-music/cover.webp'],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics/>
        <PixelTracker/>
        {children}
      </body>
    </html>
  );
}
