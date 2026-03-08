import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahizh RO Innovation | Commercial RO Plants in Theni",
  description: "High-capacity, energy-efficient commercial RO plants in Theni. Water purification solutions for industries, hospitals, and hotels by Mahizh RO Innovation.",
  keywords: ["Commercial RO plant Theni", "Industrial water purification", "RO maintenance Theni", "Mahizh RO Innovation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
