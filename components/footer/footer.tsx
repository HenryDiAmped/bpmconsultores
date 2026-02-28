'use client';

import Image from "next/image";
import { FooterBranding } from "./footerBranding";
import { LocationMap } from "@/components/ui/LocationMap";
import { useTranslation } from 'react-i18next';
// 1. Importamos motion
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const socialMedia = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    hoverColor: "hover:text-blue-600",
    iconPath: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    hoverColor: "hover:text-pink-600",
    iconPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    hoverColor: "hover:text-blue-700",
    iconPath: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
  }
];

// 2. Variante de animación compartida
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  const { t } = useTranslation();

  return (
    // Dejamos la etiqueta footer normal
    <footer className="bg-[#F7F7F7] text-gray-600 border-t border-gray-200 overflow-hidden">
      
      <FooterBranding />

      {/* ========================================= */}
      {/* VISTA MÓVIL (Acordeón)                    */}
      {/* ========================================= */}
      <div className="block lg:hidden border-b border-gray-200 py-8 w-full px-6">

        {/* Bio Móvil */}
        <motion.div 
          className="mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6 }}
        >
          <Image src="/logo.png" alt="BPM Consultores" width={10} height={80} className="mx-auto h-8 w-auto mb-4" />
          <p className="text-sm text-gray-600 leading-relaxed">
            {t('footer.bio')}
          </p>
        </motion.div>

        {/* Acordeón Móvil (Retraso 0.2s) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="contacto" className="border-gray-200">
              <AccordionTrigger className="text-gray-900 font-bold hover:no-underline">
                {t('footer.contact.title')}
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <ul className="space-y-4">
                  <li className="flex flex-row items-center gap-3 text-sm">
                    <svg className="w-5 h-5 text-[#002EC3] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span style={{ whiteSpace: 'pre-line' }}>{t('footer.contact.address')}</span>
                  </li>
                  <li className="flex flex-row items-center gap-3 text-sm">
                    <svg className="w-5 h-5 text-[#002EC3] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <a href={`tel:${t('footer.contact.phone')}`} className="hover:text-[#002EC3] transition-colors">{t('footer.contact.phone')}</a>
                  </li>
                  <li className="flex flex-row items-center gap-3 text-sm">
                    <svg className="w-5 h-5 text-[#002EC3] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <a href={`mailto:${t('footer.contact.email')}`} className="hover:text-[#002EC3] transition-colors">{t('footer.contact.email')}</a>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mapa" className="border-gray-200">
              <AccordionTrigger className="text-gray-900 font-bold hover:no-underline">
                {t('footer.location')}
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-2">
                <div className="w-full h-[200px] rounded-lg overflow-hidden relative border border-gray-200 shadow-sm">
                  <LocationMap />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>

      {/* ========================================= */}
      {/* VISTA ESCRITORIO (Full Width - 3 Columnas)  */}
      {/* ========================================= */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-12 xl:gap-20 border-b border-gray-200 pt-8 w-full lg:px-1 xl:px-16 mx-auto">

        {/* BLOQUE 1: Bio (Aparece primero) */}
        <motion.div 
          className="flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6 }}
        >
          <Image src="/logo.png" alt="BPM Consultores" width={160} height={50} className="w-auto mb-6" />
          <p className="text-sm text-gray-500 leading-relaxed pr-4 xl:pr-12">
            {t('footer.bio')}
          </p>
        </motion.div>

        {/* BLOQUE 2: Contacto (0.1s de retraso) */}
        <motion.div 
          className="flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-gray-900 font-bold mb-6">{t('footer.contact.title')}</h3>
          <ul className="space-y-4 flex flex-col">
            <li className="flex flex-row gap-3 text-sm">
              <svg className="w-5 h-5 text-[#002EC3] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span style={{ whiteSpace: 'pre-line' }}>{t('footer.contact.address')}</span>
            </li>
            <li className="flex flex-row gap-3 text-sm">
              <svg className="w-5 h-5 text-[#002EC3] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <a href={`tel:${t('footer.contact.phone')}`} className="hover:text-[#002EC3] transition-colors">{t('footer.contact.phone')}</a>
            </li>
            <li className="flex flex-row gap-3 text-sm">
              <svg className="w-5 h-5 text-[#002EC3] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <a href={`mailto:${t('footer.contact.email')}`} className="hover:text-[#002EC3] transition-colors">{t('footer.contact.email')}</a>
            </li>
          </ul>
        </motion.div>

        {/* BLOQUE 3: Mapa (0.2s de retraso) */}
        <motion.div 
          className="flex flex-col w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-gray-900 font-bold mb-6">{t('footer.location')}</h3>
          <div className="w-full h-[220px] rounded-lg overflow-hidden relative border border-gray-200 shadow-sm">
            <LocationMap />
          </div>
        </motion.div>

      </div>

      {/* ========================================= */}
      {/* SECCIÓN INFERIOR: Redes, Logo y Legales   */}
      {/* ========================================= */}
      <motion.div 
        className="flex flex-col items-center justify-center py-10 w-full px-6 bg-[#F7F7F7]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUpVariants}
        // Retraso para que aparezca al final de todo el bloque
        transition={{ duration: 0.6, delay: 0.3 }}
      >

        {/* Redes Sociales */}
        <div className="flex gap-6 mb-6">
          {socialMedia.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 transition-colors ${social.hoverColor}`}
              aria-label={social.name}
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.iconPath} />
              </svg>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center w-full">
          <p className="text-sm text-gray-500 mb-4 font-medium">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>

      </motion.div>
    </footer>
  );
}