import HeroSection from '@/components/HeroSection';
import ImpactSection from '@/components/impact-section';
import VideoSection from '@/components/video-static/VideoSection';
import PartnersSection from '@/components/partners-section';
import VideoCarouselSection from '@/components/video-carouse-section';
import TalentSection from '@/components/information-section/information-section';
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ImpactSection />
      <VideoSection />
      <PartnersSection />
      <TalentSection />
      <VideoCarouselSection />
      
    </main>
  );
}
