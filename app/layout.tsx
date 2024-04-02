import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinox Technologies",
  description: "vinox technologies, wai ",
  icons: {
    icon: [
      {
        url: "/logo.jpg",
        href: "/logo.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Navbar />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
