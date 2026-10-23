import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "White Swan Advisors",
  description: "Boutique Merchant Bank and Capital Advisory Firm For The Lower-middle Market.",
  icons: {
    icon: "/wsa-favicon.png",
    shortcut: "/wsa-favicon.png",
    apple: "/wsa-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden bg-[#0c131c]">
      <AOSInit />
      <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased bg-[#0c131c] text-white overflow-x-hidden min-h-screen w-full relative`}>
        {/* <NextTopLoader color="#153147" showSpinner={false} /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
