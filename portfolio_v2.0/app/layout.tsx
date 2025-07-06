
'use client';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import FullScreenLoader from './components/FullScreenLoader';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

const colfax = localFont({
  src: [
    { path: '../public/fonts/Colfax-Regular.otf', weight: '400', style: 'normal' },
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

const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Welcome to my portfolio.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
    }
    const timeout = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timeout);
  }, []);


  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${colfax.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {loading ? <FullScreenLoader /> : children}
        </ThemeProvider>
      </body>
    </html>
  );
}