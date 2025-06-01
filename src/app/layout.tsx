import type { Metadata } from "next";
import { AR_One_Sans } from "next/font/google";
import "./globals.css";

const arOneSans = AR_One_Sans({
  subsets: ["latin"],
  variable: "--font-ar-one-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PredMed",
  description: "A Next.js application for medical predictions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${arOneSans.variable} antialiased`}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
