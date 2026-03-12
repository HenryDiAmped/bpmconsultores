import BlogsSection from '@/components/blogs-section/BlogsSection';
import HeroSection from '@/components/Hero-section/HeroSection';
import SolucionesSection from '@/components/soluciones-section/SolucionesSection';
import ValorSection from '@/components/valor-section/ValorSection';
import VideoDobleSection from '@/components/video-doble-section/VideoDobleSection';
import HumandSection from '@/components/humand-section/HumandSection';
import ContactSection from '@/components/contact-section/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      
      {/* Sección enlazada a "Soluciones" */}
      <section id="soluciones">
        <SolucionesSection />
      </section>

      <ValorSection />
      <VideoDobleSection />

      {/* Sección enlazada a "Humand Partner" */}
      <section id="humand-partner">
        <HumandSection />
      </section>
      
      {/* Sección enlazada al botón de "Conversemos" */}
      <section id="contacto">
        <ContactSection />
      </section>

      {/* Sección enlazada a "Blog" */}
      <section id="blog">
        <BlogsSection />  
      </section>
      
    </main>
  );
}