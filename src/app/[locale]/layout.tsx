import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';
import {NextIntlClientProvider} from 'next-intl';
import {getLocale} from 'next-intl/server';

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


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale();

  return (
    <html lang={locale}>
      
      <NextIntlClientProvider>  
        <Header/>
        <body
          className={`${raleway.variable} antialiased`}
        >
          {children}
        </body>
      </NextIntlClientProvider>
      <GoogleAnalytics gaId="G-SWQ3GJCQHG"/>
      <Footer/>
    </html>
  );  
}
