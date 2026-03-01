'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Bloquear el scroll de la página cuando el menú está abierto
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

  const navigation = t('header.navigation', { returnObjects: true }) as Array<{
    name: string;
    href: string;
  }>;

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  // Variantes de animación para la tarjeta flotante
  const menuVariants = {
    closed: { opacity: 0, y: -20, scale: 0.95 },
    open: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", damping: 25, stiffness: 300, staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        // Mantenemos el header visible incluso si el menú está abierto
        scrolled || mobileMenuOpen
          ? "bg-[#F7F7F7]/90 backdrop-blur-lg border-b border-gray-200/50 py-3 shadow-sm" 
          : "bg-[#F7F7F7] py-6"
      )}
    >
      <nav className="mx-auto px-6 lg:px-8 max-w-[1320px] flex items-center justify-between relative">
        
        {/* LOGO (Izquierda) - Ahora siempre visible y clickeable */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex z-20">
          <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
            <Image
              src="/logo.png"
              alt="Logo BPM Consultores"
              width={140}
              height={45}
              className="h-9 w-auto"
              priority
            />
          </Link>
        </motion.div>

        {/* NAVEGACIÓN DESKTOP */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 gap-x-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative px-5 py-3 text-[15px] font-semibold leading-6 text-gray-800 transition-all rounded-lg hover:bg-blue-50/60"
            >
              <span className="relative z-10 transition-colors group-hover:text-[#002EC3]">
                {item.name}
              </span>
              <span className="absolute bottom-2 left-5 h-[2px] w-0 bg-[#002EC3] transition-all duration-300 group-hover:w-[calc(100%-40px)]" />
            </Link>
          ))}
        </div>

        {/* ACCIONES Y REDES DESKTOP */}
        <div className="hidden lg:flex items-center gap-x-6 z-10">
          <div className="flex gap-x-5 border-r border-gray-300 pr-6">
            {[
              { Icon: Linkedin, href: "https://linkedin.com" },
              { Icon: Instagram, href: "https://instagram.com" },
              { Icon: Facebook, href: "https://facebook.com" }
            ].map(({ Icon, href }, idx) => (
              <motion.a
                key={idx}
                href={href}
                whileHover={{ y: -3, scale: 1.1 }}
                className="text-[#002EC3] transition-opacity hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={20} strokeWidth={2.5} />
              </motion.a>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2 font-bold hover:bg-blue-50/80 text-gray-800 transition-colors"
          >
            <Globe size={18} className="text-[#002EC3]" />
            {i18n.language.toUpperCase()}
          </Button>
        </div>

        {/* BOTÓN MÓVIL (Toggle Hamburguesa / Cerrar) */}
        <div className="flex lg:hidden z-20">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#002EC3] hover:bg-blue-50/50 rounded-full transition-all"
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </Button>
        </div>

        {/* MENÚ MÓVIL (Tarjeta Flotante) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              // absolute top-full posiciona el menú justo debajo del header
              className="absolute top-full left-4 right-4 mt-4 bg-[#002EC3] rounded-[1.5rem] flex flex-col px-6 py-8 shadow-2xl lg:hidden max-h-[calc(100vh-120px)] overflow-y-auto z-10 origin-top"
            >
              {/* Enlaces de navegación */}
              <div className="flex flex-col justify-center space-y-2 mt-2">
                {navigation.map((item) => (
                  <motion.div variants={itemVariants} key={item.name}>
                    <Link
                      href={item.href}
                      // Tamaño de texto ligeramente reducido para encajar bien en la tarjeta
                      className="block w-full py-3 text-3xl font-bold tracking-tight text-white/90 hover:text-white transition-colors active:scale-95 origin-left"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Footer del menú flotante */}
              <motion.div 
                variants={itemVariants}
                className="mt-8 pt-6 border-t border-white/20 flex flex-col gap-6"
              >
                 {/* Redes Sociales */}
                 <div className="flex gap-8 justify-center text-white">
                  {[
                    { Icon: Linkedin, href: "https://linkedin.com" },
                    { Icon: Instagram, href: "https://instagram.com" },
                    { Icon: Facebook, href: "https://facebook.com" }
                  ].map(({ Icon, href }, idx) => (
                    <a
                      key={idx}
                      href={href}
                      className="hover:text-white/70 transition-colors p-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={24} strokeWidth={2} />
                    </a>
                  ))}
                </div>

                {/* Botón de Idioma */}
                <Button
                  variant="outline"
                  onClick={() => {
                    toggleLanguage();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex justify-center items-center gap-3 py-6 text-base border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white transition-all rounded-xl"
                >
                  <Globe size={20} />
                  Cambiar a {i18n.language === 'es' ? 'Inglés' : 'Español'}
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>

      {/* Fondo oscuro para cerrar al hacer clic afuera (Backdrop) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 top-[80px] bg-black/20 backdrop-blur-sm z-0 lg:hidden"
          />
        )}
      </AnimatePresence>
    </header>
  );
}