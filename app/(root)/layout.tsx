import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "../globals.css";

const cartesianFont = localFont({
  src: [
    {
      path: "../../public/fonts/Cartesian-4B576.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cartesian-0W5Oo.otf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-cartesian",
});

export const metadata: Metadata = {
  title: "Kenny Collins Dev Portfolio",
  description: "Welcome to my developer portfolio :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cartesianFont.variable}`}>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
