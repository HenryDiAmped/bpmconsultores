import Link from "next/link";
import { Container } from "@/components/ui/container"; 
import { FooterBranding } from "./footerBranding";
import Image from "next/image";

// 1. Data de Enlaces Principales
const footerLinks = [
  {
    title: "Funciones populares",
    links: [
      { name: "Qué es HubSpot", href: "#" },
      { name: "CRM gratuito de HubSpot", href: "#" },
      { name: "Creador de páginas web", href: "#" },
      { name: "Generador de chatbots", href: "#" },
    ],
  },
  {
    title: "Herramientas gratuitas",
    links: [
      { name: "Asistente de campañas", href: "#" },
      { name: "Creador de firmas de email", href: "#" },
      { name: "Generador de buyer personas", href: "#" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { name: "Sobre nosotros", href: "#" },
      { name: "Trabaja con nosotros", href: "#", badge: "EN" },
      { name: "Equipo directivo", href: "#" },
      { name: "Inversores", href: "#", badge: "EN" },
    ],
  },
  {
    title: "Clientes & Partners",
    links: [
      { name: "Atención al cliente", href: "#" },
      { name: "Únete a un grupo local", href: "#", badge: "EN" },
      { name: "Programa de Afiliados", href: "#", badge: "EN" },
    ],
  },
];

// 2. Data de Enlaces Legales (Aparecerán debajo del logo en el Footer)
const legalLinks = [
  { name: "Servicios", href: "/servicios" },
  { name: "Módulos", href: "/modulos" },
  { name: "Agente IA", href: "/agente-ia" },
  { name: "Blog", href: "/blog" },
  { name: "Nosotros", href: "/nosotros" },
];

// 3. Array de Redes Sociales usando tus SVGs exactos del Header
const socialMedia = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    hoverColor: "hover:text-blue-600", // Color original del hover en Header
    iconPath: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    hoverColor: "hover:text-pink-600",
    iconPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    hoverColor: "hover:text-blue-700",
    iconPath: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#F7F7F7] text-gray-600 py-16">
      
      {/* Tu componente con el logo superior y botones negros */}
      <FooterBranding />
      
      <Container>
        {/* === GRILLA DE ENLACES PRINCIPALES === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 border-b border-gray-200 pb-16 pt-16">
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col">
              <h3 className="text-gray-900 font-bold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-[#002EC3] hover:underline transition-colors flex items-center gap-2"
                    >
                      {link.name}
                      {link.badge && (
                        <span className="bg-gray-200 text-gray-800 text-[10px] font-bold px-1.5 py-0.5 rounded">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* === REDES SOCIALES (Usando tus SVGs) === */}
        <div className="flex justify-center gap-6 mb-8">
          {socialMedia.map((social) => (
            <a 
              key={social.name} 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`text-gray-400 transition-colors ${social.hoverColor}`}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.iconPath} />
              </svg>
            </a>
          ))}
        </div>

        {/* === COPYRIGHT Y ENLACES LEGALES (Igual que en el Header) === */}
        <div className="text-center">
          <div className="mb-4">
           <Image 
            src="/logo.png" 
            alt="BPM Consultores" 
            width={120} 
            height={40} 
            className="mx-auto h-8 w-auto" 
            />
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Copyright © {new Date().getFullYear()} BPM Consultores, Inc.
          </p>
          
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-gray-500">
            {legalLinks.map((link, index) => (
              <li key={link.name} className="flex items-center">
                <Link href={link.href} className="hover:text-gray-900 hover:underline transition-colors">
                  {link.name}
                </Link>
                {index < legalLinks.length - 1 && (
                  <span className="ml-4 text-gray-300 hidden md:inline">|</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        
      </Container>
    </footer>
  );
}