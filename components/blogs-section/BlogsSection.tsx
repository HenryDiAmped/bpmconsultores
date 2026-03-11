'use client';

import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// --- ANIMACIONES ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

// --- ANIMACIÓN TYPEWRITER ---
const typewriterContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03 } // Velocidad de aparición letra por letra
  }
};

const typewriterLetter: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function BlogsSection() {
  const blogsData = [
    {
      id: 1,
      category: 'Transformación',
      title: 'Cómo liderar el cambio organizacional sin perder el talento clave.',
      date: '15 Mar 2026',
      link: "/blog/articulo-1",
    },
    {
      id: 2,
      category: 'Procesos',
      title: '5 indicadores clave (KPIs) que revelan si tu empresa está lista para escalar.',
      date: '10 Mar 2026',
      link: "/blog/articulo-2",
    },
    {
      id: 3,
      category: 'Cultura',
      title: 'Digitalización de RRHH: Menos burocracia, más conexión humana.',
      date: '02 Mar 2026',
      link: "/blog/articulo-3",
    },
    {
      id: 4,
      category: 'Estrategia',
      title: 'Por qué el mapeo de procesos es el paso cero antes de implementar software.',
      date: '28 Feb 2026',
      link: "/blog/articulo-4",
    },
  ];

  const titleText = "Insights sobre ";
  const highlightText = "gestión organizacional y talento";

  return (
    <section className="w-full bg-slate-50 py-24 border-t border-gray-200 flex justify-center relative overflow-hidden">
      
      {/* Fondo sutil unificado */}
      <div className="absolute top-0 right-0 w-full h-[300px] bg-gradient-to-b from-white to-transparent -z-10" />

      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
        
        {/* HEADER DE LA SECCIÓN */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            
            {/* TÍTULO H2 CON TYPEWRITER */}
            <motion.h2 
              variants={typewriterContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.15]"
            >
              {titleText.split("").map((char, index) => (
                <motion.span key={`title-${index}`} variants={typewriterLetter}>
                  {char}
                </motion.span>
              ))}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002EC3] to-blue-500 italic font-light inline-block">
                {highlightText.split("").map((char, index) => (
                  <motion.span key={`highlight-${index}`} variants={typewriterLetter}>
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h2>

          </div>

          {/* BOTÓN DESKTOP (Nuevo diseño: Alto contraste y animación de llenado) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.6 }} // Aparece después del Typewriter
            className="hidden md:block shrink-0"
          >
            <Link href="/blog" className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 bg-gray-900 rounded-none overflow-hidden">
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
              <span className="absolute inset-0 w-full h-full transition-all duration-500 ease-out transform -translate-x-full bg-[#002EC3] group-hover:translate-x-0" />
              <span className="relative flex items-center gap-2">
                Ver todos los artículos
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* GRILLA DE ARTÍCULOS */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full"
        >
          {blogsData.map((blog) => (
            <Link key={blog.id} href={blog.link} className="group flex flex-col h-full">
              <motion.article
                variants={itemVariants}
                className="flex flex-col h-full bg-white border border-gray-100 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,46,195,0.15)] hover:border-[#002EC3]/30 hover:-translate-y-2 relative"
              >
                {/* Línea decorativa superior que aparece en hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#002EC3] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

                {/* Contenedor de Imagen */}
                <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,#00000003_25%,transparent_25%,transparent_75%,#00000003_75%,#00000003),linear-gradient(45deg,#00000003_25%,transparent_25%,transparent_75%,#00000003_75%,#00000003)] bg-[size:20px_20px] bg-slate-50 transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Contenido del Card */}
                <div className="p-6 md:p-8 flex flex-col flex-grow bg-white z-10">
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-[10px] md:text-[11px] text-[#002EC3] font-bold uppercase tracking-widest bg-blue-50/50 px-2.5 py-1.5 rounded-sm">
                      {blog.category}
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium">
                      {blog.date}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-[1.4] mb-8 flex-grow group-hover:text-[#002EC3] transition-colors duration-300 line-clamp-3">
                    {blog.title}
                  </h3>

                  {/* Footer de la tarjeta */}
                  <div className="flex items-center gap-2 text-gray-500 font-semibold text-[13px] mt-auto border-t border-gray-100 pt-5 group-hover:text-[#002EC3] transition-colors duration-300">
                    <span className="tracking-wide uppercase text-[11px]">Leer artículo</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </motion.div>

        {/* Botón móvil (Mismo diseño de alto contraste) */}
        <div className="mt-12 flex justify-center md:hidden">
          <Link href="/blog" className="w-full">
             <Button className="w-full bg-gray-900 hover:bg-[#002EC3] text-white rounded-none py-6 font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
              Ver todos los artículos
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}