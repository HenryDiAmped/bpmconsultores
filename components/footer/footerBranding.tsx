import Link from "next/link";
import { Container } from "@/components/ui/container";

export function FooterBranding() {
  return (
    // 1. Fondo claro (puedes usar bg-white o bg-[#F7F7F7])
    <div className=" bg-[#002EC3] py-10 border-b border-gray-200">
      <Container>
        <div className="flex flex-col max-w-4xl mx-auto px-4">
          
          {/* 2. Título Principal: Cambiamos text-white a text-gray-900 (Casi negro) */}
          <h2 className="text-3xl md:text-5xl lg:text-[48px] font-medium text-white mb-10 leading-[1.15] tracking-tight">
            Crecer no solo es posible, sino también increíblemente fácil con BPM.</h2>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            
            {/* === BOTÓN 1: PRINCIPAL === */}
            {/* Este se queda igual, el azul sólido resalta perfecto en el fondo blanco */}
            <Link 
              href="/contacto"
              className="bg-[#FFFFFF] text-[#002EC3] px-8 py-4 rounded-md font-semibold transition-colors duration-300 w-full sm:w-auto text-center shadow-sm hover:shadow-md"
            >
              Solicitar demostración
            </Link>
            

          </div>

        </div>
      </Container>
    </div>
  );
}