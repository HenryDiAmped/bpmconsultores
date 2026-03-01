'use client';

import HeroSection from "./HeroSection";
import BlueFeatureSection from "./BlueFeatureSection";
import { Ripple } from "@/components/ui/ripple";
import { motion } from "framer-motion";

export default function HeroLanding() {
  return (
    // Agregamos overflow-hidden general para evitar cualquier desborde horizontal del Ripple
    <div className="relative w-full overflow-hidden bg-[#F7F7F7] flex flex-col items-center">
      
      {/* 1. Contenedor del Hero */}
      <div className="w-full relative z-10 flex flex-col justify-center pt-12 pb-10 md:pt-16 md:pb-16">
        
        <HeroSection />

        {/* 2. El Ripple posicionado ESTRICTAMENTE en la frontera. 
            Al usar translate-y-1/2, el núcleo exacto del Ripple queda en la línea 
            donde termina este div y empieza el BlueFeatureSection. */}
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }} 
        >
          <Ripple mainCircleSize={220} />
        </motion.div>

      </div>

      {/* 3. Sección Azul.
          No usamos margin-top aquí. Al estar pegado al div de arriba y tener 
          fondo transparente, cortará visualmente el Ripple justo por la mitad. */}
      <div className="w-full relative z-20"> 
        <BlueFeatureSection />
      </div>

    </div>
  );
}