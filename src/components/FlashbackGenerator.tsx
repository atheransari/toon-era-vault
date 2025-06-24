
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const flashbacks = {
  "dexter": "You're in your PJs, it's 6:30 AM. Dexter just yelled 'DEE DEE!' from your TV again. You laugh while munching cereal, dreaming of having your own secret laboratory.",
  "powerpuff girls": "Sugar, spice, and everything nice! You're convinced you have superpowers too, jumping off the couch trying to fly. Blossom was always your favorite leader.",
  "scooby-doo": "It's Friday night, lights are dim, and you're sharing a giant sandwich with the family. Every creaky sound makes you think of ghostly mysteries.",
  "johnny bravo": "Mirror time! You're practicing Johnny's signature pose and catchphrases. 'Do the monkey with me!' echoes through your bedroom.",
  "courage": "Under a blanket fort, you're scared but can't look away. Courage's screams match yours, but you both stay brave until the end.",
  "tom and jerry": "No dialogue needed. Pure slapstick comedy has you rolling on the floor, trying to recreate Jerry's clever mouse traps with your toys.",
  "default": "Saturday morning, bowl of colorful cereal, cartoons on blast. Life was simple, imagination was infinite, and every day felt like an adventure waiting to happen."
};

const FlashbackGenerator = () => {
  const [inputValue, setInputValue] = useState('');
  const [currentFlashback, setCurrentFlashback] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateFlashback = () => {
    if (!inputValue.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const key = inputValue.toLowerCase().trim();
      const flashback = flashbacks[key as keyof typeof flashbacks] || flashbacks.default;
      setCurrentFlashback(flashback);
      setIsGenerating(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      generateFlashback();
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-pink-100 via-purple-100 to-cyan-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="font-cartoon text-5xl md:text-6xl text-purple-800 mb-4">
            🤖 AI-Powered Flashback Generator
          </h2>
          <p className="font-retro text-xl text-purple-600 mb-8">
            Tell me your favorite cartoon, and I'll take you back in time...
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-neon-cyan">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Input
              placeholder="Enter your favorite cartoon character..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="font-retro text-lg p-4 border-2 border-purple-300 focus:border-hot-pink rounded-xl"
            />
            <Button
              onClick={generateFlashback}
              disabled={isGenerating || !inputValue.trim()}
              className="font-pixel bg-gradient-to-r from-hot-pink to-purple-500 hover:from-purple-500 hover:to-hot-pink transition-all duration-300 px-8 py-4 rounded-xl"
            >
              {isGenerating ? '🔮 Generating...' : '✨ Time Travel'}
            </Button>
          </div>

          {currentFlashback && (
            <Card className="p-6 bg-gradient-to-br from-yellow-100 to-pink-100 border-4 border-electric-yellow animate-fade-in">
              <div className="text-center">
                <div className="text-4xl mb-4">📺</div>
                <p className="font-retro text-lg text-purple-800 leading-relaxed italic">
                  "{currentFlashback}"
                </p>
                <div className="mt-4 text-sm text-purple-600">
                  *Nostalgia level: Maximum* 💫
                </div>
              </div>
            </Card>
          )}

          <div className="mt-8 text-sm font-retro text-purple-600">
            Try: Dexter, Powerpuff Girls, Scooby-Doo, Johnny Bravo, Courage, Tom and Jerry
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashbackGenerator;
