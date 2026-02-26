import type { Metadata } from "next";
import "./globals.css";
import I18nProvider from "@/components/I18nProvider"
import Header from "@/components/header"
import { geistMono, bricolage } from "./fonts";
import Footer from "@/components/footer/footer";


export const metadata: Metadata = {
  title: "BPM Consultores",
  description: "Especialistas en crecimiento y expansión",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${bricolage.className} ${geistMono.className} antialiased`}
      >
        <I18nProvider>
          <Header />
          <div className="min-h-screen pt-16">
            {children}
          </div>
          <Footer/>
        </I18nProvider>
      </body>
    </html>
  );
}
