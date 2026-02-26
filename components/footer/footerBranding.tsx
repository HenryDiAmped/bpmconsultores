import Link from "next/link";
import { Container } from "@/components/ui/container";

export function FooterBranding() {
  return (
    // 1. Fondo claro (puedes usar bg-white o bg-[#F7F7F7])
    <div className=" bg-[#F7F7F7] py-20 md:py-28 border-b border-gray-200">
      <Container>
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4">
          
          {/* 2. Título Principal: Cambiamos text-white a text-gray-900 (Casi negro) */}
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-medium text-gray-900 mb-10 leading-[1.15] tracking-tight">
            Crecer no solo es posible, sino también <br className="hidden md:block" />
            increíblemente fácil con BPM<span className="text-[#002EC3]">.</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            
            {/* === BOTÓN 1: PRINCIPAL === */}
            {/* Este se queda igual, el azul sólido resalta perfecto en el fondo blanco */}
            <Link 
              href="/contacto"
              className="bg-[#002EC3] hover:bg-[#00208A] text-white px-8 py-4 rounded-md font-semibold transition-colors duration-300 w-full sm:w-auto text-center shadow-sm hover:shadow-md"
            >
              Solicitar demostración
            </Link>
            
            {/* === BOTÓN 2: SECUNDARIO === */}
            {/* 3. Cambiamos el borde blanco por borde gris, y el texto a gris oscuro */}
            {/* Al hacer hover, se pone un poquito gris claro de fondo */}
            <Link 
              href="/empezar"
              className="bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 rounded-md font-semibold transition-all duration-300 w-full sm:w-auto text-center"
            >
              Comenzar gratis
            </Link>

          </div>

        </div>
      </Container>
    </div>
  );
}