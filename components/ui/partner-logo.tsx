import React from 'react';
// import Image from 'next/image'; // <-- Descomenta esto cuando tengas las imágenes

export interface PartnerLogoProps {
  id: string | number;
  name: string;
  imageUrl?: string;
}

export function PartnerLogo({ name, imageUrl }: PartnerLogoProps) {
  return (
    <div className="flex-shrink-0 w-[171px] h-[118px] bg-blue-200/50 rounded flex items-center justify-center relative overflow-hidden">
      
      {/* Cuando tengas las imágenes reales, puedes borrar el <span> de abajo y usar esto:
        {imageUrl && (
          <Image 
            src={imageUrl} 
            alt={`Logo de ${name}`} 
            fill 
            className="object-contain p-4" 
          />
        )}
      */}
      
      {/* Texto temporal hasta que pongas las imágenes */}
      <span className="text-sm font-medium text-blue-800 text-center px-2">
        {name}
      </span>
      
    </div>
  );
}