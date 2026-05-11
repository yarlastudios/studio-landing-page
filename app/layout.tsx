import type { Metadata } from "next";
import {
  Instrument_Serif,
  Inter_Tight,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Cursor } from "@/components/ui/Cursor";

const fontDisplay = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const fontSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Yarla Studios - Digital craft for ambitious brands",
  description:
    "Independent design and engineering practice building websites, products, and brand systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontMono.variable} ${fontSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Cursor />
        <Nav />
        {children}
      </body>
    </html>
  );
}
