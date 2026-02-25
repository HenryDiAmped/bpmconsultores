"use client";

import { useState } from "react";

interface VideoSectionProps {
  // El ID de tu video ya está configurado por defecto
  videoId?: string; 
  thumbnailUrl?: string; 
}

export default function VideoSection({ 
  videoId = "tD4jBA9Qydk", 
  thumbnailUrl 
}: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Obtiene la miniatura en máxima resolución directamente desde los servidores de YouTube
  const defaultThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const finalThumbnail = thumbnailUrl || defaultThumbnail;

  return (
    <section className="w-full px-4 py-16 bg-[#F7F7F7]">
      <div className="max-w-[1250px] mx-auto">
        
        {/* Contenedor Exterior (El marco blanco con sombra de tu diseño) */}
        <div className="p-2 sm:p-3 bg-white border border-gray-200 rounded-[1.2rem] shadow-sm">
          
          {/* Contenedor Interior (El área del video en proporción 16:9) */}
          <div 
            className="relative w-full aspect-video rounded-[0.8rem] overflow-hidden bg-gray-100 flex items-center justify-center cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            {!isPlaying ? (
              <>
                {/* Imagen de previsualización */}
                <img 
                  src={finalThumbnail} 
                  alt="Previsualización del video" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Capa oscura sutil para que el botón de play siempre resalte */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Botón de Play Blanco */}
                <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <svg 
                    className="w-6 h-6 sm:w-8 sm:h-8 text-[#002EC3] ml-1" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </>
            ) : (
              /* Reproductor real de YouTube (Carga solo al hacer clic) */
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}