
import { Card } from '@/components/ui/card';

const snacks = [
  {
    name: "Dunkaroos",
    description: "Cookies + frosting = childhood perfection",
    emoji: "🍪",
    color: "from-yellow-400 to-orange-500",
    memory: "The ultimate lunchbox flex"
  },
  {
    name: "Fruit by the Foot",
    description: "3 feet of fruity fun",
    emoji: "🍓",
    color: "from-red-400 to-pink-500",
    memory: "Always tried to eat it in one bite"
  },
  {
    name: "Gushers",
    description: "Fruit snacks that exploded in your mouth",
    emoji: "🍇",
    color: "from-purple-400 to-indigo-500",
    memory: "Waiting for your head to turn into fruit"
  },
  {
    name: "Bagel Bites",
    description: "Pizza in the morning, pizza in the evening",
    emoji: "🥯",
    color: "from-orange-400 to-red-500",
    memory: "When pizza on a bagel, you can eat pizza anytime"
  },
  {
    name: "Capri Sun",
    description: "Respect the pouch",
    emoji: "🧃",
    color: "from-blue-400 to-cyan-500",
    memory: "Never could get the straw in properly"
  },
  {
    name: "Pop Rocks",
    description: "Candy that popped in your mouth",
    emoji: "🍭",
    color: "from-pink-400 to-purple-500",
    memory: "The urban legend about soda..."
  },
  {
    name: "Lunchables",
    description: "DIY lunch that felt like a meal kit",
    emoji: "🧀",
    color: "from-yellow-400 to-amber-500",
    memory: "Crackers, cheese, and pure joy"
  },
  {
    name: "Sunny D",
    description: "Purple stuff was never an option",
    emoji: "🌞",
    color: "from-orange-400 to-yellow-500",
    memory: "Mom said it would turn you orange"
  }
];

const SnacksGallery = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cartoon text-5xl md:text-6xl text-orange-800 mb-4">
            🍿 90s Snack Attack
          </h2>
          <p className="font-retro text-xl text-orange-600">
            The fuel that powered our cartoon marathons
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {snacks.map((snack, index) => (
            <Card key={snack.name} className="overflow-hidden bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-1">
              <div className={`h-40 bg-gradient-to-br ${snack.color} p-4 relative overflow-hidden`}>
                <div className="text-center">
                  <div className="text-6xl mb-2 animate-bounce-slow">{snack.emoji}</div>
                  <h3 className="font-cartoon text-white text-lg drop-shadow-lg">{snack.name}</h3>
                </div>
                
                {/* Sparkle effect */}
                <div className="absolute top-2 right-2 text-white/50 animate-pulse">✨</div>
                <div className="absolute bottom-2 left-2 text-white/50 animate-pulse">✨</div>
              </div>
              
              <div className="p-4">
                <p className="font-retro text-sm text-gray-700 mb-2">{snack.description}</p>
                <p className="font-pixel text-xs text-orange-600 italic">"{snack.memory}"</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full border-4 border-electric-yellow">
            <p className="font-retro text-lg text-orange-800">
              Saturday mornings weren't complete without these! 🥤
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnacksGallery;
