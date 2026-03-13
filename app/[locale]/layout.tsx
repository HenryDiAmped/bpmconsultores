import type { Metadata } from "next";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';


import "../globals.css";
import Header from "@/components/header";
import ModernFooter from "@/components/footer/ModernFooter";
import { inter } from "../fonts";
import { CookieSystem } from "@/components/cookies/CookieSystem";
import { CookieProvider } from "@/lib/cookies/CookieContext";
import { I18nProvider } from "@/lib/i18n/I18nProvider";
import WhatsAppButton from "@/components/ui/whatsapp-button";

export const metadata: Metadata = {
  title: "BPM Consultores",
  description: "Portal oficial de BPM Consultores",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <I18nProvider>
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
            <WhatsAppButton />
          </CookieProvider>
        </I18nProvider>
        </NextIntlClientProvider>
      </body>
    </html>

  );
}