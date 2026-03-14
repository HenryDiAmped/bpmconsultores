// app/[locale]/layout.tsx

import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

// Importaciones globales
import "../globals.css";
import { inter } from "../fonts";

// Importamos tus componentes de UI
import Header from "@/components/header/header";
import ModernFooter from "@/components/footer/ModernFooter";
import { CookieProvider } from "@/lib/cookies/CookieContext";
import { CookieSystem } from "@/components/cookies/CookieSystem";
import WhatsAppButton from "@/components/ui/whatsapp-button";

export const metadata: Metadata = {
  title: "BPM Consultores",
  description: "Portal oficial de BPM Consultores",
};

export default async function RootLayout({
  children,
  params // 1. Recibimos params sin desestructurar aquí
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // 2. Actualizamos el tipo a Promise
}) {

  // 3. Resolvemos la promesa para obtener el locale
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  // Obtenemos los diccionarios de traducción del servidor
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <CookieProvider>
            <Header />

            <main className="min-h-screen">
              {children}
            </main>

            <ModernFooter />
            <CookieSystem />
          </CookieProvider>
          <WhatsAppButton/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}