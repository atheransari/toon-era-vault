
import HeroSection from '@/components/HeroSection';
import CharacterGallery from '@/components/CharacterGallery';
import FlashbackGenerator from '@/components/FlashbackGenerator';
import NostalgiaTimeline from '@/components/NostalgiaTimeline';
import ThemeSongJukebox from '@/components/ThemeSongJukebox';
import SnacksGallery from '@/components/SnacksGallery';
import CartoonQuiz from '@/components/CartoonQuiz';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CharacterGallery />
      <FlashbackGenerator />
      <ThemeSongJukebox />
      <NostalgiaTimeline />
      <SnacksGallery />
      <CartoonQuiz />
    </div>
  );
};

export default Index;
