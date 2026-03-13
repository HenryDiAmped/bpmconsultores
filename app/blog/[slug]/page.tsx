'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2, ChevronRight, Facebook, Link as LinkIcon, Check } from 'lucide-react';
import { notFound } from 'next/navigation';
import { use, useState, useEffect } from 'react';

// --- IMPORTAMOS LOS COMPONENTES DE CONTENIDO ---
import SoftwareRRHH from '../content/SoftwareRRHH';
import ReskillingIA from '../content/ReskillingIA';
import ComunicacionInterna from '../content/ComunicacionInterna';
import CapitalHumano from '../content/CapitalHumano';

// --- BASE DE DATOS LIGERA ---
const BLOG_POSTS = [
  {
    slug: 'software-rrhh-motor-estrategico',
    category: 'Tecnología',
    title: 'Software de RR.HH.: El motor estratégico para la gestión del desempeño de alto impacto',
    date: '15 Mar 2026',
    readTime: '5 min',
    image: 'https://res.cloudinary.com/dmgufgga4/image/upload/v1773360132/BLOG_1_ngbkme.avif',
    content: <SoftwareRRHH />
  },
  {
    slug: 'reskilling-urgencia-gerencia',
    category: 'IA',
    title: 'Reskilling: Por qué la recapacitación es la urgencia número uno de la gerencia moderna',
    date: '10 Mar 2026',
    readTime: '4 min',
    image: 'https://res.cloudinary.com/dmgufgga4/image/upload/v1773360132/BLOG_2_wsk7qa.webp',
    content: <ReskillingIA />
  },
  {
    slug: 'comunicacion-interna-eficiencia',
    category: 'Gestión',
    title: 'Comunicación Interna: El puente entre el caos operativo y la eficiencia estratégica',
    date: '02 Mar 2026',
    readTime: '6 min',
    image: 'https://res.cloudinary.com/dmgufgga4/image/upload/v1773360132/BLOG_3_cviihw.avif',
    content: <ComunicacionInterna />
  },
  {
    slug: 'capital-humano-vs-recursos-humanos',
    category: 'Consultoría',
    title: '¿Capital Humano o Recursos Humanos? Por qué la diferencia define el éxito de tu empresa',
    date: '28 Feb 2026',
    readTime: '5 min',
    image: 'https://res.cloudinary.com/dmgufgga4/image/upload/v1773360132/BLOG_4_i6gr8t.avif',
    content: <CapitalHumano />
  }
];

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Desenvolvemos la promesa de los params
  const resolvedParams = use(params);
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  // --- ESTADOS PARA EL MENÚ DE COMPARTIR ---
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  // Obtenemos la URL de la página actual una vez que el componente carga en el cliente
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  if (!post) {
    notFound();
  }

  // --- FUNCIONES PARA COMPARTIR ---
  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setIsShareOpen(false);
    }, 2000);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`He leído este artículo y me pareció interesante: ${post.title} - ${currentUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    setIsShareOpen(false);
  };

  const handleFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
    setIsShareOpen(false);
  };

  return (
    <main className="min-h-screen bg-white">
      
      {/* --- HERO DEL ARTÍCULO --- */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end justify-center pb-16 lg:pb-24 pt-32">
        <div className="absolute inset-0 z-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>

        <div className="mx-auto px-6 lg:px-8 max-w-[1000px] relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 text-white/70 text-sm mb-6 font-medium">
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{post.category}</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 tracking-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#002EC3]" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#002EC3]" />
                {post.readTime} de lectura
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CONTENIDO DEL ARTÍCULO --- */}
      <section className="py-16 lg:py-24 relative">
        <div className="mx-auto px-6 lg:px-8 max-w-[1320px] flex flex-col lg:flex-row gap-12 lg:gap-20 relative">
          
          {/* Barra Lateral Izquierda (Sticky) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:flex flex-col w-[100px] shrink-0 sticky top-32 h-fit items-center gap-8 z-40"
          >
            <Link href="/blog" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#002EC3] hover:border-[#002EC3] transition-all group shadow-sm bg-white">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
            
            <div className="w-[1px] h-12 bg-gray-200" />
            
            {/* COMPONENTE DE COMPARTIR INTERACTIVO */}
            <div className="relative flex flex-col items-center">
              <button 
                onClick={() => setIsShareOpen(!isShareOpen)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all bg-white ${isShareOpen ? 'text-white bg-[#002EC3] shadow-lg border-transparent' : 'text-gray-400 border border-transparent hover:text-[#002EC3]'}`}
                title="Compartir"
              >
                <Share2 className="w-5 h-5" />
              </button>

              <AnimatePresence>
                {isShareOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute top-14 left-1/2 -translate-x-1/2 flex flex-col gap-1.5 bg-white border border-gray-100 shadow-2xl rounded-xl p-2 w-[180px]"
                  >
                    <button onClick={handleCopyLink} className="flex items-center gap-3 text-sm text-gray-700 font-medium hover:text-[#002EC3] hover:bg-blue-50/50 p-2.5 rounded-lg transition-colors text-left w-full">
                      {copied ? <Check className="w-4 h-4 text-green-500" /> : <LinkIcon className="w-4 h-4" />}
                      {copied ? '¡Enlace copiado!' : 'Copiar enlace'}
                    </button>
                    
                    <button onClick={handleWhatsApp} className="flex items-center gap-3 text-sm text-gray-700 font-medium hover:text-[#002EC3] hover:bg-blue-50/50 p-2.5 rounded-lg transition-colors text-left w-full">
                      {/* Icono SVG nativo de WhatsApp */}
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp
                    </button>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
          </motion.div>

          {/* Cuerpo del Texto */}
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-[800px] prose prose-lg md:prose-xl prose-slate 
              prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-light
              prose-a:text-[#002EC3] prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-[#002EC3] prose-blockquote:bg-blue-50/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-[#002EC3] prose-blockquote:rounded-r-lg
              prose-li:text-gray-600 prose-li:font-light prose-ul:space-y-3
              [&>.lead]:text-2xl [&>.lead]:font-medium [&>.lead]:text-gray-800 [&>.lead]:mb-8"
          >
            {post.content}
          </motion.article>

        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="bg-slate-50 py-20 border-t border-gray-200">
        <div className="mx-auto px-6 lg:px-8 max-w-[800px] text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">¿Listo para transformar tu gestión de talento?</h3>
          <p className="text-gray-600 mb-8 text-lg font-light">
            En BPM Consultores, te ayudamos a diagnosticar tus procesos y a implementar la tecnología que mejor se adapte a tu cultura corporativa.
          </p>
          <Link href="/#contacto" className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all bg-[#002EC3] hover:bg-slate-900 rounded-none gap-2 shadow-lg hover:shadow-xl">
            Conversemos con un experto
          </Link>
        </div>
      </section>

    </main>
  );
}