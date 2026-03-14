'use client';

import Image from "next/image";
import { Link } from '@/i18n/routing';
import { motion, Variants } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { useTranslations } from 'next-intl';

// --- ANIMACIONES ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function ModernFooter() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 relative overflow-hidden border-t border-white/10 pt-20 lg:pt-28 pb-8">

      {/* --- EFECTOS DE FONDO --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Brillo superior sutil */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#002EC3]/50 to-transparent" />
        {/* Resplandor radial de fondo */}
        <div className="absolute -top-[200px] right-[-10%] w-[600px] h-[600px] bg-[#002EC3] opacity-[0.05] blur-[120px] rounded-full" />
      </div>

      <div className="mx-auto max-w-[1320px] px-6 lg:px-8 relative z-10">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 items-center mb-16"
        >

          {/* ========================================= */}
          {/* COLUMNA 1: CONTÁCTANOS (Orden 2 en móvil, 1 en desktop) */}
          {/* ========================================= */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start justify-center text-center md:text-left order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white tracking-tight">{t('contact.title')}</h2>

            <div className="flex flex-col space-y-8 md:space-y-5 text-[15px] font-light text-gray-300 w-full items-center md:items-start">

              {/* WhatsApp */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#002EC3] group-hover:border-[#002EC3] transition-all duration-300 shrink-0">
                  <MessageCircle className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <a href="tel:+51999999999" className="hover:text-white transition-colors md:mt-2">
                  {t('contact.whatsapp')}: +51 999 999 999
                </a>
              </div>

              {/* Correos */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#002EC3] group-hover:border-[#002EC3] transition-all duration-300 shrink-0">
                  <Mail className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col items-center md:items-start leading-relaxed mt-1">
                  <span className="text-gray-500 mb-1 font-medium text-sm uppercase tracking-wider">{t('contact.email')}</span>
                  <a href="mailto:informes@bpmconsultores.com" className="hover:text-white transition-colors">
                    informes@bpmconsultores.com
                  </a>
                  <a href="mailto:humand@bpmconsultores.com" className="hover:text-white transition-colors mt-0.5">
                    humand@bpmconsultores.com
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* ========================================= */}
          {/* COLUMNA 2: LOGO CENTRAL (Orden 1 en móvil, 2 en desktop) */}
          {/* ========================================= */}
          <motion.div variants={itemVariants} className="flex justify-center items-center pb-10 md:py-0 border-b md:border-b-0 md:border-x border-white/10 order-1 md:order-2 w-full">
            <Link href="/" className="inline-block transform hover:scale-105 transition-transform duration-500">
              <Image 
                src="/LOGO_COMPLETO_BLANCO.svg" 
                alt="BPM Consultores Logo" 
                width={220} 
                height={70} 
                className="w-auto h-16 md:h-20 brightness-0 invert object-contain opacity-90 hover:opacity-100 transition-opacity" 
              />
            </Link>
          </motion.div>

          {/* ========================================= */}
          {/* COLUMNA 3: REDES SOCIALES Y UBICACIÓN (Orden 3 siempre) */}
          {/* ========================================= */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-end text-center md:text-right order-3 md:order-3">

            <div className="mb-10">
              <h3 className="text-lg font-semibold mb-5 text-white leading-tight">
                {t('social.title')}<br className="hidden md:block" /> {t('social.subtitle')}
              </h3>
              <div className="flex items-center justify-center md:justify-end gap-3">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group hover:bg-[#002EC3] hover:border-[#002EC3] transition-all duration-300">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group hover:bg-[#002EC3] hover:border-[#002EC3] transition-all duration-300">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group hover:bg-[#002EC3] hover:border-[#002EC3] transition-all duration-300">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-white">{t('location.title')}</h3>
              <p className="text-[15px] font-light text-gray-400">{t('location.city')}</p>
            </div>

          </motion.div>

        </motion.div>

        {/* ========================================= */}
        {/* SECCIÓN INFERIOR: Copyright               */}
        {/* ========================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="pt-8 border-t border-white/10 text-center"
        >
          <p className="text-xs md:text-sm text-gray-500 font-light tracking-wide">
            &copy; {currentYear} {t('copyright')}
          </p>

          {/* Policy Links */}
          <div className="flex items-center justify-center gap-4 text-xs mt-2">
            <Link
              href="/politica-privacidad"
              className="text-gray-500 hover:text-white transition-colors"
            >
              {t('policies.privacy')}
            </Link>
            <span className="text-gray-700">•</span>
            <Link
              href="/politica-cookies"
              className="text-gray-500 hover:text-white transition-colors"
            >
              {t('policies.cookies')}
            </Link>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}