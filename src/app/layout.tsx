import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
})

export const metadata: Metadata = {
  title: "Webarify | Web Design, Branding & Digital Solutions Agency in Morocco",
  description: "Webarify is a top-tier web design and branding agency based in Morocco, serving clients worldwide. We craft stunning, high-performance websites, build unique brand identities, develop intelligent chatbots, and deliver powerful digital strategies that help businesses grow, convert, and lead in their industry.",
  keywords: [
    "web design agency",
    "web development agency",
    "branding agency",
    "digital agency Morocco",
    "UI/UX design",
    "e-commerce websites",
    "chatbot development",
    "SEO services",
    "web development Morocco",
    "creative branding",
    "responsive websites",
    "Moroccan web agency",
    "custom website design",
    "business growth solutions",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header/>
      <body
        className={`${raleway.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-SWQ3GJCQHG" />
      <Footer/>
    </html>
  );
}
