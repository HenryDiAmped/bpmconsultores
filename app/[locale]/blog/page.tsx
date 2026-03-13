'use client';

import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { CATEGORIES, BLOG_POSTS } from "@/lib/blogData";
import Image from "next/image";

// Justo antes del return de tu BlogPage, agrega esta constante:


export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const filteredPosts = activeCategory === "Todos"
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === activeCategory);
  return (
    <div className="w-full bg-[#F7F7F7] min-h-screen pb-24 font-sans">

      {/* ========================================= */}
      {/* 1. HERO DEL BLOG (Mejorado con Gradientes)*/}
      {/* ========================================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-8">
        <div className="bg-gradient-to-br from-[#002EC3] to-[#001763] rounded-[2rem] w-full py-24 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl shadow-blue-900/20 border border-blue-500/20">

          {/* Elementos decorativos de fondo (Más suaves y orgánicos) */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[50%] -left-[10%] w-[70%] h-[150%] bg-blue-400/20 rotate-12 blur-[100px] rounded-full mix-blend-overlay"></div>
            <div className="absolute top-[20%] -right-[10%] w-[50%] h-[100%] bg-white/10 -rotate-12 blur-[80px] rounded-full mix-blend-overlay"></div>
          </div>

          <Badge variant="outline" className="text-blue-100 border-blue-300/30 mb-6 px-4 py-1.5 backdrop-blur-sm bg-white/5 relative z-10">
            Nuestro espacio de aprendizaje
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 relative z-10 tracking-tight leading-tight">
            Explora Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Blogs</span>
          </h1>
          <p className="text-blue-100/90 text-lg md:text-xl max-w-2xl relative z-10 font-light">
            Ideas, tendencias y estrategias para transformar tu negocio con tecnología e inteligencia artificial.
          </p>
        </div>
      </div>

      {/* ========================================= */}
      {/* 2. FILTROS Y BUSCADOR (Más limpios)       */}
      {/* ========================================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-3 rounded-2xl shadow-sm border border-gray-100">

          {/* Categorías (Pills con mejor hover) */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-sm rounded-xl transition-all duration-300 font-medium whitespace-nowrap ${activeCategory === cat
                  ? "bg-[#002EC3] text-white shadow-md shadow-blue-600/20 scale-100"
                  : "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900 scale-95 hover:scale-100"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Buscador (Más corporativo) */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-[#002EC3] transition-colors" />
            <Input
              type="text"
              placeholder="Buscar artículos..."
              className="pl-11 bg-gray-50/50 border-gray-200 rounded-xl h-12 focus-visible:ring-1 focus-visible:ring-[#002EC3] focus-visible:border-[#002EC3] focus-visible:bg-white transition-all text-base"
            />
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* 3. GRILLA DE TARJETAS (Efectos Premium)   */}
      {/* ========================================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

          {filteredPosts.map((post) => (
            // Agregamos la clase "group" aquí. Es vital para las animaciones interiores.
            <Card key={post.id} className="group overflow-hidden flex flex-col h-full border-gray-100 bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer">

              {/* Imagen con Zoom Efecto */}
              <div className="relative w-full h-[240px] overflow-hidden bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Overlay sutil que aparece en hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />

                {/* Badge flotante sobre la imagen */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-[#002EC3] hover:bg-white border-none rounded-lg px-3 py-1 text-xs font-bold shadow-sm backdrop-blur-sm">
                    {post.category}
                  </Badge>
                </div>
              </div>

              {/* Contenido de la Tarjeta */}
              <CardContent className="p-8 flex flex-col flex-grow">

                <div className="flex items-center gap-3 mb-5">
                  <span className="text-sm text-gray-400 font-medium">{post.date}</span>
                  <span className="text-sm text-gray-400 font-medium flex items-center before:content-['•'] before:mx-2 before:text-gray-300">
                    {post.readTime}
                  </span>
                </div>

                {/* El título cambia de color al hacer hover en la tarjeta */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-snug line-clamp-2 group-hover:text-[#002EC3] transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-500 text-base mb-8 flex-grow line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Link al final */}
                <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-[#002EC3] font-bold text-sm flex items-center gap-2 transition-all"
                  >
                    Leer artículo
                  </Link>
                  {/* Flecha que se desplaza en hover */}
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-[#002EC3] transition-colors duration-300">
                    <ArrowRight className="w-4 h-4 text-[#002EC3] group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}

        </div>
      </div>

    </div>
  );
}