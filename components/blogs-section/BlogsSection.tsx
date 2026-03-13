'use client';

import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

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
    transition: { staggerChildren: 0.03 } 
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
      // Te sugiero cambiar 'link' a 'image' y agregar un 'slug' o 'url' real para el post
      link: "https://res.cloudinary.com/dmgufgga4/image/upload/v1773360132/BLOG_1_ngbkme.avif",
      postUrl: "/blog/liderar-cambio-organizacional" 
    },
    {
      id: 2,
      category: 'Procesos',
      title: '5 indicadores clave (KPIs) que revelan si tu empresa está lista para escalar.',
      date: '10 Mar 2026',
      link: "https://res.cloudinary.com/dmgufgga4/image/upload/v1773360132/BLOG_2_wsk7qa.webp",
      postUrl: "/blog/5-indicadores-kpis"
    },
    {
      id: 3,
      category: 'Cultura',
      title: 'Digitalización de RRHH: Menos burocracia, más conexión humana.',
      date: '02 Mar 2026',
      link: "https://res.cloudinary.com/dmgufgga4/image/upload/v1773360132/BLOG_3_cviihw.avif",
      postUrl: "/blog/digitalizacion-rrhh"
    },
    {
      id: 4,
      category: 'Estrategia',
      title: 'Por qué el mapeo de procesos es el paso cero antes de implementar software.',
      date: '28 Feb 2026',
      link: "https://res.cloudinary.com/dmgufgga4/image/upload/v1773360132/BLOG_4_i6gr8t.avif",
      postUrl: "/blog/mapeo-procesos-software"
    },
  ];

  const titleText = "Insights sobre gestión organizacional y talento";

  return (
    <section className="w-full bg-slate-50 py-24 border-t border-gray-200 flex justify-center relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-full h-[300px] bg-gradient-to-b from-white to-transparent -z-10" />

      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
        
        {/* HEADER DE LA SECCIÓN */}
        <div className="flex flex-col items-center text-center w-full mb-16">
          <motion.h2 
            variants={typewriterContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.15] mb-3"
          >
            {titleText.split("").map((char, index) => (
              <motion.span key={`title-${index}`} variants={typewriterLetter}>
                {char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-lg md:text-xl font-bold text-gray-900"
          >
            Explora Nuestros <span className="text-[#002EC3]">Blogs</span> aquí
          </motion.p>
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
            // Cambiado href={blog.link} a href={blog.postUrl} para que no te redirija a la imagen
            <Link key={blog.id} href={blog.postUrl} className="group flex flex-col h-full">
              <motion.article
                variants={itemVariants}
                className="flex flex-col h-full bg-white border border-gray-100 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,46,195,0.15)] hover:border-[#002EC3]/30 hover:-translate-y-2 relative"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#002EC3] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

                {/* Contenedor de Imagen Actualizado */}
                <div className="relative w-full aspect-[4/3] bg-[#B0BCE1] overflow-hidden">
                  {/* Etiqueta img apuntando al link de Cloudinary */}
                  <img 
                    src={blog.link} 
                    alt={blog.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay oscuro que aparece en hover para darle más estilo */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Contenido del Card */}
                <div className="p-6 md:p-8 flex flex-col flex-grow bg-white z-10">
                  <span className="text-xs text-gray-500 font-medium mb-4">
                    {blog.category} {/* Usando la categoría real de tu data */}
                  </span>

                  <h3 className="text-base md:text-lg font-bold text-gray-900 leading-[1.4] mb-8 flex-grow group-hover:text-[#002EC3] transition-colors duration-300 line-clamp-4">
                    {blog.title}
                  </h3>

                  <div className="flex items-center justify-between text-[#002EC3] font-bold text-[12px] mt-auto transition-colors duration-300">
                    <span className="tracking-wide uppercase">LEER MÁS</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </motion.div>

        {/* BOTÓN GLOBAL */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 flex justify-center w-full"
        >
          <Link href="/blog" className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 bg-gray-900 rounded-none overflow-hidden hover:shadow-lg w-full md:w-auto">
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
            <span className="absolute inset-0 w-full h-full transition-all duration-500 ease-out transform -translate-x-full bg-[#002EC3] group-hover:translate-x-0" />
            <span className="relative flex items-center gap-2">
              Ver todos los artículos
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}