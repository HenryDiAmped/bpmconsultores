"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Datos de prueba basados en tu imagen
const blogsData = [
  {
    id: 1,
    category: "Blog",
    title: "IA aplicada a Recursos Humanos: La clave para anticipar y reducir la rotación de talento",
    imagePlaceholder: "bg-[#b4c0e8]", // El color morado/celeste de la imagen
    link: "#",
  },
  {
    id: 2,
    category: "Blog",
    title: "IA aplicada a Recursos Humanos: La clave para anticipar y reducir la rotación de talento",
    imagePlaceholder: "bg-[#b4c0e8]",
    link: "#",
  },
  {
    id: 3,
    category: "Blog",
    title: "IA aplicada a Recursos Humanos: La clave para anticipar y reducir la rotación de talento",
    imagePlaceholder: "bg-[#b4c0e8]",
    link: "#",
  },
  {
    id: 4,
    category: "Blog",
    title: "IA aplicada a Recursos Humanos: La clave para anticipar y reducir la rotación de talento",
    imagePlaceholder: "bg-[#b4c0e8]",
    link: "#",
  },
];

// Animaciones en cascada
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" as const } 
  },
};

export default function BlogsSection() {
  return (
    <section className="w-full bg-[#f7f7f7] py-24 font-sans flex justify-center">
      <div className="mx-auto w-full max-w-[1250px] px-4 flex flex-col items-center">
        
        {/* Título de la sección */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-[42px] font-medium text-black mb-16 text-center"
        >
          Explora Nuestros <span className="text-[#0033CC]">Blogs</span> aquí
        </motion.h2>

        {/* Grilla de Blogs */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {blogsData.map((blog) => (
            <motion.a
              key={blog.id}
              variants={itemVariants}
              href={blog.link}
              className="group flex flex-col bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Espacio para la imagen */}
              <div className={`w-full aspect-[4/3] ${blog.imagePlaceholder} mb-6 transition-transform duration-500 group-hover:scale-[1.02] overflow-hidden`} />

              {/* Categoría */}
              <span className="text-[13px] text-gray-500 font-medium mb-3">
                {blog.category}
              </span>

              {/* Título (flex-grow para empujar el botón hacia abajo si los títulos tienen diferente altura) */}
              <h3 className="text-[16px] md:text-[18px] font-bold text-black leading-snug mb-8 flex-grow">
                {blog.title}
              </h3>

              {/* Footer de la tarjeta: Enlace Leer Más */}
              <div className="flex items-center justify-between text-[#0033CC] font-bold text-[13px] mt-auto">
                <span className="tracking-wide">LEER MAS</span>
                {/* La flecha se mueve ligeramente a la derecha al hacer hover en la tarjeta */}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}