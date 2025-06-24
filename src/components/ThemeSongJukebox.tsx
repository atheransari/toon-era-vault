
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Pause, Volume2 } from 'lucide-react';

const themeSongs = [
  {
    show: "Dexter's Laboratory",
    title: "What a Fine Day for Science",
    duration: "0:30",
    color: "from-blue-500 to-purple-600"
  },
  {
    show: "Powerpuff Girls",
    title: "Super Hero Girls",
    duration: "0:45",
    color: "from-pink-500 to-red-600"
  },
  {
    show: "Scooby-Doo",
    title: "Scooby-Doo Theme",
    duration: "1:00",
    color: "from-yellow-500 to-orange-600"
  },
  {
    show: "Johnny Bravo",
    title: "Do the Monkey",
    duration: "0:35",
    color: "from-yellow-400 to-amber-600"
  },
  {
    show: "Courage",
    title: "Courage's Scream",
    duration: "0:15",
    color: "from-purple-500 to-pink-600"
  },
  {
    show: "Ed, Edd n Eddy",
    title: "Jawbreaker Blues",
    duration: "0:40",
    color: "from-green-500 to-teal-600"
  }
];

const ThemeSongJukebox = () => {
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);

  const playTheme = (index: number) => {
    if (currentPlaying === index) {
      setCurrentPlaying(null);
      console.log(`Paused ${themeSongs[index].show} theme`);
    } else {
      setCurrentPlaying(index);
      console.log(`Playing ${themeSongs[index].show} theme song!`);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-pink-800 to-cyan-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cartoon text-5xl md:text-6xl text-white mb-4">
            🎵 Theme Song Jukebox
          </h2>
          <p className="font-retro text-xl text-white/80">
            Press play and let the nostalgia wash over you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themeSongs.map((song, index) => (
            <Card key={song.show} className="overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/20">
              <div className={`h-32 bg-gradient-to-br ${song.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 p-4 flex items-center justify-between h-full">
                  <div className="text-white">
                    <h3 className="font-cartoon text-lg mb-1">{song.show}</h3>
                    <p className="font-retro text-sm opacity-75">{song.title}</p>
                    <span className="font-pixel text-xs bg-white/20 px-2 py-1 rounded mt-2 inline-block">
                      {song.duration}
                    </span>
                  </div>
                  <Button
                    onClick={() => playTheme(index)}
                    size="lg"
                    className={`rounded-full w-16 h-16 ${
                      currentPlaying === index 
                        ? 'bg-white text-black hover:bg-gray-200' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    } transition-all duration-300`}
                  >
                    {currentPlaying === index ? <Pause size={24} /> : <Play size={24} />}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <Volume2 className="text-white" size={20} />
            <span className="font-retro text-white">
              Best experienced with headphones 🎧
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeSongJukebox;
