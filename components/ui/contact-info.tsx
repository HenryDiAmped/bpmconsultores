export function ContactInfo() {
  return (
    <div className="relative w-full lg:w-5/12 bg-[#F7F7F7] p-10 lg:p-16 xl:p-20 overflow-hidden border-r border-gray-200">
      {/* Ambient Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#002EC3] opacity-[0.07] rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#002EC3] opacity-[0.05] rounded-full blur-3xl pointer-events-none"></div>

      {/* 1. Título y Descripción */}
      <div className="relative z-10 mb-16">
        <h1 className="text-4xl lg:text-[3rem] font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
          Impulsemos tu <br />
          <span className="text-[#002EC3]">negocio hoy.</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-md">
          Nuestros especialistas están listos para diseñar e implementar la
          solución de inteligencia artificial que tu equipo necesita.
        </p>
      </div>

      {/* 2. Métricas / Prueba Social */}
      <div className="relative z-10 grid grid-cols-2 gap-8 mb-16">
        <div>
          <h4 className="text-4xl font-extrabold text-[#002EC3] mb-2">150+</h4>
          <p className="text-gray-600 font-medium">Empresas transformadas</p>
        </div>
        <div>
          <h4 className="text-4xl font-extrabold text-[#002EC3] mb-2">30+</h4>
          <p className="text-gray-600 font-medium">Países alcanzados</p>
        </div>
      </div>

      {/* 3. Beneficios / Nuestro Proceso */}
      <div className="relative z-10 mb-16 space-y-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          ¿Qué puedes esperar?
        </h3>

        <div className="flex gap-4 group">
          <div className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#002EC3] shrink-0 font-bold group-hover:border-[#002EC3] group-hover:bg-blue-50 transition-colors">
            1
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">
              Análisis Profundo
            </h4>
            <p className="text-gray-600 mt-1">
              Auditamos tus procesos actuales para encontrar cuellos de botella
              y oportunidades de mejora.
            </p>
          </div>
        </div>

        <div className="flex gap-4 group">
          <div className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#002EC3] shrink-0 font-bold group-hover:border-[#002EC3] group-hover:bg-blue-50 transition-colors">
            2
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">
              Solución a la Medida
            </h4>
            <p className="text-gray-600 mt-1">
              Diseñamos módulos de IA que se integran de forma natural con el
              ecosistema de tu empresa.
            </p>
          </div>
        </div>

        <div className="flex gap-4 group">
          <div className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#002EC3] shrink-0 font-bold group-hover:border-[#002EC3] group-hover:bg-blue-50 transition-colors">
            3
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">
              Soporte Continuo
            </h4>
            <p className="text-gray-600 mt-1">
              Te acompañamos en todo el proceso de adopción tecnológica y
              capacitación de tu equipo.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Bloque de Contacto y Ubicación */}
      <div className="relative z-10 space-y-6 pt-10 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Información Directa
        </h3>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100 shrink-0">
            <svg className="w-5 h-5 text-[#002EC3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Escríbenos</p>
            <p className="font-semibold text-gray-900">contacto@bpmconsultores.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100 shrink-0">
            <svg className="w-5 h-5 text-[#002EC3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Llámanos</p>
            <p className="font-semibold text-gray-900">+51 999 999 999</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100 shrink-0">
            <svg className="w-5 h-5 text-[#002EC3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Ubicación principal</p>
            <p className="font-semibold text-gray-900">Lima, Perú</p>
            <p className="text-sm text-gray-500 mt-1">Atención remota a toda Latinoamérica</p>
          </div>
        </div>
      </div>
    </div>
  );
}