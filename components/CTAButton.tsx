'use client';

import { useTranslation } from 'react-i18next';

export default function CTAButton() {
  const { t } = useTranslation();

  return (
    <button className="cta" aria-label={t('cta')}>
      {t('cta')}
    </button>
  );
}
