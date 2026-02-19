'use client';

import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button 
      className="lang" 
      onClick={toggleLanguage}
      aria-label={`Change to ${i18n.language === 'es' ? 'English' : 'Español'}`}
    >
      {i18n.language.toUpperCase()}
    </button>
  );
}
