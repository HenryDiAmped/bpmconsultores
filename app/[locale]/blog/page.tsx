'use client';

import { useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';

const INTERVAL_MS = 4000;

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

export default function BlogPage() {
  const t = useTranslations('blogPage');
  const [currentIndex, setCurrentIndex] = useState(0);

  const BLOGS = [
    {
      slug: 'software-rrhh-motor-estrategico',
      category: t('articles.a1.cat'),
      title: t('articles.a1.title'),
      excerpt: t('articles.a1.excerpt'),
      date: t('articles.a1.date'),
      readTime: t('articles.a1.readTime'),
      image: 'https://res.cloudinary.com/dmgufgga4/image/upload/v1773360132/BLOG_1_ngbkme.avif',
      featured: true, 
    },
    {
      slug: 'reskilling-urgencia-gerencia',
      category: t('articles.a2.cat'),
      title: t('articles.a2.title'),
      excerpt: t('articles.a2.excerpt'),
      date: t('articles.a2.date'),
      readTime: t('articles.a2.readTime'),
      image: 'https://res.cloudinary.com/dmgufgga4/image/upload/v1773360132/BLOG_2_wsk7qa.webp',
      featured: false,
    },
    {
      slug: 'comunicacion-interna-eficiencia',
      category: t('articles.a3.cat'),
      title: t('articles.a3.title'),
      excerpt: t('articles.a3.excerpt'),
      date: t('articles.a3.date'),
      readTime: t('articles.a3.readTime'),
      image: 'https://res.cloudinary.com/dmgufgga4/image/upload/v1773360132/BLOG_3_cviihw.avif',
      featured: false,
    },
    {
      slug: 'capital-humano-vs-recursos-humanos',
      category: t('articles.a4.cat'),
      title: t('articles.a4.title'),
      excerpt: t('articles.a4.excerpt'),
      date: t('articles.a4.date'),
      readTime: t('articles.a4.readTime'),
      image: 'https://res.cloudinary.com/dmgufgga4/image/upload/v1773360132/BLOG_4_i6gr8t.avif',
      featured: false,
    }
  ];

  // Efecto para rotar las imágenes del Hero automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % BLOGS.length);
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    // 1. QUITAMOS el pt-20 de aquí para que todo suba hasta el borde de la pantalla
    <main className="min-h-screen bg-slate-50"> 
      
      {/* --- HERO SECTION DEL BLOG (ROTATIVO) --- */}
      {/* 2. AGREGAMOS pt-32 lg:pt-48 para bajar el contenido y que no choque con el Header */}
      <section className="w-full pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden bg-black">
        
        {/* Fondo de Imágenes Rotativas */}
        <div className="absolute inset-0 z-0">
          {BLOGS.map((blog, index) => (
            <img
              key={blog.slug}
              src={blog.image}
              alt={blog.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
          {/* Overlay oscuro y malla para garantizar legibilidad del texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-[#002EC3]/40 z-20" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-20 pointer-events-none" />
        </div>
        
        {/* Contenido del Hero */}
        <div className="mx-auto px-6 lg:px-8 max-w-[1320px] relative z-30 flex flex-col items-center text-center pb-8 lg:pb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key="hero-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-white font-bold tracking-[0.2em] uppercase text-xs mb-6 bg-[#002EC3]/80 px-4 py-2 rounded-full inline-block backdrop-blur-sm border border-white/20">
                {t('hero.tag')}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto drop-shadow-lg">
                {t('hero.title_part1')} <br className="hidden md:block"/>
                <span className="text-blue-300 font-light italic">{t('hero.title_part2')}</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-50 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                {t('hero.desc')}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicadores de progreso (Referencia a HeroSection principal) */}
        <div className="absolute bottom-0 left-0 right-0 w-full z-40 pb-6">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-8 flex items-end justify-center gap-3 sm:gap-6 w-full">
            {BLOGS.map((blog, index) => {
              const isActive = index === currentIndex;
              return (
                <div 
                  key={index} 
                  className="flex-1 max-w-[200px] cursor-pointer group flex flex-col justify-end"
                  onClick={() => setCurrentIndex(index)}
                >
                  <p className={`text-[10px] sm:text-xs font-semibold tracking-wide transition-colors duration-300 mb-2 truncate text-left ${
                    isActive ? 'text-white' : 'text-white/50 group-hover:text-white/80'
                  }`}>
                    {blog.category}
                  </p>
                  
                  <div className="h-[2px] w-full bg-white/20 relative overflow-hidden rounded-full">
                    {isActive && (
                      <motion.div
                        key={currentIndex} 
                        className="absolute top-0 left-0 h-full bg-[#002EC3]"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: INTERVAL_MS / 1000, ease: 'linear' }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- GRID DE ARTÍCULOS --- */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto px-6 lg:px-8 max-w-[1320px]">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {BLOGS.map((blog) => (
              <Link 
                href={`/blog/${blog.slug}`} 
                key={blog.slug}
                className={`group flex flex-col h-full ${blog.featured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}`}
              >
                <motion.article
                  variants={itemVariants}
                  className={`flex h-full bg-white border border-gray-200 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,46,195,0.15)] hover:border-[#002EC3]/30 hover:-translate-y-2 relative ${blog.featured ? 'flex-col md:flex-row' : 'flex-col'}`}
                >
                  {/* Línea decorativa superior en hover */}
                  <div className={`absolute left-0 w-full h-1 bg-[#002EC3] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20 top-0 origin-left`} />

                  {/* Imagen */}
                  <div className={`relative overflow-hidden bg-[#B0BCE1] ${blog.featured ? 'w-full md:w-1/2 aspect-video md:aspect-auto' : 'w-full aspect-[4/3]'}`}>
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Contenido */}
                  <div className={`p-6 md:p-8 flex flex-col flex-grow bg-white z-10 ${blog.featured ? 'w-full md:w-1/2 justify-center' : 'w-full'}`}>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#002EC3] bg-blue-50 px-3 py-1 rounded-sm">
                        {blog.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        {blog.date}
                      </div>
                    </div>

                    <h3 className={`font-bold text-gray-900 leading-[1.3] mb-4 group-hover:text-[#002EC3] transition-colors duration-300 ${blog.featured ? 'text-2xl md:text-3xl' : 'text-xl line-clamp-3'}`}>
                      {blog.title}
                    </h3>

                    <p className={`text-gray-600 font-light leading-relaxed mb-8 flex-grow ${blog.featured ? 'text-base md:text-lg line-clamp-4' : 'text-sm line-clamp-3'}`}>
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto border-t border-gray-100 pt-5">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        {blog.readTime} {t('misc.read_time')}
                      </div>
                      <div className="flex items-center text-[#002EC3] font-bold text-[12px] transition-colors duration-300">
                        <span className="tracking-wide uppercase mr-2">{t('misc.read_more')}</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </div>
                    </div>
                    
                  </div>
                </motion.article>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

    </main>
  );
}