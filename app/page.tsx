import ImpactSection from '@/components/impact-section';
import VideoSection from '@/components/video-static/VideoSection';
import PartnersSection from '@/components/partners-section';
import VideoCarouselSection from '@/components/video-carouse-section';
import TalentSection from '@/components/information-section/information-section';
import HeroLanding from '@/components/HeroSection';
import ReviewsCarousel from '@/components/reviews-section/reviewsCarousel';
import BlogsSection from '@/components/blogs-section/BlogsSection'; 
import PartnerHero from '@/components/union-section/PartnerHero';
import FaqSection from '@/components/preguntas-section/FaqSection';
export default function Home() {
  return (
    <main>
      <HeroLanding/>      
      <ImpactSection />
      <VideoSection />
      <PartnersSection />
      <TalentSection />
      <VideoCarouselSection />
      <ReviewsCarousel />
      <PartnerHero />
      <BlogsSection />        
      <FaqSection /> 
    </main>
  );
}
