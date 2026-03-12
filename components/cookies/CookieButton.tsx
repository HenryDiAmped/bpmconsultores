'use client';

import { useCookies } from '@/lib/cookies/CookieContext';
import { Cookie } from 'lucide-react';
import { motion } from 'framer-motion';

export function CookieButton() {
  const { consent, openPreferences } = useCookies();

  // Only show if user has already given consent
  if (!consent) return null;

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', damping: 15 }}
      onClick={openPreferences}
      className="fixed bottom-6 left-6 z-[9997] bg-[#002EC3] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#002EC3]/90 transition-all flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#002EC3] focus:ring-offset-2"
      aria-label="Gestionar preferencias de cookies"
      title="Gestionar Cookies"
    >
      <Cookie className="w-5 h-5 group-hover:rotate-12 transition-transform" aria-hidden="true" />
      <span className="text-sm font-medium hidden sm:inline">Gestionar Cookies</span>
    </motion.button>
  );
}
