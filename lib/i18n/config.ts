import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar traducciones
import commonEs from './locales/es/common.json';
import commonEn from './locales/en/common.json';
import headerEs from './locales/es/header.json';
import headerEn from './locales/en/header.json';
import footerEs from './locales/es/footer.json';
import footerEn from './locales/en/footer.json';
import heroEs from './locales/es/hero.json';
import heroEn from './locales/en/hero.json';
import cookiesEs from './locales/es/cookies.json';
import cookiesEn from './locales/en/cookies.json';

const resources = {
  es: {
    common: commonEs,
    header: headerEs,
    footer: footerEs,
    hero: heroEs,
    cookies: cookiesEs,
  },
  en: {
    common: commonEn,
    header: headerEn,
    footer: footerEn,
    hero: heroEn,
    cookies: cookiesEn,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: typeof window !== 'undefined' ? localStorage.getItem('language') || 'es' : 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// Guardar preferencia de idioma
i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lng);
    document.documentElement.lang = lng;
  }
});

export default i18n;
