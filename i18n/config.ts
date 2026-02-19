import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        services: 'Servicios',
        about: 'Nosotros',
        blog: 'Blog',
        contact: 'Contacto',
      },
      cta: 'Comienza Ya',
      hero: {
        title: 'Alianza estratégica: B2B SaaS y...',
        subtitle: 'Unimos nuestra consultoría experta con la plataforma de RR.HH. líder en Latinoamérica.',
        button: 'Ver detalles de la alianza',
      },
      about: {
        title: 'Nosotros',
        description: 'Somos BPM Consultores, especialistas en crecimiento y expansión apoyados en soluciones tecnológicas y experiencia de negocio.',
      },
      services: {
        title: 'Servicios',
        description: 'Somos BPM Consultores, especialistas en crecimiento y expansión apoyados en soluciones tecnológicas y experiencia de negocio.',
      },
      contact: {
        title: 'Contacto',
      },
      blog: {
        title: 'Blog',
        readMore: 'Leer más',
        author: 'Autor',
        date: 'Fecha',
        backToList: 'Volver al blog',
        post1: {
          title: 'Primer Post de Ejemplo',
          excerpt: 'Este es un extracto del primer post de ejemplo en español.',
        },
        post2: {
          title: 'Segundo Post de Ejemplo',
          excerpt: 'Este es un extracto del segundo post de ejemplo en español.',
        },
      },
      footer: {
        copyright: 'Todos los derechos reservados',
        product: 'Product',
        features: 'Features',
        pricing: 'Pricing',
        faq: 'FAQ',
        company: 'Company',
        about: 'About',
        contact: 'Contact',
        careers: 'Careers',
        legal: 'Legal',
        privacy: 'Privacy',
        terms: 'Terms',
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Services',
        about: 'About',
        blog: 'Blog',
        contact: 'Contact',
      },
      cta: 'Get Started',
      hero: {
        title: 'Strategic Alliance: B2B SaaS and...',
        subtitle: 'We unite our expert consulting with the leading HR platform in Latin America.',
        button: 'View alliance details',
      },
      about: {
        title: 'About Us',
        description: 'We are BPM Consultores, specialists in growth and expansion supported by technological solutions and business experience.',
      },
      services: {
        title: 'Services',
        description: 'We are BPM Consultores, specialists in growth and expansion supported by technological solutions and business experience.',
      },
      contact: {
        title: 'Contact',
      },
      blog: {
        title: 'Blog',
        readMore: 'Read more',
        author: 'Author',
        date: 'Date',
        backToList: 'Back to blog',
        post1: {
          title: 'First Example Post',
          excerpt: 'This is an excerpt from the first example post in English.',
        },
        post2: {
          title: 'Second Example Post',
          excerpt: 'This is an excerpt from the second example post in English.',
        },
      },
      footer: {
        copyright: 'All rights reserved',
        product: 'Product',
        features: 'Features',
        pricing: 'Pricing',
        faq: 'FAQ',
        company: 'Company',
        about: 'About',
        contact: 'Contact',
        careers: 'Careers',
        legal: 'Legal',
        privacy: 'Privacy',
        terms: 'Terms',
      },
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
