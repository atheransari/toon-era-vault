
import { useState } from 'react';
import { Card } from '@/components/ui/card';

const characters = [
  {
    name: "Dexter",
    emoji: "🧪",
    caption: "The scientist in all of us",
    color: "from-blue-400 to-purple-500",
    show: "Dexter's Laboratory"
  },
  {
    name: "Powerpuff Girls",
    emoji: "💖",
    caption: "Your fearless protectors",
    color: "from-pink-400 to-red-500",
    show: "The Powerpuff Girls"
  },
  {
    name: "Scooby-Doo",
    emoji: "🐕",
    caption: "The best late-night snack buddy",
    color: "from-yellow-400 to-orange-500",
    show: "Scooby-Doo"
  },
  {
    name: "Johnny Bravo",
    emoji: "💪",
    caption: "Confidence was everything",
    color: "from-yellow-300 to-amber-500",
    show: "Johnny Bravo"
  },
  {
    name: "Courage",
    emoji: "😱",
    caption: "Bravery despite being scared",
    color: "from-purple-400 to-pink-500",
    show: "Courage the Cowardly Dog"
  },
  {
    name: "Ed, Edd & Eddy",
    emoji: "🍭",
    caption: "Summer adventures with friends",
    color: "from-green-400 to-teal-500",
    show: "Ed, Edd n Eddy"
  },
  {
    name: "Tom & Jerry",
    emoji: "🐱",
    caption: "Classic chase never gets old",
    color: "from-gray-400 to-blue-500",
    show: "Tom and Jerry"
  },
  {
    name: "Bugs Bunny",
    emoji: "🐰",
    caption: "What's up, childhood?",
    color: "from-orange-400 to-red-500",
    show: "Looney Tunes"
  },
  {
    name: "The Flintstones",
    emoji: "🦕",
    caption: "Stone age but modern problems",
    color: "from-stone-400 to-amber-600",
    show: "The Flintstones"
  }
];

const CharacterGallery = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cyan-50 to-purple-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cartoon text-5xl md:text-6xl text-purple-800 mb-4">
            Your Childhood Squad 👾
          </h2>
          <p className="font-retro text-xl text-purple-600">
            Remember when these were the most important people in your life?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character, index) => (
            <Card
              key={character.name}
              className={`relative overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-105 hover:rotate-1 ${
                hoveredCard === index ? 'shadow-2xl shadow-purple-500/50' : 'shadow-lg'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`h-64 bg-gradient-to-br ${character.color} p-6 relative overflow-hidden`}>
                {/* Character emoji */}
                <div className="text-8xl mb-4 text-center animate-bounce-slow">
                  {character.emoji}
                </div>

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-black/20 backdrop-blur-sm flex flex-col items-center justify-center transition-opacity duration-300 ${
                  hoveredCard === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-center text-white p-4">
                    <h3 className="font-cartoon text-2xl mb-2">{character.name}</h3>
                    <p className="font-retro text-lg mb-2">"{character.caption}"</p>
                    <div className="text-sm opacity-75">{character.show}</div>
                  </div>
                </div>

                {/* TV scan lines effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse"></div>
                </div>
              </div>

              {/* Character name at bottom */}
              <div className="p-4 bg-white">
                <h3 className="font-pixel text-lg text-center text-purple-800">
                  {character.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-retro text-lg text-purple-600">
            Missing someone? They're probably in the next update! 📺✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default CharacterGallery;
