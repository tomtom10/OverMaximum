import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: "Over Maximum Records - Push Beyond The Limit",
  description: "Over Maximum is a cutting-edge record label pushing the boundaries of sound. Discover groundbreaking artists and revolutionary music.",
  keywords: ["record label", "music", "artists", "releases", "over maximum"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
