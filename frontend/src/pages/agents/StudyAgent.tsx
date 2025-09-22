import Layout from "@/components/shared/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Brain, 
  TrendingUp, 
  Target,
  ArrowRight,
  Play,
  CheckCircle
} from "lucide-react";

const StudyAgent = () => {
  const features = [
    {
      icon: Brain,
      title: "Adaptive Learning",
      description: "Learns from your performance to create personalized study paths"
    },
    {
      icon: Target,
      title: "Smart Quizzing",
      description: "Generates questions that target your knowledge gaps"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Visual analytics show your improvement over time"
    }
  ];

  const sampleQuiz = [
    {
      question: "What is the primary advantage of using dynamic programming?",
      answer: "It avoids redundant calculations by storing previously computed results",
      type: "Short Answer"
    },
    {
      question: "Which sorting algorithm has the best average-case time complexity?",
      options: ["Bubble Sort O(n²)", "Merge Sort O(n log n)", "Quick Sort O(n log n)", "Both B and C"],
      correct: 3,
      type: "Multiple Choice"
    }
  ];

  const flashcards = [
    {
      front: "Big O Notation",
      back: "A mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity"
    },
    {
      front: "Time Complexity",
      back: "The computational complexity that describes the amount of time it takes to run an algorithm"
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-br from-background to-muted/20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-fluid-lg font-bold animate-fade-in-up">StudyAgent</h1>
                <p className="text-lg text-primary font-medium">Your Personalized Study Companion</p>
              </div>
            </div>
            
            <p className="text-fluid-md text-muted-foreground mb-8 animate-fade-in-up" style={{animationDelay: "0.1s"}}>
              StudyAgent transforms your learning materials into interactive quizzes, smart flashcards, 
              and comprehensive study summaries. Using advanced AI, it adapts to your learning style 
              and helps you master any subject more effectively.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: "0.2s"}}>
              <Link to="/demo#studyagent">
                <Button size="lg" className="gradient-primary text-white hover-lift">
                  <Play className="w-5 h-5 mr-2" />
                  Try StudyAgent Demo
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" variant="outline" className="hover-scale">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How StudyAgent Helps You Learn</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <Card key={feature.title} className="glass-card text-center hover-lift transition-smooth animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Quiz */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Sample Generated Quiz</h2>
            
            <div className="space-y-6">
              {sampleQuiz.map((question, index) => (
                <Card key={index} className="glass-card animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Question {index + 1}</CardTitle>
                      <Badge variant="secondary">{question.type}</Badge>
                    </div>
                    <CardDescription className="text-base font-medium text-foreground">
                      {question.question}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {question.type === "Multiple Choice" && "options" in question ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {question.options.map((option, i) => (
                          <Button 
                            key={i} 
                            variant={i === question.correct ? "default" : "outline"}
                            className={`text-left justify-start ${i === question.correct ? "gradient-primary text-white" : ""}`}
                          >
                            {String.fromCharCode(65 + i)}. {option}
                          </Button>
                        ))}
                      </div>
                    ) : (
                      <div className="glass-card p-4">
                        <p className="text-muted-foreground">Sample Answer:</p>
                        <p className="font-medium mt-2">{"answer" in question ? question.answer : ""}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Flashcards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Interactive Flashcards</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {flashcards.map((card, index) => (
                <div key={index} className="group perspective-1000 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="relative w-full h-48 transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                    {/* Front */}
                    <div className="absolute inset-0 glass-card backface-hidden flex items-center justify-center text-center p-6">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{card.front}</h3>
                        <p className="text-sm text-muted-foreground">Click to reveal answer</p>
                      </div>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 glass-card backface-hidden rotate-y-180 flex items-center justify-center text-center p-6">
                      <p className="text-base">{card.back}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Works Seamlessly with Other Agents</h2>
            <p className="text-lg text-muted-foreground mb-8">
              StudyAgent automatically creates quizzes from notes processed by NotesAgent and 
              coordinates with PlannerAgent to schedule optimal study sessions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Auto-Generated Content</h3>
                <p className="text-sm text-muted-foreground">
                  Creates quizzes from any notes or documents you provide
                </p>
              </div>
              <div className="glass-card p-6">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Spaced Repetition</h3>
                <p className="text-sm text-muted-foreground">
                  Optimizes review timing based on memory science
                </p>
              </div>
              <div className="glass-card p-6">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Performance Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Tracks progress and identifies areas needing attention
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/agents">
                <Button size="lg" variant="outline" className="hover-scale">
                  Explore All Agents
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default StudyAgent;