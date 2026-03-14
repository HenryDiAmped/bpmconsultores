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

export const metadata: Metadata = {
  title: "BPM Consultores",
  description: "Portal oficial de BPM Consultores",
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  
  // Obtenemos los diccionarios de traducción del servidor
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          
          {/* 1. Tu Header va arriba de todo */}
          <Header />
          
          {/* 2. El contenido de tus páginas (page.tsx) */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* 3. Tu Footer va al final */}
          <ModernFooter />

        </NextIntlClientProvider>
      </body>
    </html>
  );
}