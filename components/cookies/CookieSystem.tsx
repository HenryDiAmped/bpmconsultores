'use client';

import { useEffect, useState } from 'react';
import { CookieBanner } from './CookieBanner';
import { CookiePreferences } from './CookiePreferences';
import { ThirdPartyScripts } from './ThirdPartyScripts';

/**
 * CookieSystem - Agrupa los componentes del sistema de cookies.
 * Se monta solo en cliente para evitar problemas de hidratación.
 */
export function CookieSystem() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // No renderizar hasta que exista el DOM del cliente
  if (!mounted) {
    return null;
  }

  return (
    <>
      <CookieBanner />
      <CookiePreferences />
      <ThirdPartyScripts />
    </>
  );
}
