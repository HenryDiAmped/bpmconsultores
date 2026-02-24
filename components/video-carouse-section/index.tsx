import React from 'react';
import { VideoCard, VideoCardProps } from '@/components/ui/video-card';

// Data mockeada (falsa) para los videos
const videosData: VideoCardProps[] = [
  { id: 1, title: 'Proceso de Ventas', youtubeUrl: 'https://youtube.com', thumbnailUrl: '' },
  { id: 2, title: 'Gestión de Talento', youtubeUrl: 'https://youtube.com', thumbnailUrl: '' },
  { id: 3, title: 'Optimización de RRHH', youtubeUrl: 'https://youtube.com', thumbnailUrl: '' },
  { id: 4, title: 'Onboarding Digital', youtubeUrl: 'https://youtube.com', thumbnailUrl: '' },
  { id: 5, title: 'Clima Laboral', youtubeUrl: 'https://youtube.com', thumbnailUrl: '' },
];

export default function VideoCarouselSection() {
  return (
    // Reutilizamos la lógica de espaciado (pt y pb) para encajar bien con las otras secciones
    <section className="w-full pt-8 md:pt-12 pb-16 md:pb-24 bg-background overflow-hidden flex flex-col items-center relative">
      
      {/* 1. Título - Alineado al max-w-[1020px] de tu diseño base */}
      <div className="w-full max-w-[1020px] px-4 text-center mb-10 md:mb-14 relative z-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-medium text-foreground">
          Rediseñamos Tus Procesos Con <br className="hidden md:block" />
          Los <span className="text-blue-600 font-semibold">Módulos de Human</span>
        </h2>
      </div>

      {/* 2. Contenedor del Carrusel (Max 1280px) */}
      <div className="w-full max-w-[1280px] mx-auto flex items-center relative z-0">
        
        {/* 3. Pista animada (Marquee) - Usamos una animación más lenta (40s) */}
        {/* La clase "group" aquí nos permite pausar TODO el carrusel si el mouse entra en el contenedor */}
        <div className="flex animate-marquee-slow w-max hover:[animation-play-state:paused]">
          
          {/* Grupo 1 */}
          <div className="flex items-center gap-6 md:gap-8 pr-6 md:pr-8">
            {videosData.map((video) => (
              <VideoCard key={`group1-${video.id}`} {...video} />
            ))}
          </div>

          {/* Grupo 2 (Duplicado para el bucle) */}
          <div className="flex items-center gap-6 md:gap-8 pr-6 md:pr-8" aria-hidden="true">
            {videosData.map((video) => (
              <VideoCard key={`group2-${video.id}`} {...video} />
            ))}
          </div>

        </div>
      </div>

      {/* 4. Difuminados laterales anclados a la sección principal */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 lg:w-56 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 lg:w-56 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* 5. Estilos para la animación lenta */}
      <style>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          /* 45 segundos para que los videos pasen suavemente */
          animation: marquee-slow 45s linear infinite;
        }
      `}</style>
      
    </section>
  );
}