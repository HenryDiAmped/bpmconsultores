'use client';

import { VideoCard, VideoCardProps } from '@/components/ui/video-card';
import { useTranslation } from 'react-i18next';

export default function VideoCarouselSection() {
  const { t } = useTranslation();

  // Obtenemos el array de videos del JSON
  const videosData = t('videoCarousel.videos', { returnObjects: true }) as VideoCardProps[];

  return (
    <section className="w-full pt-8 md:pt-12 pb-16 md:pb-24 bg-[#f7f7f7] overflow-hidden flex flex-col items-center relative">

      <div className="w-full max-w-[1250px] px-4 text-center mb-10 md:mb-14 relative z-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-medium text-foreground">
          {t('videoCarousel.title')} <br className="hidden md:block" />
          {t('videoCarousel.subtitle')} <span className="text-[#002EC3] font-semibold">{t('videoCarousel.highlight')}</span>
        </h2>
      </div>

      <div className="w-full max-w-[1280px] mx-auto flex items-center relative z-0">
        <div className="flex animate-marquee-slow w-max hover:[animation-play-state:paused]">

          <div className="flex items-center gap-6 md:gap-8 pr-6 md:pr-8">
            {videosData.map((video) => (
              <VideoCard key={`group1-${video.id}`} {...video} />
            ))}
          </div>
          <div className="flex items-center gap-6 md:gap-8 pr-6 md:pr-8" aria-hidden="true">
            {videosData.map((video) => (
              <VideoCard key={`group2-${video.id}`} {...video} />
            ))}
          </div>

        </div>
      </div>

      {/* Los gradientes usan el mismo color de fondo de la sección para fusionarse perfecto */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 lg:w-56 bg-gradient-to-r from-[#f7f7f7] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 lg:w-56 bg-gradient-to-l from-[#f7f7f7] to-transparent z-10 pointer-events-none" />

      <style>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 45s linear infinite;
        }
      `}</style>

    </section>
  );
}