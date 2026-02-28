'use client';

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { LocationMap } from "@/components/ui/LocationMap";
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function ModernFooter() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#002EC3] border-t border-white/10 relative overflow-hidden">
      
      {/* Efecto de resplandor de fondo (glow) superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-white/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="mx-auto max-w-[1320px] px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32 relative z-10">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8 xl:gap-16"
        >
          
          {/* ========================================= */}
          {/* COLUMNA 1 (Izquierda): Datos Básicos      */}
          {/* ========================================= */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Contacto</h3>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 bg-white/10 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Dirección</p>
                  <p className="text-sm leading-relaxed text-blue-100/80 whitespace-pre-line">
                    {t('footer.contact.address', 'Av. Principal 123, Ciudad\nEdificio Tech, Piso 4')}
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 bg-white/10 p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Teléfono</p>
                  <a href={`tel:${t('footer.contact.phone', '+1 234 567 890')}`} className="text-sm leading-relaxed text-blue-100/80 hover:text-white transition-colors">
                    {t('footer.contact.phone', '+1 234 567 890')}
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 bg-white/10 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Correo Electrónico</p>
                  <a href={`mailto:${t('footer.contact.email', 'contacto@bpmconsultores.com')}`} className="text-sm leading-relaxed text-blue-100/80 hover:text-white transition-colors">
                    {t('footer.contact.email', 'contacto@bpmconsultores.com')}
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* ========================================= */}
          {/* COLUMNA 2 (Centro): Misión, Visión y Logo */}
          {/* ========================================= */}
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center lg:border-x lg:border-white/10 lg:px-8">
            
            <div className="mb-8">
              <h3 className="text-lg font-bold text-white mb-3">Nuestra Misión</h3>
              <p className="text-sm leading-relaxed text-blue-100/80 max-w-sm mx-auto">
                Transformar y escalar empresas a través de soluciones tecnológicas innovadoras, optimizando procesos para un futuro digital eficiente.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-lg font-bold text-white mb-3">Nuestra Visión</h3>
              <p className="text-sm leading-relaxed text-blue-100/80 max-w-sm mx-auto">
                Ser el socio tecnológico líder a nivel regional, reconocido por impulsar la evolución digital y el crecimiento sostenible empresarial.
              </p>
            </div>

            {/* Logo de BPM invertido a blanco */}
            <div className="mt-auto pt-4">
              <Image 
                src="/logo.png" 
                alt="BPM Consultores Logo" 
                width={160} 
                height={50} 
                className="w-auto h-10 brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" 
              />
            </div>
            
          </motion.div>

          {/* ========================================= */}
          {/* COLUMNA 3 (Derecha): Mapa                 */}
          {/* ========================================= */}
          <motion.div variants={itemVariants} className="flex flex-col w-full h-full">
            <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Ubicación</h3>
            <div className="w-full h-[250px] lg:h-[300px] rounded-2xl overflow-hidden relative border border-white/20 shadow-lg bg-white/5">
              {/* Aquí se inyecta tu componente de mapa */}
              <LocationMap />
            </div>
          </motion.div>

        </motion.div>

        {/* ========================================= */}
        {/* SECCIÓN INFERIOR: Redes y Legales         */}
        {/* ========================================= */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 border-t border-white/10 pt-8 sm:mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          {/* Redes Sociales */}

          {/* Copyright */}
          <p className="text-xs md:text-sm leading-5 text-blue-200/60 md:order-1 font-medium">
            &copy; {new Date().getFullYear()} BPM Consultores, Inc. Todos los derechos reservados.
          </p>
        </motion.div>
        
      </div>
    </footer>
  );
}