import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import ModernFooter from "@/components/footer/ModernFooter";
import { inter } from "./fonts";
import { CookieSystem } from "@/components/cookies/CookieSystem";
import { CookieProvider } from "@/lib/cookies/CookieContext";

export const metadata: Metadata = {
  title: "BPM Consultores",
  description: "Portal oficial de BPM Consultores",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CookieProvider>
          <Header />
          <main>
            {children}
          </main>
          <footer>
            <ModernFooter />
          </footer>

          {/* Sistema de consentimiento de cookies */}
          <CookieSystem />
        </CookieProvider>
      </body>
    </html>
  );
}