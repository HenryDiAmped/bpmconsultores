'use client';

import HumandPresentation from '@/components/humand-presentation/HumandSection';
import { useTranslation } from 'react-i18next';

export default function HumandPartnerPage() {
  const { t } = useTranslation();

  return (
    <main style={{ padding: 40 }}>
      <HumandPresentation />
    </main>
  )
}
