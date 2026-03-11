'use client';

import HumandSection from '@/components/humand-section/HumandSection';
import { useTranslation } from 'react-i18next';

export default function HumandPartnerPage() {
  const { t } = useTranslation();

  return (
    <main style={{ padding: 40 }}>
      <HumandSection />
    </main>
  )
}
