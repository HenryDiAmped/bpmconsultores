"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface VideoSectionProps {
  videoId?: string; 
  thumbnailUrl?: string; 
}

export default function VideoSection({ 
  videoId = "tD4jBA9Qydk", 
  thumbnailUrl 
}: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const defaultThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const finalThumbnail = thumbnailUrl || defaultThumbnail;

  return (
    <section className="w-full px-4 pb-16 bg-[#F7F7F7]">
      <div className="max-w-[1250px] mx-auto flex flex-col items-center">
        
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-[42px] font-medium text-black leading-tight">
            ¿Qué es <span className="text-[#002EC3]">BPM Consultores</span>?
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.7, 
            ease: [0.34, 1.56, 0.64, 1] 
          }}
          className="w-full max-w-4xl p-2 sm:p-3 bg-white border border-gray-200 rounded-[1.2rem] shadow-sm"
        >
          
          {/* Contenedor del video con proporción 16:9 */}
          <div 
            className="relative w-full aspect-video rounded-[0.8rem] overflow-hidden bg-gray-100 flex items-center justify-center cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            {!isPlaying ? (
              <>
                <Image 
                  src={finalThumbnail} 
                  alt="Previsualización del video"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                
                <div className="relative z-10 w-16 h-16 sm:w-18 sm:h-18 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
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
        </motion.div>

      </div>
    </section>
  );
}