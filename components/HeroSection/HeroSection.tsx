"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Ripple } from "@/components/ui/ripple"; // <-- Traemos el Ripple aquí

export default function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center">
      
      {/* Logos BPM + Humand */}
      <div className="mb-6">
        <Image 
          src="/parnet-bpm+humand.svg"
          alt="BPM Consultores + Humand"
          width={400} 
          height={100} 
          className="h-20 md:h-30 w-auto drop-shadow-sm"
          priority 
        />
      </div>

      {/* Badge */}
      <button className="flex items-center gap-2 px-5 py-1.5 rounded-full border border-gray-400/50 text-sm text-gray-700 font-medium mb-10 hover:bg-gray-200/50 transition-colors">
        Conoce a nuestro partner <ArrowRight className="w-4 h-4" />
      </button>

      {/* Textos Principales */}
      <h1 className="text-4xl md:text-5xl lg:text-[64px] font-semibold tracking-tight text-black max-w-4xl mb-6 leading-[1.1]">
        Soluciones Estratégicas Para<br />Transformar tu negocio con IA
      </h1>
      
      <p className="text-base md:text-lg text-gray-800 max-w-2xl mb-6 font-medium">
        consultoría + soluciones digitales = eficiencia en RRHH 
      </p>

      {/* Contenedor del Botón + Animación Ripple */}
      <div className="relative flex items-center justify-center w-full py-12">
        
        {/* mt-12 lo bajará 48px desde el centro */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-30 pointer-events-none z-0">
          <Ripple mainCircleSize={220} />
        </div>

        <Button className="bg-[#002EC3] hover:bg-[#002EC3]/90 text-white rounded-lg px-15 py-9 text-base shadow-lg transition-transform hover:scale-105 font-medium relative z-20">
          Quiero una Demo
        </Button>
      </div>

    </section>
  );
}