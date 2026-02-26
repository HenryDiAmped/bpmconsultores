import HeroSection from "./HeroSection";
import BlueFeatureSection from "./BlueFeatureSection";
import { Ripple } from "@/components/ui/ripple";

export default function HeroLanding() {
  return (
    <div className="relative w-full overflow-x-hidden bg-[#F7F7F7] flex flex-col items-center">
      
      {/* 1. Contenedor del Hero:
          Le agregamos 'overflow-hidden' para que cualquier cosa que sobresalga
          de su límite inferior desaparezca, creando el corte recto perfecto. */}
      <div className="w-full relative z-10 flex flex-col justify-center pt-12 pb-10 md:pt-16 md:pb-16 overflow-hidden">
        
        <HeroSection />

        {/* 2. El Ripple posicionado en la frontera:
            bottom-0 lo pega exactamente donde termina este contenedor y empieza la sección azul.
            translate-y-1/2 empuja el núcleo del Ripple para que quede justo a la mitad de la línea de corte. */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none z-0">
          <Ripple mainCircleSize={220} />
        </div>

      </div>

      {/* 3. Sección Azul */}
      <div className="w-full relative z-20"> 
        <BlueFeatureSection />
      </div>

    </div>
  );
}