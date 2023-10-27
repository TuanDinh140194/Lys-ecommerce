import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./NavBar/NavBar";
import Footer from "./Footer";
import SessionProvider  from "./SessionProvider";
import Intro from "@/components/Intro";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LYS",
  description: "We make you love yourself",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Navbar/>
          <Intro />
          <main className="m-auto min-w-[300px] max-w-7xl -mt-10 p-4 mb-4">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
