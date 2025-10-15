import type { Metadata } from "next";
import { Geist, Geist_Mono, Khand } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const khand = Khand({
  variable: "--font-khand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pulses by StepTwo - Financial Markets Community",
  description: "Connect with investors, share stock picks, and build portfolios in our financial markets community. A StepTwo product.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${khand.variable} antialiased`}
      >
        <Header />
        <div className="container mx-auto px-4 py-8">
          <main className="max-w-6xl mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
