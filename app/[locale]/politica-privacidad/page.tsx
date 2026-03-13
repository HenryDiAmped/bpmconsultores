import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | BPM Consultores',
  description: 'Política de Privacidad de BPM Consultores - Información sobre cómo recopilamos, usamos y protegemos tus datos personales',
};

import { useTranslations } from 'next-intl';

export default function PoliticaPrivacidadPage() {
  const t = useTranslations('legal');

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
        {/* Header */}
        <div className="mb-8 border-b border-gray-200 pb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('privacy.title')}
          </h1>
          <p className="text-sm text-gray-500">
            {t('last_updated')} {new Date().toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* 1. Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            1. Introducción
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            En BPM Consultores nos tomamos muy en serio la privacidad de nuestros usuarios y el 
            tratamiento de sus datos personales. Esta Política de Privacidad describe cómo recopilamos, 
            usamos, compartimos y protegemos tu información personal cuando visitas nuestro sitio web 
            o utilizas nuestros servicios.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Esta política cumple con el Reglamento General de Protección de Datos (GDPR) de la Unión 
            Europea y la Ley General de Protección de Datos (LGPD) de Brasil.
          </p>
        </section>

        {/* 2. Responsible */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. Responsable del Tratamiento
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <p className="text-gray-900 font-semibold mb-3">BPM Consultores</p>
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-medium">Email:</span>{' '}
                <a href="mailto:contacto@bpmconsultores.com" className="text-[#002EC3] hover:underline">
                  contacto@bpmconsultores.com
                </a>
              </p>
              <p>
                <span className="font-medium">Responsable de Protección de Datos:</span>{' '}
                <a href="mailto:privacidad@bpmconsultores.com" className="text-[#002EC3] hover:underline">
                  privacidad@bpmconsultores.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* 3. Data We Collect */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. Datos que Recopilamos
          </h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            3.1 Información que nos Proporcionas
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cuando utilizas nuestro formulario de contacto, recopilamos:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
            <li>Nombre completo</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono (opcional)</li>
            <li>Nombre de la empresa (opcional)</li>
            <li>Mensaje o consulta</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            3.2 Información Recopilada Automáticamente
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cuando visitas nuestro sitio web, podemos recopilar automáticamente:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
            <li>Dirección IP</li>
            <li>Tipo de navegador y versión</li>
            <li>Sistema operativo</li>
            <li>Páginas visitadas y tiempo de permanencia</li>
            <li>Fuente de referencia (cómo llegaste a nuestro sitio)</li>
            <li>Información de cookies (ver nuestra{' '}
              <a href="/politica-cookies" className="text-[#002EC3] hover:underline">
                Política de Cookies
              </a>)
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            3.3 Información de Terceros
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Podemos recibir información sobre ti de servicios de terceros como Google Analytics y 
            Facebook Pixel, siempre que hayas dado tu consentimiento para el uso de cookies analíticas 
            y de marketing.
          </p>
        </section>

        {/* 4. Legal Basis */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            4. Base Legal del Tratamiento
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Procesamos tus datos personales bajo las siguientes bases legales:
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-[#002EC3] pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Consentimiento</h3>
              <p className="text-gray-700 text-sm">
                Cuando nos proporcionas tus datos a través del formulario de contacto o aceptas el 
                uso de cookies opcionales.
              </p>
            </div>
            <div className="border-l-4 border-[#002EC3] pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Interés Legítimo</h3>
              <p className="text-gray-700 text-sm">
                Para mejorar nuestros servicios, analizar el uso del sitio web y prevenir fraudes.
              </p>
            </div>
            <div className="border-l-4 border-[#002EC3] pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Cumplimiento de Obligaciones Legales</h3>
              <p className="text-gray-700 text-sm">
                Cuando sea necesario para cumplir con requisitos legales o regulatorios.
              </p>
            </div>
          </div>
        </section>

        {/* 5. How We Use Data */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            5. Cómo Usamos tus Datos
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Utilizamos la información recopilada para:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Responder a tus consultas y solicitudes de información</li>
            <li>Proporcionar y mejorar nuestros servicios</li>
            <li>Enviar comunicaciones relacionadas con tu consulta</li>
            <li>Analizar el uso del sitio web y mejorar la experiencia del usuario</li>
            <li>Detectar, prevenir y abordar problemas técnicos o de seguridad</li>
            <li>Cumplir con obligaciones legales y regulatorias</li>
            <li>Realizar análisis estadísticos y de mercado (con tu consentimiento)</li>
          </ul>
        </section>

        {/* 6. Data Sharing */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            6. Con Quién Compartimos tus Datos
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            No vendemos ni alquilamos tu información personal a terceros. Podemos compartir tus datos con:
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Proveedores de Servicios
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Compartimos información con proveedores de servicios que nos ayudan a operar nuestro sitio web:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
            <li>Servicios de hosting y almacenamiento</li>
            <li>Servicios de email (Resend)</li>
            <li>Herramientas de análisis (Google Analytics)</li>
            <li>Plataformas publicitarias (Facebook, Google Ads)</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Requisitos Legales
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Podemos divulgar tu información si es requerido por ley, orden judicial, o para proteger 
            nuestros derechos legales.
          </p>
        </section>

        {/* 7. International Transfers */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            7. Transferencias Internacionales
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Algunos de nuestros proveedores de servicios pueden estar ubicados fuera de tu país de 
            residencia. Cuando transferimos datos personales internacionalmente, nos aseguramos de que:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Se implementen salvaguardas apropiadas (cláusulas contractuales estándar)</li>
            <li>Los proveedores cumplan con estándares de protección de datos equivalentes</li>
            <li>Se respeten tus derechos bajo GDPR y LGPD</li>
          </ul>
        </section>

        {/* 8. Data Retention */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            8. Retención de Datos
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Conservamos tus datos personales solo durante el tiempo necesario para cumplir con los 
            propósitos descritos en esta política:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>
              <span className="font-medium">Datos del formulario de contacto:</span> Hasta 2 años 
              después de la última interacción, salvo que solicites su eliminación antes
            </li>
            <li>
              <span className="font-medium">Cookies y datos de análisis:</span> Según lo especificado 
              en nuestra{' '}
              <a href="/politica-cookies" className="text-[#002EC3] hover:underline">
                Política de Cookies
              </a>
            </li>
            <li>
              <span className="font-medium">Logs del servidor:</span> Hasta 90 días
            </li>
          </ul>
        </section>

        {/* 9. Your Rights */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            9. Tus Derechos
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bajo GDPR y LGPD, tienes los siguientes derechos respecto a tus datos personales:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Derecho de Acceso</h3>
              <p className="text-gray-700 text-sm">
                Puedes solicitar una copia de los datos personales que tenemos sobre ti.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Derecho de Rectificación</h3>
              <p className="text-gray-700 text-sm">
                Puedes solicitar que corrijamos datos inexactos o incompletos.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Derecho de Supresión (Derecho al Olvido)</h3>
              <p className="text-gray-700 text-sm">
                Puedes solicitar que eliminemos tus datos personales en ciertas circunstancias.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Derecho de Portabilidad</h3>
              <p className="text-gray-700 text-sm">
                Puedes solicitar recibir tus datos en un formato estructurado y de uso común.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Derecho de Oposición</h3>
              <p className="text-gray-700 text-sm">
                Puedes oponerte al procesamiento de tus datos para ciertos propósitos.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Derecho a Retirar el Consentimiento</h3>
              <p className="text-gray-700 text-sm">
                Puedes retirar tu consentimiento en cualquier momento sin afectar la legalidad del 
                procesamiento previo.
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            Para ejercer cualquiera de estos derechos, contáctanos en{' '}
            <a href="mailto:privacidad@bpmconsultores.com" className="text-[#002EC3] hover:underline font-medium">
              privacidad@bpmconsultores.com
            </a>
            . Responderemos a tu solicitud dentro de 30 días.
          </p>
        </section>

        {/* 10. Security */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            10. Seguridad
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales 
            contra acceso no autorizado, pérdida, destrucción o alteración:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Cifrado de datos en tránsito (HTTPS/TLS)</li>
            <li>Headers de seguridad HTTP (CSP, X-Frame-Options, etc.)</li>
            <li>Validación y sanitización de inputs</li>
            <li>Rate limiting para prevenir abusos</li>
            <li>Acceso restringido a datos personales</li>
            <li>Monitoreo de seguridad y logs de eventos</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% 
            seguro. Aunque nos esforzamos por proteger tus datos, no podemos garantizar su seguridad absoluta.
          </p>
        </section>

        {/* 11. Changes */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            11. Cambios a esta Política
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre 
            cambios significativos publicando la nueva política en esta página y actualizando la fecha 
            de "Última actualización" en la parte superior.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Te recomendamos revisar esta política periódicamente para estar informado sobre cómo 
            protegemos tu información.
          </p>
        </section>

        {/* 12. Contact and Complaints */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            12. Contacto y Reclamaciones
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Si tienes preguntas, inquietudes o deseas ejercer tus derechos respecto a tus datos 
            personales, contáctanos:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
            <p className="text-gray-900 font-semibold mb-3">BPM Consultores</p>
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-medium">Email general:</span>{' '}
                <a href="mailto:contacto@bpmconsultores.com" className="text-[#002EC3] hover:underline">
                  contacto@bpmconsultores.com
                </a>
              </p>
              <p>
                <span className="font-medium">Responsable de Protección de Datos:</span>{' '}
                <a href="mailto:privacidad@bpmconsultores.com" className="text-[#002EC3] hover:underline">
                  privacidad@bpmconsultores.com
                </a>
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            También tienes derecho a presentar una reclamación ante la autoridad de protección de datos 
            de tu país si consideras que el tratamiento de tus datos personales infringe la normativa aplicable.
          </p>
        </section>

        {/* Back to home */}
        <div className="pt-6 border-t border-gray-200">
          <a 
            href="/" 
            className="inline-flex items-center text-[#002EC3] hover:underline font-medium"
          >
            {t('back_to_home')}
          </a>
        </div>
      </div>
    </div>
  );
}
