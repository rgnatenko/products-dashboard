import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "../components/Providers";
import Circles from "@/components/Circles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Products dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <div className="relative bg-gray-950 overflow-x-hidden h-screen p-6 flex flex-col justify-between items-center">
            {children}
          </div>
        </body>
      </Providers>
    </html>
  );
}
