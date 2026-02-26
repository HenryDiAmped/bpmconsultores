import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface VideoCardProps {
  id: string | number;
  title: string;
  videoId: string; // Solo necesitas pasar el ID del video de YouTube
}

export function VideoCard({ title, videoId }: VideoCardProps) {
  // Generamos la miniatura y el link automáticamente usando el ID
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <Link 
      href={youtubeUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      // Ancho ajustado para pantallas horizontales y diseño de tarjeta blanca
      className="relative flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-2xl overflow-hidden group block border border-gray-100 shadow-sm transition-transform duration-300 hover:scale-[1.03] hover:shadow-md"
    >
      {/* Parte Superior: Miniatura del video (Proporción 16:9) */}
      <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
        <Image 
          src={thumbnailUrl} 
          alt={`Miniatura de ${title}`} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        
        {/* Capa oscura semi-transparente */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300 z-10" />

        {/* Botón de Play en el centro */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-md group-hover:bg-[#002EC3] group-hover:scale-110 transition-all duration-300">
            <svg className="w-5 h-5 text-[#002EC3] group-hover:text-white ml-1 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Parte Inferior: Título en fondo blanco */}
      <div className="p-4 md:p-5 flex items-center justify-center">
        <span className="block text-sm md:text-base font-semibold text-gray-800 text-center">
          {title}
        </span>
      </div>
    </Link>
  );
}