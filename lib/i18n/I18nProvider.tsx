'use client';

import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './config';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Detectar idioma del navegador
    const browserLang = navigator.language.split('-')[0];
    const savedLang = localStorage.getItem('language');
    
    if (!savedLang && (browserLang === 'es' || browserLang === 'en')) {
      i18n.changeLanguage(browserLang);
    }
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
