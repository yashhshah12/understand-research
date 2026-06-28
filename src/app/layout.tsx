import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {AuthLinks} from '../components/AuthLinks';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Understand-research",
  description: "Research-platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showAuthlinks = process.env.NEXT_PUBLIC_SHOW_AUTH === 'true';
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-dv">
        {showAuthlinks && (
      <AuthLinks /> 
        )
        }
        
        {children}</body>
    </html>
  );
}
