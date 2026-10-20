import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AOSInit } from "@/components/aos-init";
import { Montserrat } from "next/font/google";
// import NextTopLoader from "nextjs-toploader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "White Swan Advisors",
  description: "Boutique Merchant Bank and Capital Advisory Firm For The Lower-middle Market. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}>
        {/* <NextTopLoader color="#153147" showSpinner={false} /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
