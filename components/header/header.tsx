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

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        // AQUÍ ESTÁ LA MAGIA:
        // Inicial: Color sólido F7F7F7.
        // Scrolled: Transparente al 70% con blur (efecto cristal) y sombra.
        scrolled 
          ? "bg-[#F7F7F7]/70 backdrop-blur-lg border-b border-gray-200/50 py-3 shadow-sm" 
          : "bg-[#F7F7F7] py-6"
      )}
    >
      <nav className="mx-auto px-6 lg:px-8 max-w-[1320px] flex items-center justify-between relative">
        
        {/* LOGO (Izquierda) */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex z-10"
        >
          <Link href="/" className="flex items-center">
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

        {/* NAVEGACIÓN DESKTOP (Centro Matemático Perfecto) */}
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
              {/* Línea animada sutil */}
              <span className="absolute bottom-2 left-5 h-[2px] w-0 bg-[#002EC3] transition-all duration-300 group-hover:w-[calc(100%-40px)]" />
            </Link>
          ))}
        </div>

        {/* ACCIONES Y REDES (Derecha) */}
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

        {/* BOTÓN MÓVIL (Derecha en pantallas pequeñas) */}
        <div className="flex lg:hidden z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative text-[#002EC3]"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </nav>

      {/* MENÚ MÓVIL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#F7F7F7] lg:hidden flex flex-col pt-24 px-8"
          >
            <div className="space-y-4">
              {navigation.map((item, i) => (
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.name}
                >
                  <Link
                    href={item.href}
                    className="block w-full py-4 text-3xl font-bold text-gray-900 border-b border-gray-200 active:text-[#002EC3]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10"
            >
               <Button
                  variant="outline"
                  onClick={() => {
                    toggleLanguage();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex justify-center items-center gap-2 py-6 text-lg border-gray-300 bg-white"
                >
                  <Globe size={20} className="text-[#002EC3]" />
                  Cambiar a {i18n.language === 'es' ? 'Inglés' : 'Español'}
                </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}