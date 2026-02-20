import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header"
import Footer from "../components/Footer/Footer"
import I18nProvider from "../components/I18nProvider"
import LanguageSwitcher from "../components/LanguageSwitcher"
import CTAButton from "../components/CTAButton"
import { geistMono, geistSans } from "./fonts";

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
        className={`${geistSans.className} ${geistMono.className} antialiased`}
      >
        <I18nProvider>
          <Header
            actions={
              <>
                <CTAButton />
                <LanguageSwitcher />
              </>
            }
          />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
