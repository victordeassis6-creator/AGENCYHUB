import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AgencyHub | Operação Profissional",
  description: "Plataforma de gestão operacional para agências.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-outfit min-h-screen flex antialiased">
        <Sidebar />
        <div className="flex flex-1 flex-col sm:pl-64">
          <Header />
          <main className="flex-1 p-8 lg:p-12 space-y-8 lg:space-y-12">
            {children}
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
