import React from 'react';
import Link from 'next/link';
// import Image from 'next/image'; // <-- Para cuando tengas las miniaturas

export interface VideoCardProps {
  id: string | number;
  title: string;
  youtubeUrl: string;
  thumbnailUrl?: string;
}

export function VideoCard({ title, youtubeUrl, thumbnailUrl }: VideoCardProps) {
  return (
    <Link 
      href={youtubeUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="relative flex-shrink-0 w-[240px] md:w-[280px] h-[320px] md:h-[380px] bg-blue-200/60 rounded-xl md:rounded-2xl overflow-hidden group block border border-blue-300/30 transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg"
    >
      {/* Cuando tengas las miniaturas reales:
        {thumbnailUrl && (
          <Image 
            src={thumbnailUrl} 
            alt={`Miniatura de ${title}`} 
            fill 
            className="object-cover" 
          />
        )}
      */}

      {/* Capa oscura semi-transparente que aparece al pasar el mouse para resaltar el botón */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />

      {/* Botón de Play animado en el centro */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-md group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
          {/* Icono de Play SVG */}
          <svg className="w-6 h-6 text-blue-600 group-hover:text-white ml-1 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>

      {/* Texto temporal hasta que pongas las miniaturas */}
      <span className="absolute bottom-4 left-0 right-0 text-sm font-medium text-blue-900 text-center px-4 z-0">
        {title}
      </span>
    </Link>
  );
}