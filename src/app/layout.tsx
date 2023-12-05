import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./NavBar/NavBar";
import Footer from "./Footer";
import SessionProvider from "./SessionProvider";
import IntroForHome from "@/app/IntroForHome";
import Canvas from "@/components/Canvas";
import "@stripe/stripe-js";
import { BrowserRouter } from "react-router-dom";
import FacebookMsg from "@/components/FacebookMsg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LYS - Home",
  description: "We make you love yourself",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <script src="https://js.stripe.com/v3/" async></script>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body className={inter.className}>
        <SessionProvider>
          <Navbar />
          <IntroForHome />

          <main className="m-auto -mt-12 min-w-[300px] max-w-7xl p-4">
            {children}
          </main>

          <div className="hidden opacity-80 xl:flex">
            <Canvas />
          </div>
          <Footer />
          <FacebookMsg/>
        </SessionProvider>
      </body>
    </html>
  );
}
