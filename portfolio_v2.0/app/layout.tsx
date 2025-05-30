import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Welcome to my portfolio ."
};


const colfax = localFont({
  src: [
    // Regular
    {
      path: '../public/fonts/Colfax-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Colfax-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    // Thin
    {
      path: '../public/fonts/Colfax-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/Colfax-ThinItalic.otf',
      weight: '100',
      style: 'italic',
    },
    // Light
    {
      path: '../public/fonts/Colfax-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Colfax-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    // Medium
    {
      path: '../public/fonts/Colfax-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Colfax-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    // Bold
    {
      path: '../public/fonts/Colfax-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Colfax-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    // Black
    {
      path: '../public/fonts/Colfax-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/Colfax-BlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-colfax',
  display: 'swap',
});





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
