import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import AnimatedCursor from "react-animated-cursor";
import { Analytics } from "@vercel/analytics/react";

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
      <meta
        name="google-site-verification"
        content="Ltx8Hhup4SW-ViWKxRZUizC1suThX327q9FrFUMx2SE"
      />
      <body className={`${inter.variable} ${roboto.variable}`}>
        {/* <MouseFollower /> */}
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          innerStyle={{
            backgroundColor: "#fff",
          }}
          outerStyle={{
            border: "2px solid #fff",
          }}
        />
        <Navbar />
        {children}
        {/* <ProfileInfo />
          <div className="h-full">{children}</div>
          <NavigationBar /> */}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
