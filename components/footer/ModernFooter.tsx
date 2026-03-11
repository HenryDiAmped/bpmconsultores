'use client';

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { LocationMap } from "@/components/ui/LocationMap"; // Asegúrate de tener este componente
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, ArrowRight } from "lucide-react";

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
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 relative overflow-hidden border-t border-white/10 pt-20 lg:pt-28 pb-8">
      
      {/* --- EFECTOS DE FONDO --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Brillo superior sutil */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#002EC3]/50 to-transparent" />
        {/* Resplandor radial de fondo */}
        <div className="absolute -top-[200px] right-[-10%] w-[600px] h-[600px] bg-[#002EC3] opacity-[0.03] blur-[120px] rounded-full" />
      </div>

      <div className="mx-auto max-w-[1320px] px-6 lg:px-8 relative z-10">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20"
        >
          
          {/* ========================================= */}
          {/* COLUMNA 1: MARCA Y REDES (Ocupa 4/12)     */}
          {/* ========================================= */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="mb-8 inline-block">
              <Image 
                src="/logo.png" 
                alt="BPM Consultores Logo" 
                width={180} 
                height={50} 
                className="w-auto h-10 brightness-0 invert object-contain" 
              />
            </Link>
            
            <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base max-w-sm mb-8">
              Transformamos y escalamos empresas a través de soluciones tecnológicas innovadoras, optimizando procesos para un futuro digital eficiente y sostenible.
            </p>

            {/* Redes Sociales */}
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group hover:bg-[#002EC3] hover:border-[#002EC3] transition-all duration-300">
                <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group hover:bg-[#002EC3] hover:border-[#002EC3] transition-all duration-300">
                <Facebook className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group hover:bg-[#002EC3] hover:border-[#002EC3] transition-all duration-300">
                <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* ========================================= */}
          {/* COLUMNA 2: CONTACTO DIRECTO (Ocupa 4/12)  */}
          {/* ========================================= */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col lg:px-8">
            <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-8">
              Información de Contacto
            </h3>
            
            <ul className="space-y-6">
              <li>
                <div className="flex items-start gap-4 group">
                  <div className="mt-0.5 shrink-0">
                    <MapPin className="w-5 h-5 text-[#002EC3] group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">Ubicación</p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Av. Principal 123, Ciudad<br />Edificio Tech, Piso 4
                    </p>
                  </div>
                </div>
              </li>
              
              <li>
                <div className="flex items-start gap-4 group">
                  <div className="mt-0.5 shrink-0">
                    <Phone className="w-5 h-5 text-[#002EC3] group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">Llámanos</p>
                    <a href="tel:+51999999999" className="text-sm text-gray-400 hover:text-white transition-colors">
                      +51 999 999 999
                    </a>
                  </div>
                </div>
              </li>
              
              <li>
                <div className="flex items-start gap-4 group">
                  <div className="mt-0.5 shrink-0">
                    <Mail className="w-5 h-5 text-[#002EC3] group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">Escríbenos</p>
                    <a href="mailto:contacto@bpmconsultores.com" className="text-sm text-gray-400 hover:text-white transition-colors block">
                      contacto@bpmconsultores.com
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* ========================================= */}
          {/* COLUMNA 3: MAPA (Ocupa 4/12)              */}
          {/* ========================================= */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col">
            <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-8 flex items-center justify-between">
              Nuestra Sede
              <Link href="/#contacto" className="text-[#002EC3] flex items-center gap-1 hover:text-blue-400 transition-colors">
                Cómo llegar <ArrowRight className="w-3 h-3" />
              </Link>
            </h3>
            
            {/* Contenedor del mapa con estilo premium */}
            <div className="w-full h-[200px] lg:h-[220px] rounded-sm overflow-hidden relative border border-white/10 bg-white/5 group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <LocationMap />
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
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-gray-500 tracking-wide text-center md:text-left">
            &copy; {currentYear} BPM Consultores. Todos los derechos reservados.
          </p>
        </motion.div>
        
      </div>
    </footer>
  );
}