import type { Metadata } from "next";
import { Inter, Calistoga } from 'next/font/google'
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans'});
const calistoga = Calistoga({ 
  subsets: ['latin'], 
  variable: '--font-serif', 
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Steven's Portfolio",
  description: "Job Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={twMerge(
          inter.variable,
          calistoga.variable, 
          "bg-gradient-to-r from-gray-900 via-purple-500 to-gray-700 text-white antialiased font-sans" // Orginal is - "bg-gray-900 text-white antialiased font-sans"
        )}
      >
          {children}
      </body>
    </html>
  );
}
