
import HeroSection from '@/components/HeroSection';
import CharacterGallery from '@/components/CharacterGallery';
import FlashbackGenerator from '@/components/FlashbackGenerator';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CharacterGallery />
      <FlashbackGenerator />
    </div>
  );
};

export default Index;
