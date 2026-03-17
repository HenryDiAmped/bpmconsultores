'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, usePathname, useRouter } from '@/i18n/routing';

export default function Header() {
  const t = useTranslations('header');
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter(); 
  const pathname = usePathname();
  const isPartnerPage = pathname === '/humand-partner';
  const isNosotrosPage = pathname === '/nosotros';
  const isSolid = scrolled || isPartnerPage || isNosotrosPage;
  
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('navigation.home'), href: '/' },                  
    { name: t('navigation.about'), href: '/nosotros' },                
    { name: t('navigation.solutions'), href: '/#soluciones' },
    { name: t('navigation.humand_partner'), href: '/#humand-partner' },
    { name: t('navigation.blog'), href: '/blog' }
  ];

  // NUEVA FUNCIÓN: Cambia directamente al idioma seleccionado
  const changeLanguage = (newLocale: string) => {
    if (locale !== newLocale) {
      router.replace(pathname, { locale: newLocale });
    }
  };

  const menuVariants: Variants = {
    closed: { opacity: 0, y: -20, scale: 0.95 },
    open: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", damping: 25, stiffness: 300, staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 }
  };

  // Definimos las banderas fijas para poder usarlas en ambos botones simultáneamente
  const esFlag = 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/1x1/es.svg';
  const enFlag = 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/1x1/us.svg';

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        isSolid
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm" 
          : "bg-transparent py-6"
      )}
    >
      <nav className="mx-auto px-6 lg:px-8 max-w-[1320px] flex items-center justify-between relative">
        
        <motion.div whileHover={{ scale: 1.05 }} className="flex z-20">
          <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
            <div 
              className={cn(
                "h-9 w-[140px] transition-colors duration-500",
                isSolid ? "bg-[#002EC3]" : "bg-white"
              )}
              style={{
                WebkitMaskImage: 'url("/LOGO_COMPLETO_BLANCO.svg")',
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'left center',
                maskImage: 'url("/LOGO_COMPLETO_BLANCO.svg")',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'left center',
              }}
            >
              <span className="sr-only">Logo BPM Consultores</span>
            </div>
          </Link>
        </motion.div>

        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 gap-x-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group relative px-5 py-3 text-[15px] font-semibold leading-6 transition-all rounded-lg",
                isSolid ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
              )}
            >
              <span className={cn(
                "relative z-10 transition-colors",
                isSolid ? "group-hover:text-[#002EC3]" : "group-hover:text-blue-200"
              )}>
                {item.name}
              </span>
              <span className={cn(
                "absolute bottom-2 left-5 h-[2px] w-0 transition-all duration-300 group-hover:w-[calc(100%-40px)]",
                isSolid ? "bg-[#002EC3]" : "bg-blue-400"
              )} />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-x-4 z-10">
          
          {/* NUEVO: Contenedor de Idiomas Lado a Lado (Escritorio) */}
          <div className={cn(
            "flex items-center gap-1 p-1 rounded-lg border",
            isSolid ? "border-gray-200 bg-gray-50/50" : "border-white/20 bg-white/5"
          )}>
            {/* Botón Español */}
            <button
              onClick={() => changeLanguage('es')}
              className={cn(
                "flex items-center gap-2 px-2.5 py-1.5 rounded-md font-bold transition-all text-sm",
                locale === 'es' 
                  ? (isSolid ? "bg-white shadow-sm text-gray-900" : "bg-white/20 text-white") 
                  : (isSolid ? "text-gray-500 hover:text-gray-900" : "text-white/60 hover:text-white")
              )}
            >
              <img src={esFlag} alt="ES" className="w-4 h-4 rounded-full object-cover shrink-0" />
              Es
            </button>

            {/* Botón Inglés */}
            <button
              onClick={() => changeLanguage('en')}
              className={cn(
                "flex items-center gap-2 px-2.5 py-1.5 rounded-md font-bold transition-all text-sm",
                locale === 'en' 
                  ? (isSolid ? "bg-white shadow-sm text-gray-900" : "bg-white/20 text-white") 
                  : (isSolid ? "text-gray-500 hover:text-gray-900" : "text-white/60 hover:text-white")
              )}
            >
              <img src={enFlag} alt="EN" className="w-4 h-4 rounded-full object-cover shrink-0" />
              En
            </button>
          </div>

          <Link href="/#contacto">
            <Button 
              className={cn(
                "font-semibold px-6 py-5 rounded-none transition-all border ml-2",
                isSolid 
                  ? "bg-[#002EC3] text-white border-[#002EC3] hover:bg-[#002EC3]/90" 
                  : "bg-[#002EC3] text-white border-[#002EC3] hover:border-white hover:bg-white hover:text-[#002EC3]"
              )}
            >
              {t('buttons.lets_talk')}
            </Button>
          </Link>
        </div>

        <div className="flex lg:hidden z-20">
          {!mobileMenuOpen && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
              className={cn(
                "rounded-full transition-all",
                isSolid ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
              )}
            >
              <Menu size={32} />
            </Button>
          )}
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute top-full left-4 right-4 mt-4 bg-black/95 backdrop-blur-xl border border-white/10 rounded-[1.5rem] flex flex-col px-6 py-6 shadow-2xl lg:hidden max-h-[calc(100vh-120px)] overflow-y-auto z-10 origin-top"
            >
              <div className="flex justify-end mb-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full"
                >
                  <X size={28} />
                </Button>
              </div>

              <div className="flex flex-col justify-center space-y-2">
                {navigation.map((item) => (
                  <motion.div variants={itemVariants} key={item.name}>
                    <Link
                      href={item.href}
                      className="block w-full py-3 text-3xl font-bold tracking-tight text-white hover:text-blue-200 transition-colors active:scale-95 origin-left"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                variants={itemVariants}
                className="mt-8 pt-6 border-t border-white/20 flex flex-col gap-6"
              >
                <Link href="/#contacto" onClick={() => setMobileMenuOpen(false)} className="w-full">
                  <Button className="w-full bg-[#002EC3] text-white hover:bg-[#002EC3]/80 font-bold py-6 text-lg rounded-none transition-all shadow-md">
                    {t('buttons.lets_talk')}
                  </Button>
                </Link>

                {/* NUEVO: Contenedor de Idiomas Lado a Lado (Móvil) */}
                <div className="flex gap-3 w-full">
                  <Button
                    variant="outline"
                    onClick={() => {
                      changeLanguage('es');
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      "flex-1 flex justify-center items-center gap-2 py-6 text-base transition-all rounded-xl",
                      locale === 'es'
                        ? "bg-white/20 border-white text-white font-bold"
                        : "bg-white/5 border-white/20 text-white/60 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <img src={esFlag} alt="ES" className="w-5 h-5 rounded-full object-cover shrink-0" />
                    Español
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => {
                      changeLanguage('en');
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      "flex-1 flex justify-center items-center gap-2 py-6 text-base transition-all rounded-xl",
                      locale === 'en'
                        ? "bg-white/20 border-white text-white font-bold"
                        : "bg-white/5 border-white/20 text-white/60 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <img src={enFlag} alt="EN" className="w-5 h-5 rounded-full object-cover shrink-0" />
                    English
                  </Button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 top-[80px] bg-black/40 backdrop-blur-sm z-0 lg:hidden"
          />
        )}
      </AnimatePresence>
    </header>
  );
}