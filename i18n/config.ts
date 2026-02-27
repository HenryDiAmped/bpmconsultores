import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar traducciones en español
import esCommon from './locales/es/common.json';
import esNavigation from './locales/es/navigation.json';
import esHeader from './locales/es/header.json';
import esHero from './locales/es/hero.json';
import esFooter from './locales/es/footer.json';
import esFooterBranding from './locales/es/footerBranding.json';
import esBlog from './locales/es/blog.json';
import esImpact from './locales/es/impact.json';
import esPartners from './locales/es/partners.json';
import esInformation from './locales/es/information.json';
import esVideoCarousel from './locales/es/videoCarousel.json';
import esReviews from './locales/es/reviews.json';
import esPartner from './locales/es/partner.json';
import esBlogsSection from './locales/es/blogsSection.json';
import esFaq from './locales/es/faq.json';
import esContact from './locales/es/contact.json';

// Importar traducciones en inglés
import enCommon from './locales/en/common.json';
import enNavigation from './locales/en/navigation.json';
import enHeader from './locales/en/header.json';
import enHero from './locales/en/hero.json';
import enFooter from './locales/en/footer.json';
import enFooterBranding from './locales/en/footerBranding.json';
import enBlog from './locales/en/blog.json';
import enImpact from './locales/en/impact.json';
import enPartners from './locales/en/partners.json';
import enInformation from './locales/en/information.json';
import enVideoCarousel from './locales/en/videoCarousel.json';
import enReviews from './locales/en/reviews.json';
import enPartner from './locales/en/partner.json';
import enBlogsSection from './locales/en/blogsSection.json';
import enFaq from './locales/en/faq.json';
import enContact from './locales/en/contact.json';

const resources = {
  es: {
    translation: {
      common: esCommon,
      nav: esNavigation,
      header: esHeader,
      hero: esHero,
      footer: esFooter,
      footerBranding: esFooterBranding,
      blog: esBlog,
      impact: esImpact,
      partners: esPartners,
      information: esInformation,
      videoCarousel: esVideoCarousel,
      reviews: esReviews,
      partner: esPartner,
      blogsSection: esBlogsSection,
      faq: esFaq,
      contact: esContact,
    },
  },
  en: {
    translation: {
      common: enCommon,
      nav: enNavigation,
      header: enHeader,
      hero: enHero,
      footer: enFooter,
      footerBranding: enFooterBranding,
      blog: enBlog,
      impact: enImpact,
      partners: enPartners,
      information: enInformation,
      videoCarousel: enVideoCarousel,
      reviews: enReviews,
      partner: enPartner,
      blogsSection: enBlogsSection,
      faq: enFaq,
      contact: enContact,
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
