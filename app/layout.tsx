import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Vinox Technologies | Specialty Chemicals Manufacturer",
  description:
    "Vinox Technologies - Leading manufacturer of specialty chemicals for industrial cleaning. Serving HORECA, Dairy & Food, Institutional Cleaning, and Hospitality sectors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/jpg"
          sizes="32x32"
        />
      </head>
      <body className={cn("")}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
