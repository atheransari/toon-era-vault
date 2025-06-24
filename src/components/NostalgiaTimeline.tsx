
import { Card } from '@/components/ui/card';

const timelineEvents = [
  {
    year: "1995",
    title: "Cartoon Network Boom",
    description: "The golden age begins with shows like Dexter's Lab",
    color: "from-blue-400 to-cyan-500",
    image: "/images/dexter.jpg"
  },
  {
    year: "1996", 
    title: "Saturday Morning Ritual",
    description: "Waking up at 6 AM for cartoons becomes sacred",
    color: "from-yellow-400 to-orange-500",
    image: "/images/scooby.jpg"
  },
  {
    year: "1997",
    title: "Game Boy Color", 
    description: "Pokemon Red/Blue changes everything",
    color: "from-green-400 to-emerald-500",
    image: "/images/johnny.jpg"
  },
  {
    year: "1998",
    title: "Powerpuff Girls Premiere",
    description: "Sugar, spice, and everything nice hits our screens", 
    color: "from-pink-400 to-red-500",
    image: "/images/powerpuff.jpg"
  },
  {
    year: "1999",
    title: "Ed, Edd n Eddy",
    description: "Summer adventures with the cul-de-sac crew",
    color: "from-green-400 to-teal-500", 
    image: "/images/dexter.jpg"
  },
  {
    year: "2000",
    title: "Courage Premieres", 
    description: "Scared but couldn't stop watching",
    color: "from-purple-400 to-pink-500",
    image: "/images/courage.jpg"
  },
  {
    year: "2001",
    title: "Adult Swim Begins",
    description: "Late night cartoons for when we got older",
    color: "from-indigo-400 to-purple-500",
    image: "/images/johnny.jpg"
  }
];

const NostalgiaTimeline = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-cyan-100 via-purple-100 to-pink-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cartoon text-5xl md:text-6xl text-purple-800 mb-4">
            📅 Nostalgia Timeline
          </h2>
          <p className="font-retro text-xl text-purple-600">
            Journey through the golden years of our childhood
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-hot-pink via-neon-cyan to-electric-yellow"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={event.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="p-6 bg-white/80 backdrop-blur-sm border-2 border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className={`h-32 bg-gradient-to-br ${event.color} rounded-lg p-4 mb-4 relative overflow-hidden`}>
                      <div className="absolute top-2 right-2 w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-white">
                        <h3 className="font-cartoon text-2xl mb-2">{event.year}</h3>
                        <p className="font-pixel text-sm">{event.title}</p>
                      </div>
                    </div>
                    <p className="font-retro text-purple-700">{event.description}</p>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className="w-6 h-6 bg-white border-4 border-hot-pink rounded-full shadow-lg"></div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NostalgiaTimeline;
