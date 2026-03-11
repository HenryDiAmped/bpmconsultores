import { Metadata } from 'next';
import { COOKIE_DEFINITIONS } from '@/lib/cookies/constants';

export const metadata: Metadata = {
  title: 'Política de Cookies | BPM Consultores',
  description: 'Información sobre el uso de cookies en el sitio web de BPM Consultores',
};

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
        {/* Header */}
        <div className="mb-8 border-b border-gray-200 pb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Política de Cookies
          </h1>
          <p className="text-sm text-gray-500">
            Última actualización: {new Date().toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            1. Introducción
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              En BPM Consultores utilizamos cookies y tecnologías similares para mejorar tu experiencia
              en nuestro sitio web, analizar el tráfico y personalizar el contenido.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Esta Política de Cookies explica qué son las cookies, cómo las usamos, qué tipos de cookies
              utilizamos y cómo puedes controlarlas.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              ¿Qué son las cookies?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador,
              tablet o móvil) cuando visitas un sitio web. Permiten que el sitio web recuerde tus acciones
              y preferencias durante un período de tiempo.
            </p>
          </div>
        </section>

        {/* Types of Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. Tipos de Cookies que Usamos
          </h2>

          {/* Essential Cookies */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2.1 Cookies Esenciales
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Estas cookies son necesarias para el funcionamiento básico del sitio web y no se pueden
              desactivar. Generalmente solo se establecen en respuesta a acciones realizadas por ti,
              como establecer tus preferencias de privacidad.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nombre
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Propósito
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Duración
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {COOKIE_DEFINITIONS.filter(c => c.category === 'essential').map((cookie) => (
                    <tr key={cookie.name}>
                      <td className="px-4 py-3 text-sm font-mono text-gray-900">{cookie.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{cookie.purpose}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{cookie.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Analytics Cookies */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2.2 Cookies Analíticas
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Estas cookies nos permiten contar las visitas y fuentes de tráfico para poder medir y
              mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y
              menos populares y ver cómo los visitantes se mueven por el sitio.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nombre
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Propósito
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Duración
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Proveedor
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {COOKIE_DEFINITIONS.filter(c => c.category === 'analytics').map((cookie) => (
                    <tr key={cookie.name}>
                      <td className="px-4 py-3 text-sm font-mono text-gray-900">{cookie.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{cookie.purpose}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{cookie.duration}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{cookie.provider}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Marketing Cookies */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2.3 Cookies de Marketing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios
              publicitarios. Pueden ser utilizadas por esas empresas para construir un perfil de tus
              intereses y mostrarte anuncios relevantes en otros sitios.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nombre
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Propósito
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Duración
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Proveedor
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {COOKIE_DEFINITIONS.filter(c => c.category === 'marketing').map((cookie) => (
                    <tr key={cookie.name}>
                      <td className="px-4 py-3 text-sm font-mono text-gray-900">{cookie.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{cookie.purpose}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{cookie.duration}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{cookie.provider}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How to Manage Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. Cómo Gestionar Cookies
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            3.1 Desde Nuestro Banner de Cookies
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Puedes gestionar tus preferencias de cookies en cualquier momento haciendo clic en el botón
            "Gestionar Cookies" que aparece en la esquina inferior izquierda de nuestro sitio web.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
            3.2 Desde tu Navegador
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            La mayoría de los navegadores web permiten controlar las cookies a través de sus ajustes de
            preferencias. Para obtener más información sobre cómo gestionar cookies, visita:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#002EC3] hover:underline"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#002EC3] hover:underline"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#002EC3] hover:underline"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#002EC3] hover:underline"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
        </section>

        {/* Third-Party Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            4. Cookies de Terceros
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Utilizamos servicios de terceros que pueden establecer sus propias cookies. Estos servicios incluyen:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-[#002EC3] pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Google Analytics</h3>
              <p className="text-gray-700 text-sm mb-2">
                Utilizamos Google Analytics para analizar el uso de nuestro sitio web.
              </p>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#002EC3] hover:underline text-sm"
              >
                Ver Política de Privacidad de Google →
              </a>
            </div>

            <div className="border-l-4 border-[#002EC3] pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Facebook Pixel</h3>
              <p className="text-gray-700 text-sm mb-2">
                Utilizamos Facebook Pixel para medir la efectividad de nuestras campañas publicitarias.
              </p>
              <a
                href="https://www.facebook.com/privacy/explanation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#002EC3] hover:underline text-sm"
              >
                Ver Política de Privacidad de Facebook →
              </a>
            </div>
          </div>
        </section>

        {/* Updates */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            5. Actualizaciones de esta Política
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios en las
            cookies que utilizamos o por otras razones operativas, legales o regulatorias.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Te recomendamos que revises esta página periódicamente para estar informado sobre nuestro
            uso de cookies. La fecha de la última actualización se muestra en la parte superior de esta página.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            6. Contacto
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Si tienes preguntas sobre esta Política de Cookies o sobre cómo usamos las cookies,
            puedes contactarnos en:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <p className="text-gray-900 font-semibold mb-2">BPM Consultores</p>
            <p className="text-gray-700 mb-1">
              Email:{' '}
              <a href="mailto:contacto@bpmconsultores.com" className="text-[#002EC3] hover:underline">
                contacto@bpmconsultores.com
              </a>
            </p>
            <p className="text-gray-700">
              Responsable de Protección de Datos:{' '}
              <a href="mailto:privacidad@bpmconsultores.com" className="text-[#002EC3] hover:underline">
                privacidad@bpmconsultores.com
              </a>
            </p>
          </div>
        </section>

        {/* Back to home */}
        <div className="pt-6 border-t border-gray-200">
          <a
            href="/"
            className="inline-flex items-center text-[#002EC3] hover:underline font-medium"
          >
            ← Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}
