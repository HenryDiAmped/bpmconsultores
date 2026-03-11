'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCookies } from '@/lib/cookies/CookieContext';
import { Cookie } from 'lucide-react';

export function CookieBanner() {
  const { showBanner, acceptAll, rejectAll, openPreferences } = useCookies();

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998]"
            aria-hidden="true"
          />

          {/* Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
            role="dialog"
            aria-labelledby="cookie-banner-title"
            aria-describedby="cookie-banner-description"
          >
            <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-2xl border border-gray-200">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#002EC3]/10 rounded-full flex items-center justify-center">
                      <Cookie className="w-6 h-6 text-[#002EC3]" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h2 
                      id="cookie-banner-title"
                      className="text-xl md:text-2xl font-bold text-gray-900 mb-3"
                    >
                      Usamos cookies
                    </h2>
                    <p 
                      id="cookie-banner-description"
                      className="text-gray-600 text-sm md:text-base leading-relaxed mb-4"
                    >
                      Utilizamos cookies esenciales para el funcionamiento del sitio y cookies opcionales 
                      para mejorar tu experiencia, analizar el tráfico y personalizar el contenido. 
                      Puedes aceptar todas, rechazarlas o personalizar tus preferencias.
                    </p>
                    <p className="text-xs text-gray-500">
                      Al continuar navegando, aceptas nuestra{' '}
                      <a 
                        href="/politica-cookies" 
                        className="text-[#002EC3] hover:underline font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Política de Cookies
                      </a>
                      {' '}y{' '}
                      <a 
                        href="/politica-privacidad" 
                        className="text-[#002EC3] hover:underline font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Política de Privacidad
                      </a>
                      .
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:min-w-[200px]">
                    <button
                      onClick={acceptAll}
                      className="px-6 py-3 bg-[#002EC3] text-white font-medium rounded-md hover:bg-[#002EC3]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#002EC3] focus:ring-offset-2"
                      aria-label="Aceptar todas las cookies"
                      tabIndex={0}
                    >
                      Aceptar todas
                    </button>
                    
                    <button
                      onClick={rejectAll}
                      className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                      aria-label="Rechazar cookies opcionales"
                      tabIndex={0}
                    >
                      Rechazar todas
                    </button>
                    
                    <button
                      onClick={openPreferences}
                      className="px-6 py-3 border-2 border-[#002EC3] text-[#002EC3] font-medium rounded-md hover:bg-[#002EC3]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#002EC3] focus:ring-offset-2"
                      aria-label="Personalizar preferencias de cookies"
                      tabIndex={0}
                    >
                      Personalizar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
