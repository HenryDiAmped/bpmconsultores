import { CookieConsent, CookieCategory } from './types';
import { STORAGE_KEY, CONSENT_DURATION, POLICY_VERSION } from './constants';

/**
 * CookieManager - Core logic for managing cookie consent
 * Handles localStorage persistence, validation, and script loading decisions
 */
export class CookieManager {
  /**
   * Get current consent from localStorage
   * Returns null if no consent exists or if consent is invalid/expired
   */
  static getConsent(): CookieConsent | null {
    try {
      if (typeof window === 'undefined') return null;

      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return null;

      const parsed = JSON.parse(stored);

      // Validate structure
      if (!this.isValidConsent(parsed)) {
        console.warn('Invalid consent structure, clearing');
        this.clearConsent();
        return null;
      }

      // Check expiration
      if (this.isConsentExpired(parsed)) {
        this.clearConsent();
        return null;
      }

      return parsed;
    } catch (error) {
      console.error('Error reading consent:', error);
      return null;
    }
  }

  /**
   * Save consent to localStorage
   */
  static setConsent(consent: Partial<CookieConsent>): void {
    try {
      if (typeof window === 'undefined') return;

      const fullConsent: CookieConsent = {
        essential: true, // Always true
        analytics: consent.analytics ?? false,
        marketing: consent.marketing ?? false,
        functional: consent.functional ?? false,
        timestamp: Date.now(),
        version: POLICY_VERSION,
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(fullConsent));
    } catch (error) {
      console.error('Error saving consent:', error);
    }
  }

  /**
   * Check if user has given consent (valid and not expired)
   */
  static hasConsent(): boolean {
    return this.getConsent() !== null;
  }

  /**
   * Check if consent has expired
   */
  static isConsentExpired(consent: CookieConsent): boolean {
    const now = Date.now();
    const age = now - consent.timestamp;
    return age > CONSENT_DURATION;
  }

  /**
   * Accept all cookie categories
   */
  static acceptAll(): void {
    this.setConsent({
      analytics: true,
      marketing: true,
      functional: true,
    });
  }

  /**
   * Reject all non-essential cookies
   */
  static rejectAll(): void {
    this.setConsent({
      analytics: false,
      marketing: false,
      functional: false,
    });

    // Clear existing non-essential cookies
    this.clearCookiesByCategory('analytics');
    this.clearCookiesByCategory('marketing');
    this.clearCookiesByCategory('functional');
  }

  /**
   * Update specific preferences
   */
  static updatePreferences(preferences: Partial<CookieConsent>): void {
    const current = this.getConsent();

    this.setConsent({
      analytics: preferences.analytics ?? current?.analytics ?? false,
      marketing: preferences.marketing ?? current?.marketing ?? false,
      functional: preferences.functional ?? current?.functional ?? false,
    });

    // Clear cookies for disabled categories
    if (preferences.analytics === false) {
      this.clearCookiesByCategory('analytics');
    }
    if (preferences.marketing === false) {
      this.clearCookiesByCategory('marketing');
    }
    if (preferences.functional === false) {
      this.clearCookiesByCategory('functional');
    }
  }

  /**
   * Clear all cookies for a specific category
   */
  static clearCookiesByCategory(category: CookieCategory): void {
    if (typeof window === 'undefined') return;
    if (category === 'essential') return; // Never clear essential cookies

    try {
      const cookiesToClear: Record<CookieCategory, string[]> = {
        essential: [],
        analytics: ['_ga', '_gid', '_gat', '_gat_gtag'],
        marketing: ['_fbp', '_gcl_au', 'fr'],
        functional: [],
      };

      const cookies = cookiesToClear[category];

      cookies.forEach(cookieName => {
        // Clear cookie for all paths and domains
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
      });
    } catch (error) {
      console.error('Error clearing cookies:', error);
    }
  }

  /**
   * Determine if a script should be loaded based on consent
   */
  static shouldLoadScript(category: CookieCategory): boolean {
    if (category === 'essential') return true;

    const consent = this.getConsent();
    if (!consent) return false;

    return consent[category] === true;
  }

  /**
   * Clear all consent data
   */
  static clearConsent(): void {
    try {
      if (typeof window === 'undefined') return;
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing consent:', error);
    }
  }

  /**
   * Validate consent object structure
   */
  private static isValidConsent(obj: any): obj is CookieConsent {
    return (
      typeof obj === 'object' &&
      obj !== null &&
      typeof obj.essential === 'boolean' &&
      typeof obj.analytics === 'boolean' &&
      typeof obj.marketing === 'boolean' &&
      typeof obj.functional === 'boolean' &&
      typeof obj.timestamp === 'number' &&
      typeof obj.version === 'string'
    );
  }
}
