'use client';

import { useTranslation } from 'react-i18next';

export default function NosotrosPage() {
  const { t } = useTranslation();
  
  return (
    <main style={{ padding: 40 }}>
      <h1>{t('about.title')}</h1>
      <p>{t('about.description')}</p>
    </main>
  )
}
