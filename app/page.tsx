import BlogsSection from '@/components/blogs-section/BlogsSection';
import HeroSection from '@/components/Hero-section/HeroSection';
import SolucionesSection from '@/components/soluciones-section/SolucionesSection';
import ValorSection from '@/components/valor-section/ValorSection';
import VideoDobleSection from '@/components/video-doble-section/VideoDobleSection';
import HumandSection from '@/components/humand-presentation/HumandSection';
import ContactSection from '@/components/contact-section/ContactSection';
export default function Home() {
  return (
    <main>
      <HeroSection />
      <SolucionesSection />
      <ValorSection />
      <VideoDobleSection />
      <HumandSection />
      <ContactSection />
      <BlogsSection />  
      
    </main>
  );
}
