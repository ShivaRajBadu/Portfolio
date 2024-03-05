import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Shiva Raj Badu - Portfolio",
  description: "Frontend developer Portfolio by Shiva Raj Badu",
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
      </body>
    </html>
  );
}
