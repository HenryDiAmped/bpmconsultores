'use client';

//import { useTranslation } from 'react-i18next';
import ContactStructure from "@/components/contact-structure"

export default function ContactoPage() {
  //const { t } = useTranslation();

  return (
    <main style={{ padding: 0 }}>
      {/*<h1>{t('contact.title')}</h1>*/}
      <ContactStructure/>
    </main>
  )
}
