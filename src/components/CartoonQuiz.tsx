
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const quizQuestions = [
  {
    question: "Which cartoon featured a boy genius with a secret laboratory?",
    options: ["Johnny Bravo", "Dexter's Laboratory", "Ed, Edd n Eddy", "Courage the Cowardly Dog"],
    correct: 1,
    image: "/images/dexter.jpg"
  },
  {
    question: "What were the Powerpuff Girls made of?",
    options: ["Sugar, spice, and everything nice", "Love, hope, and dreams", "Magic, wonder, and joy", "Courage, strength, and wisdom"],
    correct: 0,
    image: "/images/powerpuff.jpg"
  },
  {
    question: "What was Scooby-Doo's favorite snack?",
    options: ["Pizza", "Hamburgers", "Scooby Snacks", "Ice cream"],
    correct: 2,
    image: "/images/scooby.jpg"
  },
  {
    question: "Johnny Bravo was known for saying:",
    options: ["Cowabunga!", "Do the monkey!", "What's up, doc?", "I am weasel!"],
    correct: 1,
    image: "/images/johnny.jpg"
  }
];

const CartoonQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setQuizCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage === 100) return "🏆 Perfect! You're a true 90s cartoon master!";
    if (percentage >= 75) return "🌟 Excellent! You definitely grew up in the 90s!";
    if (percentage >= 50) return "👍 Not bad! You remember some classics!";
    return "📺 Time to rewatch some 90s cartoons!";
  };

  if (quizCompleted) {
    return (
      <section className="py-20 px-4 bg-gradient-to-r from-pink-100 via-yellow-100 to-green-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cartoon text-5xl md:text-6xl text-purple-800 mb-8">
            🎉 Quiz Complete!
          </h2>
          <Card className="p-8 bg-white/90 backdrop-blur-sm border-4 border-purple-300">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="font-cartoon text-3xl text-purple-700 mb-4">
              Your Score: {score}/{quizQuestions.length}
            </h3>
            <p className="font-retro text-xl text-purple-600 mb-6">
              {getScoreMessage()}
            </p>
            <Button 
              onClick={resetQuiz}
              className="font-pixel text-lg px-8 py-4 bg-gradient-to-r from-hot-pink to-neon-cyan text-white hover:scale-105 transform transition-all duration-300"
            >
              Take Quiz Again
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-pink-100 via-yellow-100 to-green-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-cartoon text-5xl md:text-6xl text-purple-800 mb-4">
            🧠 90s Cartoon Quiz
          </h2>
          <p className="font-retro text-xl text-purple-600">
            Test your knowledge of classic 90s cartoons!
          </p>
          <div className="mt-4">
            <span className="font-pixel text-lg text-purple-700">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
          </div>
        </div>

        <Card className="p-8 bg-white/90 backdrop-blur-sm border-4 border-purple-300 hover:shadow-2xl transition-all duration-300">
          <CardHeader className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-hot-pink">
              <img 
                src={quizQuestions[currentQuestion].image} 
                alt="Cartoon character"
                className="w-full h-full object-cover"
              />
            </div>
            <CardTitle className="font-cartoon text-2xl text-purple-700">
              {quizQuestions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswer === index ? "default" : "outline"}
                  className={`p-4 text-left font-retro text-lg transition-all duration-300 ${
                    selectedAnswer === index 
                      ? 'bg-gradient-to-r from-hot-pink to-neon-cyan text-white scale-105' 
                      : 'hover:scale-105 hover:bg-purple-50'
                  } ${
                    showResult && index === quizQuestions[currentQuestion].correct
                      ? 'bg-green-500 text-white border-green-600'
                      : showResult && selectedAnswer === index && index !== quizQuestions[currentQuestion].correct
                      ? 'bg-red-500 text-white border-red-600'
                      : ''
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                >
                  {option}
                </Button>
              ))}
            </div>

            {selectedAnswer !== null && !showResult && (
              <div className="text-center">
                <Button 
                  onClick={handleNextQuestion}
                  className="font-pixel text-lg px-8 py-3 bg-gradient-to-r from-electric-yellow to-neon-cyan text-purple-800 hover:scale-105 transform transition-all duration-300"
                >
                  {currentQuestion + 1 === quizQuestions.length ? 'Finish Quiz' : 'Next Question'}
                </Button>
              </div>
            )}

            {showResult && !quizCompleted && (
              <div className="text-center mt-4">
                <p className="font-retro text-lg mb-4">
                  {selectedAnswer === quizQuestions[currentQuestion].correct 
                    ? "🎉 Correct!" 
                    : "❌ Wrong answer!"}
                </p>
                <Button 
                  onClick={() => {
                    if (currentQuestion + 1 < quizQuestions.length) {
                      setCurrentQuestion(currentQuestion + 1);
                      setSelectedAnswer(null);
                      setShowResult(false);
                    } else {
                      setQuizCompleted(true);
                    }
                  }}
                  className="font-pixel text-lg px-8 py-3 bg-gradient-to-r from-electric-yellow to-neon-cyan text-purple-800 hover:scale-105 transform transition-all duration-300"
                >
                  {currentQuestion + 1 === quizQuestions.length ? 'See Results' : 'Next Question'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CartoonQuiz;
