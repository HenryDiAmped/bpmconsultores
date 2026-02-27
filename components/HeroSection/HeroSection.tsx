"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    // Mantenemos un margen negativo para subir todo el contenido visualmente
    <section className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center -mt-4 md:-mt-8">

      <div className="mb-6">
        <Image 
          src="/parnet-bpm+humand.svg"
          alt="BPM Consultores + Humand"
          width={400} 
          height={100} 
          className="h-20 md:h-28 w-auto drop-shadow-sm relative z-20"
          priority 
        />
      </div>

      <button className="flex items-center gap-2 px-5 py-1.5 rounded-full border border-gray-400/50 text-sm text-gray-700 font-medium mb-10 hover:bg-gray-200/50 transition-colors relative z-20">
        {t('hero.partnerButton')} <ArrowRight className="w-4 h-4" />
      </button>

      <h1 className="text-4xl md:text-5xl lg:text-[64px] font-semibold tracking-tight text-black max-w-4xl mb-6 leading-[1.1] relative z-20">
        {t('hero.title')}<br />
        {t('hero.titleBreak')}
      </h1>
      
      <p className="text-base md:text-lg text-gray-800 max-w-2xl mb-6 font-medium relative z-20">
        {t('hero.subtitle')}
      </p>

      {/* Ajustamos el padding (pt-12 pb-4) para dejar espacio limpio hacia abajo */}
      <div className="relative flex items-center justify-center w-full pt-12 pb-4">
        <Button className="bg-[#002EC3] hover:bg-[#002EC3]/90 text-white rounded-lg px-14 py-8 text-base shadow-lg transition-transform hover:scale-105 font-medium relative z-20">
          {t('hero.cta')}
        </Button>
      </div>

    </section>
  );
}