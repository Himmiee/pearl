import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Providers from "@/providers";
import { Toaster } from "@/components/ui/toaster";

const barlow = Barlow({
  subsets: ["latin"], // Choose the appropriate subsets, e.g., "latin"
  weight: ["100", "300", "400", "500", "700"], // Specify the font weights you need
});
export const metadata: Metadata = {
  title: "Pearl Website",
  description: "Official Website of Pearl Projects",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
