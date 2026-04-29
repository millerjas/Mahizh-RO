import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import GlobalOverlays from "@/components/ui/GlobalOverlays";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mahizhroservices.com"),
  title: "Mahizh RO Innovation | Commercial RO Plants in Theni",
  description: "High-capacity, energy-efficient commercial RO plants in Theni. Water purification solutions for industries, hospitals, and hotels by Mahizh RO Innovation.",
  keywords: ["Commercial RO plant Theni", "Industrial water purification", "RO maintenance Theni", "Mahizh RO Innovation"],
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={styles.html}>
      <body className={`${inter.variable} ${styles.body}`}>
        <GlobalOverlays />
        <div className={styles.mainContainer}>
          {children}
        </div>
        {/* <script async src=""></script> */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZLXWV93Y0Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZLXWV93Y0Y');
          `}
        </Script>
      </body>
    </html>
  );
}