import type { Metadata } from "next";

import { Urbanist } from "next/font/google";

import "./globals.css";
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/scrollbar"


import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Dev",
  description: "Landing page for smart.jsx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${urbanist.variable} antialiased`}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
