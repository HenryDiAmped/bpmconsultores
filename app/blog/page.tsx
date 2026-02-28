'use client';

import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

// 1. Datos simulados basados en tu imagen
const CATEGORIES = ["Todos", "IA", "Blog", "Consultoría", "Gestión", "Tecnología"];

const BLOG_POSTS = [
  {
    id: 1,
    category: "IA",
    title: "IA aplicada a Recursos Humanos: cómo optimizar y reducir el costo de rotación",
    excerpt: "Descubre cómo la inteligencia artificial está revolucionando la gestión del talento y reduciendo costos...",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    date: "25 Feb 2026",
    readTime: "5 min",
  },
  {
    id: 2,
    category: "Tecnología",
    title: "Transformación digital: el camino hacia la empresa del futuro",
    excerpt: "Las empresas que adoptan la transformación digital logran una ventaja competitiva sostenible. Conoce las claves...",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    date: "20 Feb 2026",
    readTime: "7 min",
  },
  {
    id: 3,
    category: "IA",
    title: "El poder de la IA en la toma de decisiones estratégicas",
    excerpt: "Cómo las herramientas de IA ayudan a los líderes empresariales a tomar decisiones más informadas y...",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    date: "15 Feb 2026",
    readTime: "6 min",
  },
  {
    id: 4,
    category: "Consultoría",
    title: "Mejores prácticas en consultoría de procesos de negocio",
    excerpt: "Una guía completa sobre las metodologías y enfoques más efectivos en consultoría BPM para optimizar...",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    date: "10 Feb 2026",
    readTime: "8 min",
  },
  {
    id: 5,
    category: "Gestión",
    title: "Gestión del talento humano: estrategias para retener a tu mejor gente",
    excerpt: "El capital humano es el activo más valioso. Aprende las estrategias probadas para mantener motivado y...",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    date: "5 Feb 2026",
    readTime: "4 min",
  },
  {
    id: 6,
    category: "Blog",
    title: "Cómo implementar un sistema BPM exitoso en tu organización",
    excerpt: "Paso a paso para implementar un sistema de gestión de procesos que impulse la eficiencia y productividad...",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    date: "1 Feb 2026",
    readTime: "6 min",
  }
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  return (
    // Fondo general de la página
    <div className="w-full bg-[#F7F7F7] min-h-screen pb-24">
      
      {/* ========================================= */}
      {/* 1. HERO DEL BLOG (Cabecera Azul)          */}
      {/* ========================================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-8">
        <div className="bg-[#002EC3] rounded-[2rem] w-full py-20 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-lg">
          {/* Elementos decorativos de fondo (opcionales para imitar tu imagen) */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
             <div className="absolute -top-[50%] -left-[10%] w-[70%] h-[150%] bg-blue-400/30 rotate-12 blur-3xl rounded-full"></div>
             <div className="absolute top-[20%] -right-[10%] w-[50%] h-[100%] bg-blue-500/20 -rotate-12 blur-3xl rounded-full"></div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative z-10">
            Explora Nuestros Blogs
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl relative z-10">
            Ideas, tendencias y estrategias para transformar tu negocio con tecnología e IA.
          </p>
        </div>
      </div>

      {/* ========================================= */}
      {/* 2. FILTROS Y BUSCADOR (Toolbar)           */}
      {/* ========================================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-8 mb-10">
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-6">
          
          {/* Categorías (Pills) */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <Badge 
                key={cat}
                variant={activeCategory === cat ? "default" : "secondary"}
                className={`cursor-pointer px-4 py-1.5 text-sm rounded-full transition-all ${
                  activeCategory === cat 
                    ? "bg-[#002EC3] hover:bg-[#002EC3]/90 text-white" 
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>

          {/* Buscador usando el Input de Shadcn */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              type="text" 
              placeholder="Buscar artículos..." 
              className="pl-10 bg-white border-gray-200 rounded-full h-10 focus-visible:ring-[#002EC3]"
            />
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* 3. GRILLA DE TARJETAS (Usando Card Shadcn)*/}
      {/* ========================================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {BLOG_POSTS.map((post) => (
            // Uso de la Card de Shadcn. h-full es clave para que todas midan lo mismo
            <Card key={post.id} className="overflow-hidden flex flex-col h-full border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white rounded-2xl">
              
              {/* Imagen */}
              <div className="relative w-full h-[220px]">
                
              </div>

              {/* Contenido de la Tarjeta */}
              <CardContent className="p-6 flex flex-col flex-grow">
                
                {/* Meta info (Badge, Fecha, Tiempo) */}
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-blue-50 text-[#002EC3] hover:bg-blue-100 border-none rounded-md px-2 py-0.5 text-xs font-semibold">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-gray-400 font-medium">{post.date}</span>
                  <span className="text-xs text-gray-400 font-medium flex items-center before:content-['•'] before:mx-2 before:text-gray-300">
                    {post.readTime}
                  </span>
                </div>

                {/* Título y Resumen */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Link al final (mt-auto lo empuja siempre abajo) */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link 
                    href={`/blog/${post.id}`} 
                    className="text-[#002EC3] font-semibold text-sm flex items-center gap-1.5 hover:gap-2 transition-all w-fit group"
                  >
                    Leer más 
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

              </CardContent>
            </Card>
          ))}

        </div>
      </div>

    </div>
  );
}