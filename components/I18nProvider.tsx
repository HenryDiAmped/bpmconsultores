'use client';

import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config';

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Cargar idioma guardado del localStorage
    const savedLang = localStorage.getItem('language');
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      i18n.changeLanguage(savedLang);
    }

    // Guardar cambios de idioma en localStorage
    const handleLanguageChange = (lng: string) => {
      localStorage.setItem('language', lng);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
