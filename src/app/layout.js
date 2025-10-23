import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | NextJS ITI ",
    default: "NextJS 13.4 App Router - ITI",
  },
  description:
    "A Next.js project for ITI Frontend Development & Cross Platform Mobile Applications training courses and tutorials.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-black
           dark:text-white transition-colors duration-500  `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
