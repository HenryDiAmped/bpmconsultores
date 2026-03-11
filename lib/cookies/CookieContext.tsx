'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CookieConsent } from './types';
import { CookieManager } from './CookieManager';

interface CookieContextType {
  consent: CookieConsent | null;
  showBanner: boolean;
  showPreferences: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  updatePreferences: (prefs: Partial<CookieConsent>) => void;
  openPreferences: () => void;
  closePreferences: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

interface CookieProviderProps {
  children: ReactNode;
}

export function CookieProvider({ children }: CookieProviderProps) {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Check for existing consent on mount
  useEffect(() => {
    setMounted(true);
    const existingConsent = CookieManager.getConsent();
    
    if (existingConsent) {
      setConsent(existingConsent);
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    CookieManager.acceptAll();
    const newConsent = CookieManager.getConsent();
    setConsent(newConsent);
    setShowBanner(false);
    setShowPreferences(false);
    
    // Reload page to load third-party scripts
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  const rejectAll = () => {
    CookieManager.rejectAll();
    const newConsent = CookieManager.getConsent();
    setConsent(newConsent);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const updatePreferences = (prefs: Partial<CookieConsent>) => {
    CookieManager.updatePreferences(prefs);
    const newConsent = CookieManager.getConsent();
    setConsent(newConsent);
    setShowPreferences(false);
    
    // Reload page to apply changes
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  const openPreferences = () => {
    setShowPreferences(true);
    setShowBanner(false);
  };

  const closePreferences = () => {
    setShowPreferences(false);
    
    // If no consent exists, show banner again
    if (!consent) {
      setShowBanner(true);
    }
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <CookieContext.Provider
      value={{
        consent,
        showBanner,
        showPreferences,
        acceptAll,
        rejectAll,
        updatePreferences,
        openPreferences,
        closePreferences,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
}

export function useCookies(): CookieContextType {
  const context = useContext(CookieContext);
  
  if (context === undefined) {
    throw new Error('useCookies must be used within a CookieProvider');
  }
  
  return context;
}
