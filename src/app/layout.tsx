import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer";

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
  openGraph: {
    title: "Shiva Raj Badu | Portfolio",
    description:
      "Shiva Raj Badu - Frontend developer Portfolio site, developed with Next.js, React, and Tailwind CSS.",
    url: "shivarajbadu.com.np",
    siteName: "Shiva Raj Badu",
    images: [
      {
        url: "https://portfolio-git-main-shivarajbadu.vercel.app/profile.png",
        width: 360,
        height: 450,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiva Raj Badu | Portfolio",
    description:
      "Shiva Raj Badu - Frontend developer Portfolio site, developed with Next.js, React, and Tailwind CSS.",
    images: ["https://portfolio-git-main-shivarajbadu.vercel.app/profile.png"],
  },

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
