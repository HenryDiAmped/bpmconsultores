import HeroSection from "./HeroSection";
import BlueFeatureSection from "./BlueFeatureSection";

export default function HeroLanding() {
  return (
    <div className="relative w-full overflow-x-hidden bg-[#F7F7F7] flex flex-col items-center">
      
      {/* min-h-[85vh] empuja el contenido para que ocupe el 85% de la pantalla.
        Así, la sección azul asomará en el 15% inferior de la pantalla (efecto MkSaaS).
      */}
      <div className="w-full relative z-10 flex flex-col justify-center min-h-[85vh] pt-12">
        <HeroSection />
      </div>

      {/* SECCIÓN INFERIOR (Acordeón Azul) */}
      {/* El margen negativo (-mt-10 a -mt-20) hace que se superponga suavemente a los círculos */}
      <div className="w-full relative z-20 -mt-4 md:-mt-1"> 
        <BlueFeatureSection />
      </div>

    </div>
  );
}