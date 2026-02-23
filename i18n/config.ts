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
        title: 'Soluciones Estratégicas Para Transformar tu negocio',
        subtitle: 'Consultoría especializada en crecimiento, eficiencia y expansión internacional potenciada por inteligencia artificial avanzada de la mano con Humand.',
        cta: 'Quiero una Demo',
        button: 'Ver detalles de la alianza',
        partnerLink: 'Conoce a nuestro partner',
        mainQuestion: {
          title: '¿Tu empresa realmente conoce a su gente?',
          description: 'La mayoría cree que sí. Los datos dicen otra cosa. Transforma la forma en que entiendes, mides y potencias a tu equipo a nivel global.',
        },
        questions: {
          q1: '¿Mides el clima laboral en tiempo real o esperas encuestas anuales?',
          q1Description: 'Las encuestas anuales son fotografías del pasado. Con tecnología en tiempo real, puedes detectar problemas antes de que escalen y actuar de inmediato.',
          q2: '¿Cuánto talento estás perdiendo sin darte cuenta?',
          q2Description: 'La rotación no empieza el día que alguien renuncia. Empieza meses antes, cuando deja de sentirse valorado, escuchado o motivado. ¿Puedes verlo a tiempo?',
          q3: '¿Tus líderes gestionan personas o solo administran tareas?',
          q3Description: 'Con la tecnología de Humand, empoderamos a los líderes directos (gerentes, jefes de área) para que puedan ver en tiempo real: Sentimiento del equipo, Riesgos de rotación, Necesidades de capacitación, Brechas en verdadero liderazgo de talento.',
          q4: '¿Tomas decisiones basadas en datos o en intuiciones?',
          q4Description: 'Las intuiciones son valiosas, pero los datos te dan certeza. Conoce métricas clave de tu equipo y toma decisiones estratégicas respaldadas por información real.',
        },
      },
      video: {
        title: 'Descubre cómo transformamos negocios',
        subtitle: 'Conoce nuestra metodología y casos de éxito que han impulsado el crecimiento de empresas en toda Latinoamérica.',
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
        title: 'Strategic Solutions To Transform your business',
        subtitle: 'Specialized consulting in growth, efficiency and international expansion powered by advanced artificial intelligence in partnership with Humand.',
        cta: 'Request a Demo',
        button: 'View alliance details',
        partnerLink: 'Meet our partner',
        mainQuestion: {
          title: 'Does your company really know its people?',
          description: 'Most think they do. The data says otherwise. Transform the way you understand, measure and empower your team globally.',
        },
        questions: {
          q1: 'Do you measure workplace climate in real-time or wait for annual surveys?',
          q1Description: 'Annual surveys are snapshots of the past. With real-time technology, you can detect problems before they escalate and act immediately.',
          q2: 'How much talent are you losing without realizing it?',
          q2Description: 'Turnover doesn\'t start the day someone resigns. It starts months earlier, when they stop feeling valued, heard, or motivated. Can you see it in time?',
          q3: 'Do your leaders manage people or just administer tasks?',
          q3Description: 'With Humand technology, we empower direct leaders (managers, area heads) so they can see in real-time: Team sentiment, Turnover risks, Training needs, Gaps in true talent leadership.',
          q4: 'Do you make decisions based on data or intuition?',
          q4Description: 'Intuitions are valuable, but data gives you certainty. Know key metrics about your team and make strategic decisions backed by real information.',
        },
      },
      video: {
        title: 'Discover how we transform businesses',
        subtitle: 'Learn about our methodology and success stories that have driven business growth across Latin America.',
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
