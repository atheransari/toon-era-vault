
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    setIsMuted(!isMuted);
    // In a real app, this would control background music
    console.log(isMuted ? 'Playing 90s tunes!' : 'Music paused');
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-purple-400 via-pink-300 to-cyan-300">
      {/* Floating cartoon elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="float-element absolute top-20 left-10 text-6xl">🧪</div>
        <div className="float-element absolute top-40 right-20 text-5xl">👾</div>
        <div className="float-element absolute bottom-40 left-20 text-7xl">🤖</div>
        <div className="float-element absolute bottom-20 right-10 text-6xl">🎮</div>
        <div className="float-element absolute top-1/2 left-1/4 text-4xl">📺</div>
        <div className="float-element absolute top-1/3 right-1/3 text-5xl">🍕</div>
      </div>

      {/* TV Static overlay */}
      <div className="tv-static absolute inset-0 opacity-10"></div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="font-cartoon text-6xl md:text-8xl text-white drop-shadow-lg mb-6 animate-bounce-slow">
          Welcome to the
          <span className="block text-neon-cyan drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]">
            TOON ERA
          </span>
        </h1>
        
        <p className="font-retro text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
          Relive the golden age of childhood – one cartoon at a time.
          <br />
          <span className="text-electric-yellow">Grab your cereal and let's time travel! 🥣</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
          <Button 
            size="lg" 
            className="font-pixel text-lg bg-hot-pink hover:bg-cartoon-purple transition-all duration-300 transform hover:scale-105 hover:animate-glitch px-8 py-4"
          >
            🗝️ Open Memory Vault
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={toggleSound}
            className="font-pixel text-lg border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 px-8 py-4"
          >
            {isMuted ? <VolumeX className="mr-2" /> : <Volume2 className="mr-2" />}
            {isMuted ? 'Play 90s Vibes' : 'Pause Tunes'}
          </Button>
        </div>

        <div className="text-sm font-retro text-white/70">
          Best experienced with Saturday morning energy ⚡
        </div>
      </div>

      {/* Animated border decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-hot-pink via-electric-yellow to-neon-cyan animate-pulse"></div>
    </section>
  );
};

export default HeroSection;
