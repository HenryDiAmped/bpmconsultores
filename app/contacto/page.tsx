'use client';

import { useTranslation } from 'react-i18next';
import ContactForm from "@/components/contact-form"

export default function ContactoPage() {
  const { t } = useTranslation();

  return (
    <main style={{ padding: 40 }}>
      <h1>{t('contact.title')}</h1>
      <ContactForm/>
    </main>
  )
}
