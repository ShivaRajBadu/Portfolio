import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    default: "Shiva Raj Badu | Portfolio",
    template: "%s | Shiva Raj Badu",
  },
  description:
    "Shiva Raj Badu - Frontend developer Portfolio site, developed with Next.js, React, and Tailwind CSS.",

  keywords: [
    "portfolio",
    "nextjs",
    "react",
    "tailwindcss",
    "shiva",
    "badu",
    "frontend developer",
    "developer",
    "Shiva raj badu",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="Shiva raj badu | Portfolio" />
        <meta
          property="og:description"
          content="Shiva Raj Badu - Frontend developer Portfolio site, developed with Next.js, React, and Tailwind CSS."
        />
        <meta property="og:image" content="/profile.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shiva raj badu | Portfolio" />
        <meta
          name="twitter:description"
          content="Shiva Raj Badu - Frontend developer Portfolio site, developed with Next.js, React, and Tailwind CSS."
        />
        <meta name="twitter:image" content="/profile.png" />
      </Head>

      <body className={`${inter.variable} ${roboto.variable}`}>
        <Navbar />
        {children}
        {/* <ProfileInfo />
          <div className="h-full">{children}</div>
          <NavigationBar /> */}
        <Footer />
      </body>
    </html>
  );
}
