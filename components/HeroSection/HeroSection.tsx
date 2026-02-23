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
    <div className="w-full pb-24">
      {/* ================= HERO SECTION ================= */}
      <section className="relative z-0 flex flex-col items-center justify-center pt-20 px-4 text-center">
        
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
        <h1 className="text-4xl md:text-5xl lg:text-[64px] font-semibold tracking-tight text-black max-w-4xl mb-6 leading-[1.1] z-10">
          Soluciones Estratégicas<br />Para Transformar tu negocio
        </h1>
        
        <p className="text-base md:text-lg text-gray-800 max-w-2xl mb-[29px] z-10 font-medium">
          Consultoría especializada en crecimiento, eficiencia y expansión internacional<br className="hidden md:block" />
          potenciada por inteligencia artificial avanzada de la mano con <span className="text-[#002EC3] font-bold">Humand</span>.
        </p>

        {/* Contenedor del Botón + Ripple flotante */}
        <div className="relative flex items-center justify-center w-full mb-[29px]">
          <div className="absolute left-1/2 -translate-x-1/2 -top-[-155px] w-0 h-0 z-0">
            <Ripple mainCircleSize={196} />
          </div>
          
          <Button className="bg-[#002EC3] hover:bg-[#002EC3]/90 text-white rounded-lg px-8 py-6 text-base shadow-lg transition-transform hover:scale-105 z-10 relative font-medium">
            Quiero una Demo
          </Button>
        </div>
      </section>

      {/* ================= BLUE FEATURE SECTION ================= */}
      {/* Cambiamos el ancho máximo a 1020px exactos */}
      <section className="relative z-20 max-w-[1020px] mx-auto px-4">
        
        {/* Añadimos lg:min-h-[470px] para respetar el diseño base pero permitir que el acordeón empuje si es necesario */}
        <div className="bg-[#002EC3] rounded-[2rem] flex flex-col lg:flex-row shadow-2xl overflow-hidden lg:min-h-[470px]">
          
          {/* Columna Izquierda: Ajustamos un poco el padding superior para balancear el nuevo alto */}
          <div className="w-full lg:w-[50%] flex flex-col text-white p-8 md:p-12 lg:pt-12 lg:pb-8 lg:pl-12 lg:pr-8">
            <h2 className="text-3xl md:text-4xl lg:text-[36px] font-semibold mb-5 leading-[1.15]">
              ¿Tu empresa realmente conoce a su gente?
            </h2>
            <p className="text-white/90 mb-6 text-sm md:text-base leading-relaxed">
              La mayoría cree que sí. Los datos dicen otra cosa. Transforma la forma en que entiendes, mides y potencias a tu equipo a nivel global.
            </p>

            <Accordion 
              type="single" 
              collapsible 
              value={activeItem} 
              onValueChange={setActiveItem}
              className="w-full flex flex-col gap-1"
            >
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="text-left font-semibold text-sm py-2.5 hover:no-underline text-white relative pl-6">
                  <div className={`absolute left-0 top-[12px] w-[5px] h-6 rounded-full transition-colors duration-300 ${activeItem === 'item-1' ? 'bg-white' : 'bg-white/30'}`} />
                  ¿Mides el clima laboral en tiempo real o esperas encuestas anuales?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 text-sm leading-relaxed pl-6 pb-2 pt-0">
                  Las encuestas anuales son fotografías del pasado. Con tecnología en tiempo real, puedes detectar problemas antes de que escalen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-none">
                <AccordionTrigger className="text-left font-semibold text-sm py-2.5 hover:no-underline text-white relative pl-6">
                  <div className={`absolute left-0 top-[12px] w-[5px] h-6 rounded-full transition-colors duration-300 ${activeItem === 'item-2' ? 'bg-white' : 'bg-white/30'}`} />
                  ¿Cuánto talento estás perdiendo sin darte cuenta?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 text-sm leading-relaxed pl-6 pb-2 pt-0">
                  Identifica la fuga de talento a tiempo con métricas predictivas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-none">
                <AccordionTrigger className="text-left font-semibold text-sm py-2.5 hover:no-underline text-white relative pl-6">
                  <div className={`absolute left-0 top-[12px] w-[5px] h-6 rounded-full transition-colors duration-300 ${activeItem === 'item-3' ? 'bg-white' : 'bg-white/30'}`} />
                  ¿Tus líderes gestionan personas o solo administran tareas?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 text-xs leading-relaxed pl-6 pb-2 pt-0">
                  Con la tecnología de Humand, empoderamos a tus líderes dándoles herramientas para medir el pulso de su equipo. Fomentamos el desarrollo continuo, el feedback constructivo y el reconocimiento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-none">
                <AccordionTrigger className="text-left font-semibold text-sm py-2.5 hover:no-underline text-white relative pl-6">
                  <div className={`absolute left-0 top-[12px] w-[5px] h-6 rounded-full transition-colors duration-300 ${activeItem === 'item-4' ? 'bg-white' : 'bg-white/30'}`} />
                  ¿Tomas decisiones basadas en datos o en intuiciones?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 text-sm leading-relaxed pl-6 pb-2 pt-0">
                  Convierte la intuición en acción respaldada por analítica de personas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Columna Derecha: Ajuste de flex para que respete el alto de 470px */}
          <div className="w-full lg:w-[50%] flex items-end justify-end pt-8 lg:pt-16 pl-8 md:pl-12 lg:pl-0">
            {/* Caja Celeste */}
            <div className="w-full h-full min-h-[300px] bg-[#AEC0F5] rounded-tl-[2.5rem] border-t-[6px] border-l-[6px] border-white flex items-center justify-center relative">
               {/* Contenido dinámico */}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}