// Cookie consent types for GDPR/LGPD compliance

export type CookieCategory = 'essential' | 'analytics' | 'marketing' | 'functional';

export interface CookieConsent {
  essential: boolean;      // Always true
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  timestamp: number;
  version: string;         // Policy version
}

export interface CookieDefinition {
  name: string;
  category: CookieCategory;
  purpose: string;
  duration: string;
  provider: string;
}
