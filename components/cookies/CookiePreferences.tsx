'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCookies } from '@/lib/cookies/CookieContext';
import { COOKIE_CATEGORIES } from '@/lib/cookies/constants';
import { X } from 'lucide-react';

export function CookiePreferences() {
  const { showPreferences, consent, updatePreferences, closePreferences } = useCookies();
  
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
    functional: false,
  });

  // Initialize preferences from current consent
  useEffect(() => {
    if (consent) {
      setPreferences({
        analytics: consent.analytics,
        marketing: consent.marketing,
        functional: consent.functional,
      });
    }
  }, [consent, showPreferences]);

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showPreferences) {
        closePreferences();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showPreferences, closePreferences]);

  const handleToggle = (category: 'analytics' | 'marketing' | 'functional') => {
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSave = () => {
    updatePreferences(preferences);
  };

  return (
    <AnimatePresence>
      {showPreferences && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePreferences}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
            aria-hidden="true"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="cookie-preferences-title"
              aria-describedby="cookie-preferences-description"
              className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="bg-[#002EC3] text-white p-6 relative">
                <button
                  onClick={closePreferences}
                  className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Cerrar preferencias"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <h2 id="cookie-preferences-title" className="text-2xl font-bold mb-2">
                  Preferencias de Cookies
                </h2>
                <p id="cookie-preferences-description" className="text-white/90 text-sm">
                  Personaliza qué cookies quieres aceptar. Las cookies esenciales no se pueden desactivar.
                </p>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                <div className="space-y-6">
                  {/* Essential Cookies */}
                  <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {COOKIE_CATEGORIES.essential.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {COOKIE_CATEGORIES.essential.description}
                        </p>
                      </div>
                      <div className="ml-4">
                        <div className="relative inline-block w-12 h-6 bg-[#002EC3] rounded-full opacity-50 cursor-not-allowed">
                          <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                        </div>
                        <span className="sr-only">Siempre activas</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Siempre activas - Requeridas para el funcionamiento del sitio
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-[#002EC3]/30 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {COOKIE_CATEGORIES.analytics.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {COOKIE_CATEGORIES.analytics.description}
                        </p>
                      </div>
                      <div className="ml-4">
                        <button
                          onClick={() => handleToggle('analytics')}
                          className={`relative inline-block w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#002EC3] focus:ring-offset-2 ${
                            preferences.analytics ? 'bg-[#002EC3]' : 'bg-gray-300'
                          }`}
                          role="switch"
                          aria-checked={preferences.analytics}
                          aria-label="Activar cookies analíticas"
                        >
                          <div
                            className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                              preferences.analytics ? 'right-1' : 'left-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Cookies: _ga, _gid, _gat
                    </p>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-[#002EC3]/30 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {COOKIE_CATEGORIES.marketing.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {COOKIE_CATEGORIES.marketing.description}
                        </p>
                      </div>
                      <div className="ml-4">
                        <button
                          onClick={() => handleToggle('marketing')}
                          className={`relative inline-block w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#002EC3] focus:ring-offset-2 ${
                            preferences.marketing ? 'bg-[#002EC3]' : 'bg-gray-300'
                          }`}
                          role="switch"
                          aria-checked={preferences.marketing}
                          aria-label="Activar cookies de marketing"
                        >
                          <div
                            className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                              preferences.marketing ? 'right-1' : 'left-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Cookies: _fbp, _gcl_au
                    </p>
                  </div>

                  {/* Functional Cookies */}
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-[#002EC3]/30 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {COOKIE_CATEGORIES.functional.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {COOKIE_CATEGORIES.functional.description}
                        </p>
                      </div>
                      <div className="ml-4">
                        <button
                          onClick={() => handleToggle('functional')}
                          className={`relative inline-block w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#002EC3] focus:ring-offset-2 ${
                            preferences.functional ? 'bg-[#002EC3]' : 'bg-gray-300'
                          }`}
                          role="switch"
                          aria-checked={preferences.functional}
                          aria-label="Activar cookies funcionales"
                        >
                          <div
                            className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                              preferences.functional ? 'right-1' : 'left-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Actualmente no se utilizan cookies funcionales
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <button
                    onClick={closePreferences}
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-6 py-3 bg-[#002EC3] text-white font-medium rounded-md hover:bg-[#002EC3]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#002EC3] focus:ring-offset-2"
                  >
                    Guardar preferencias
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
