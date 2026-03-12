'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter(); 
  const pathname = usePathname();
  const isPartnerPage = pathname === '/humand-partner';
  const isSolid = scrolled || isPartnerPage;

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

  // 1. AÑADIMOS EL "/" ANTES DEL "#" PARA FORZAR LA RUTA AL INICIO
  const navigation = [
    { name: 'Soluciones', href: '/#soluciones' },
    { name: 'Humand Partner', href: '/#humand-partner' },
    { name: 'Blog', href: '/blog' }
  ];

  const toggleLanguage = () => {
    const currentLang = i18n?.language || 'es';
    const nextLang = currentLang === 'es' ? 'en' : 'es';

    if (i18n && typeof i18n.changeLanguage === 'function') {
      i18n.changeLanguage(nextLang);
    } 
    else {
      document.cookie = `NEXT_LOCALE=${nextLang}; path=/; max-age=31536000`;
      window.location.reload(); 
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

  const isEnglish = i18n?.language === 'en';
  const currentFlag = isEnglish 
    ? 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/1x1/us.svg' 
    : 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/1x1/es.svg';
  const currentLangText = isEnglish ? 'EN' : 'ES';

  const targetFlag = isEnglish 
    ? 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/1x1/es.svg' 
    : 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/1x1/us.svg';
  const targetLangText = isEnglish ? 'Español' : 'Inglés';

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
            <Image
              src="/logo.png"
              alt="Logo BPM Consultores"
              width={140}
              height={45}
              className={cn(
                "h-9 w-auto transition-all duration-500",
                !isSolid && "brightness-0 invert"
              )}
              priority
            />
          </Link>
        </motion.div>

      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 gap-x-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "group relative px-5 py-3 text-[15px] font-semibold leading-6 transition-all rounded-lg",
                      /* CAMBIO AQUÍ: Usamos isSolid para que el texto sea oscuro */
                      isSolid ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
                    )}
                  >
                    <span className={cn(
                      "relative z-10 transition-colors",
                      /* CAMBIO AQUÍ: El color al pasar el mouse */
                      isSolid ? "group-hover:text-[#002EC3]" : "group-hover:text-blue-200"
                    )}>
                      {item.name}
                    </span>
                    <span className={cn(
                      "absolute bottom-2 left-5 h-[2px] w-0 transition-all duration-300 group-hover:w-[calc(100%-40px)]",
                      /* CAMBIO AQUÍ: El color de la línea inferior */
                      isSolid ? "bg-[#002EC3]" : "bg-blue-400"
                    )} />
                  </Link>
                ))}
              </div>

        <div className="hidden lg:flex items-center gap-x-4 z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className={cn(
              "flex items-center gap-2 font-bold transition-colors border border-transparent",
              scrolled 
                ? "text-gray-800 hover:bg-gray-100 hover:border-gray-200" 
                : "text-white hover:bg-white/10 hover:border-white/20"
            )}
          >
            <div className="w-5 h-5 rounded-full overflow-hidden border border-gray-300/50 flex items-center justify-center shrink-0">
              <img 
                src={currentFlag} 
                alt={`Bandera ${currentLangText}`} 
                className="w-full h-full object-cover"
              />
            </div>
            {currentLangText}
          </Button>

          {/* 2. AÑADIMOS EL "/" AL BOTÓN DE CONTACTO */}
          <Link href="/#contacto">
            <Button 
              className={cn(
                "font-semibold px-6 py-5 rounded-none transition-all border",
                scrolled 
                  ? "bg-[#002EC3] text-white border-[#002EC3] hover:bg-[#002EC3]/90" 
                  : "bg-[#002EC3] text-white border-[#002EC3] hover:border-white hover:bg-white hover:text-[#002EC3]"
              )}
            >
              Conversemos
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
                scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
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
                {/* 3. AÑADIMOS EL "/" AL BOTÓN DE CONTACTO MÓVIL */}
                <Link href="/#contacto" onClick={() => setMobileMenuOpen(false)} className="w-full">
                  <Button className="w-full bg-[#002EC3] text-white hover:bg-[#002EC3]/80 font-bold py-6 text-lg rounded-none transition-all shadow-md">
                    Conversemos
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  onClick={() => {
                    toggleLanguage();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex justify-center items-center gap-3 py-6 text-base border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white transition-all rounded-xl"
                >
                  <div className="w-6 h-6 rounded-full overflow-hidden border border-white/20 flex items-center justify-center shrink-0">
                    <img 
                      src={targetFlag} 
                      alt={`Bandera ${targetLangText}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  Cambiar a {targetLangText}
                </Button>
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