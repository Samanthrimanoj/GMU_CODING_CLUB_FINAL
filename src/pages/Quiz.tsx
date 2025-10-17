import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trophy, RotateCcw } from "lucide-react";
import { toast } from "sonner";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "Which language is primarily used for styling web pages?",
    options: ["JavaScript", "Python", "CSS", "Java"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "What is the correct syntax for a JavaScript function?",
    options: [
      "function myFunction()",
      "def myFunction()",
      "func myFunction()",
      "function: myFunction()",
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: "Which of these is a NoSQL database?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Integration",
      "Application Process Integration",
      "Advanced Program Interface",
    ],
    correctAnswer: 0,
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
    new Array(quizQuestions.length).fill(false)
  );

  const handleAnswerClick = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return;
    
    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === quizQuestions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
      toast.success("Correct! 🎉");
    } else {
      toast.error("Incorrect. Try the next one!");
    }

    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnsweredQuestions(new Array(quizQuestions.length).fill(false));
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (showResult) {
    const percentage = (score / quizQuestions.length) * 100;
    
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="glass-card border-border/50 text-center animate-slide-up">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-6 bg-primary/10 rounded-full">
                  <Trophy className="h-16 w-16 text-primary animate-glow" />
                </div>
              </div>
              <CardTitle className="text-4xl mb-2">Quiz Complete!</CardTitle>
              <CardDescription className="text-xl">
                You scored {score} out of {quizQuestions.length}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="text-6xl font-bold gradient-text">{percentage.toFixed(0)}%</div>
                <Progress value={percentage} className="h-3" />
              </div>
              
              <div className="text-lg">
                {percentage >= 80 && "🌟 Excellent work! You're a coding wizard!"}
                {percentage >= 60 && percentage < 80 && "👍 Good job! Keep learning!"}
                {percentage < 60 && "💪 Keep practicing! You'll improve!"}
              </div>

              <Button onClick={restartQuiz} variant="hero" size="lg" className="glow-primary">
                <RotateCcw className="h-5 w-5 mr-2" />
                Try Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8 animate-slide-up">
          <h1 className="text-5xl font-bold mb-4">
            Coding <span className="gradient-text">Quiz</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Test your programming knowledge
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8 space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
            <span>Score: {score}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="glass-card border-border/50 animate-slide-up">
          <CardHeader>
            <CardTitle className="text-2xl">
              {quizQuestions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {quizQuestions[currentQuestion].options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === quizQuestions[currentQuestion].correctAnswer;
                const showAnswer = answeredQuestions[currentQuestion];
                
                let buttonVariant: "outline" | "default" | "secondary" = "outline";
                if (showAnswer && isCorrect) {
                  buttonVariant = "default";
                } else if (showAnswer && isSelected && !isCorrect) {
                  buttonVariant = "secondary";
                }

                return (
                  <Button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    variant={buttonVariant}
                    className={`h-auto py-4 px-6 text-left justify-start text-base ${
                      showAnswer && isCorrect ? "border-primary" : ""
                    }`}
                    disabled={answeredQuestions[currentQuestion]}
                  >
                    <span className="font-semibold mr-3">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Hint */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          💡 Tip: Take your time and think carefully before answering
        </div>
      </div>
    </div>
  );
}
