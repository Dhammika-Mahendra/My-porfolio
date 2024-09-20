'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Nav/Navbar";
import Context from "./Context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <Context>
    <html lang="en">
      <body className={inter.className}>{children}
      <Navbar></Navbar>
      </body>
    </html>
    </Context>
  );
}
