'use client';

import { useTranslation } from 'react-i18next';

export default function ServicesPage() {
  const { t } = useTranslation();
  
  return (
    <main style={{ padding: 40 }}>
      <h1>{t('services.title')}</h1>
      <p>{t('services.description')}</p>
    </main>
  )
}
