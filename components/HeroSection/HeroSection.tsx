"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Ripple } from '@/components/ui/ripple'; 
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HeroSection() {
  const [activeItem, setActiveItem] = useState("item-1");

  return (
    <div className="w-full pb-24 bg-[#EFEFEF]">
      {/* ================= HERO SECTION ================= */}
      {/* 1. Cambio Clave: Añadimos z-0, quitamos overflow-hidden y aumentamos el pb-28 para dar espacio */}
      <section className="relative z-0 flex flex-col items-center justify-center pt-20 pb-28 px-4 text-center">
        
        {/* Logos BPM + Humand */}
        <div className="flex items-center gap-3 mb-6 z-10">
          <div className="bg-[#002EC3] rounded-2xl flex items-center justify-center h-14 w-36 shadow-md">
            <span className="text-white font-bold text-2xl tracking-tight">bpm</span>
          </div>
          <span className="text-[#002EC3] text-4xl font-bold">+</span>
          <div className="bg-[#002EC3] rounded-2xl flex items-center justify-center h-14 w-36 shadow-md">
            <span className="text-white font-medium text-xl">humand</span>
          </div>
        </div>

        {/* Badge "Conoce a nuestro partner" */}
        <button className="flex items-center gap-2 px-5 py-1.5 rounded-full border border-gray-400/50 text-sm text-gray-700 font-medium mb-12 hover:bg-gray-200/50 transition-colors z-10">
          Conoce a nuestro partner <ArrowRight className="w-4 h-4" />
        </button>

        {/* Textos Principales */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black max-w-4xl mb-6 leading-[1.1] z-10">
          Soluciones Estratégicas<br />Para Transformar tu negocio
        </h1>
        
        <p className="text-base md:text-lg text-gray-800 max-w-2xl mb-12 z-10 font-medium">
          Consultoría especializada en crecimiento, eficiencia y expansión internacional<br className="hidden md:block" />
          potenciada por inteligencia artificial avanzada de la mano con <span className="text-[#002EC3] font-bold">Humand</span>.
        </p>

        {/* Contenedor del Botón + Efecto Ripple */}
        <div className="relative flex items-center justify-center w-full h-[240px]">
          {/* 2. Cambio Clave: El Ripple debe tener z-0 para estar en el fondo */}
          <Ripple mainCircleSize={196} className="z-0" />
          
          {/* Botón al frente */}
          <Button className="bg-[#002EC3] hover:bg-[#002EC3]/90 text-white rounded-lg px-8 py-6 text-base shadow-lg transition-transform hover:scale-105 z-10 font-medium">
            Quiero una Demo
          </Button>
        </div>
      </section>

      {/* ================= BLUE FEATURE SECTION ================= */}
      {/* 3. Cambio Clave: Añadimos relative, z-20 y un margen negativo -mt-24 para superponerla */}
      <section className="relative z-20 max-w-[1200px] mx-auto px-4 -mt-24">
        <div className="bg-[#002EC3] rounded-[2rem] p-8 md:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-2xl">
          
          {/* Columna Izquierda: Textos y Acordeón */}
          <div className="w-full lg:w-[45%] flex flex-col text-white">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 pr-8">
              ¿Tu empresa realmente conoce a su gente?
            </h2>
            <p className="text-white/90 mb-8 text-sm md:text-base leading-relaxed">
              La mayoría cree que sí. Los datos dicen otra cosa. Transforma la forma en que entiendes, mides y potencias a tu equipo a nivel global.
            </p>

            <Accordion 
              type="single" 
              collapsible 
              value={activeItem} 
              onValueChange={setActiveItem}
              className="w-full"
            >
              <AccordionItem value="item-1" className="border-b-0 mb-4 pl-4 border-l-[3px] border-white/30 data-[state=open]:border-white transition-all">
                <AccordionTrigger className="text-left font-semibold text-sm md:text-base py-2 hover:no-underline text-white">
                  ¿Mides el clima laboral en tiempo real o esperas encuestas anuales?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 text-sm leading-relaxed pb-4 pt-2">
                  Las encuestas anuales son fotografías del pasado. Con tecnología en tiempo real, puedes detectar problemas antes de que escalen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b-0 mb-4 pl-4 border-l-[3px] border-white/30 data-[state=open]:border-white transition-all">
                <AccordionTrigger className="text-left font-semibold text-sm md:text-base py-2 hover:no-underline text-white">
                  ¿Cuánto talento estás perdiendo sin darte cuenta?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 text-sm leading-relaxed pb-4 pt-2">
                  Identifica la fuga de talento a tiempo con métricas predictivas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b-0 mb-4 pl-4 border-l-[3px] border-white/30 data-[state=open]:border-white transition-all">
                <AccordionTrigger className="text-left font-semibold text-sm md:text-base py-2 hover:no-underline text-white">
                  ¿Tus líderes gestionan personas o solo administran tareas?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 text-sm leading-relaxed pb-4 pt-2">
                  Con la tecnología de Humand, empoderamos a tus líderes dándoles herramientas para medir el pulso de su equipo. Fomentamos el desarrollo continuo, el feedback constructivo y el reconocimiento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b-0 mb-4 pl-4 border-l-[3px] border-white/30 data-[state=open]:border-white transition-all">
                <AccordionTrigger className="text-left font-semibold text-sm md:text-base py-2 hover:no-underline text-white">
                  ¿Tomas decisiones basadas en datos o en intuiciones?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 text-sm leading-relaxed pb-4 pt-2">
                  Convierte la intuición en acción respaldada por analítica de personas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Columna Derecha: Cuadro Celeste */}
          <div className="w-full lg:w-[55%] min-h-[400px] bg-[#AEC0F5] rounded-2xl flex items-center justify-center">
            {/* Aquí puedes cambiar la imagen según el 'activeItem' más adelante */}
          </div>

        </div>
      </section>
    </div>
  );
}