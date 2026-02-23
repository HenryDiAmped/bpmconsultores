import type { Metadata } from "next";
import "./globals.css";
import I18nProvider from "@/components/I18nProvider"
import { geistMono, bricolage } from "./fonts";
import { Ripple } from "@/components/ui/ripple";

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
        <Ripple/>
        <I18nProvider>
          {children}
        </I18nProvider>
        
      </body>
    </html>
  );
}
