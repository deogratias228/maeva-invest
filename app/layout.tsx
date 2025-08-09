import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Schoolbell } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['300', '400', '600'],
});

const logoFont = Schoolbell ({
  variable: "--font-scoolbell",
  weight: ['400']
});

export const metadata: Metadata = {
  title: "Trust Invest",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} ${logoFont.variable} antialiased dark:bg-green-300`}
      >
        {children}
      </body>
    </html>
  );
}
