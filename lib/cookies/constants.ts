import { CookieCategory, CookieDefinition } from './types';

// Storage configuration
export const STORAGE_KEY = 'bpm_cookie_consent';
export const CONSENT_DURATION = 365 * 24 * 60 * 60 * 1000; // 12 months in milliseconds
export const POLICY_VERSION = '1.0';

// Cookie categories with metadata
export const COOKIE_CATEGORIES = {
  essential: {
    title: 'Cookies Esenciales',
    description: 'Necesarias para el funcionamiento básico del sitio. No se pueden desactivar.',
    required: true,
  },
  analytics: {
    title: 'Cookies Analíticas',
    description: 'Nos ayudan a entender cómo los visitantes usan el sitio para mejorar la experiencia.',
    required: false,
  },
  marketing: {
    title: 'Cookies de Marketing',
    description: 'Usadas para mostrar anuncios relevantes y medir la efectividad de campañas.',
    required: false,
  },
  functional: {
    title: 'Cookies Funcionales',
    description: 'Mejoran la funcionalidad y personalización del sitio.',
    required: false,
  },
} as const;

// Cookie definitions for policy page
export const COOKIE_DEFINITIONS: CookieDefinition[] = [
  {
    name: 'bpm_cookie_consent',
    category: 'essential',
    purpose: 'Almacena las preferencias de consentimiento del usuario',
    duration: '12 meses',
    provider: 'BPM Consultores (First-party)',
  },
  {
    name: '_ga',
    category: 'analytics',
    purpose: 'Distingue usuarios únicos para Google Analytics',
    duration: '2 años',
    provider: 'Google Analytics (Third-party)',
  },
  {
    name: '_gid',
    category: 'analytics',
    purpose: 'Distingue usuarios únicos para Google Analytics',
    duration: '24 horas',
    provider: 'Google Analytics (Third-party)',
  },
  {
    name: '_gat',
    category: 'analytics',
    purpose: 'Limita la tasa de solicitudes a Google Analytics',
    duration: '1 minuto',
    provider: 'Google Analytics (Third-party)',
  },
  {
    name: '_fbp',
    category: 'marketing',
    purpose: 'Almacena y rastrea visitas en sitios web para Facebook Pixel',
    duration: '3 meses',
    provider: 'Facebook (Third-party)',
  },
  {
    name: '_gcl_au',
    category: 'marketing',
    purpose: 'Usado por Google AdSense para experimentar con eficiencia publicitaria',
    duration: '3 meses',
    provider: 'Google AdSense (Third-party)',
  },
];
