import Layout from "@/components/shared/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  FileText, 
  Code, 
  Calendar, 
  GraduationCap,
  ArrowRight,
  Sparkles
} from "lucide-react";

const Agents = () => {
  const agents = [
    {
      id: "studyagent",
      icon: BookOpen,
      title: "StudyAgent",
      subtitle: "Your Personalized Study Companion",
      description: "Creates custom quizzes, interactive flashcards, and comprehensive study summaries from your course materials. Adapts to your learning style and tracks your progress.",
      features: ["Smart Quizzes", "Interactive Flashcards", "Study Summaries", "Progress Tracking"],
      color: "from-blue-500 to-purple-600",
      link: "/agents/studyagent"
    },
    {
      id: "notesagent", 
      icon: FileText,
      title: "NotesAgent",
      subtitle: "Transform Content into Knowledge",
      description: "Converts PDFs, lecture recordings, and documents into structured, searchable notes. Highlights key concepts and creates visual mind maps automatically.",
      features: ["PDF Processing", "Audio Transcription", "Mind Maps", "Smart Highlighting"],
      color: "from-green-500 to-teal-600",
      link: "/agents/notesagent"
    },
    {
      id: "codeagent",
      icon: Code,
      title: "CodeAgent", 
      subtitle: "Your Programming Mentor",
      description: "Provides starter code templates, explains complex algorithms, and helps debug your programming assignments with clear, educational feedback.",
      features: ["Code Templates", "Algorithm Explanations", "Debug Assistance", "Best Practices"],
      color: "from-orange-500 to-red-600",
      link: "/agents/codeagent"
    },
    {
      id: "planneragent",
      icon: Calendar,
      title: "PlannerAgent",
      subtitle: "Smart Academic Scheduling",
      description: "Creates optimized study schedules, manages deadlines, and balances your workload across multiple courses. Adapts to your productivity patterns.",
      features: ["Smart Scheduling", "Deadline Management", "Workload Balancing", "Progress Insights"],
      color: "from-purple-500 to-pink-600",
      link: "/agents/planneragent"
    },
    {
      id: "exampredictionagent",
      icon: GraduationCap,
      title: "ExamPredictionAgent",
      subtitle: "Ace Your Exams with Confidence",
      description: "Analyzes past exams and course content to generate realistic practice tests. Predicts likely exam questions and identifies knowledge gaps.",
      features: ["Mock Exams", "Question Prediction", "Gap Analysis", "Performance Analytics"],
      color: "from-indigo-500 to-blue-600",
      link: "/agents/exampredictionagent"
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-br from-background to-muted/20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-primary animate-pulse-glow" />
              <h1 className="text-fluid-lg font-bold animate-fade-in-up">
                Meet Your AI Learning
                <span className="text-gradient"> Agents</span>
              </h1>
            </div>
            <p className="text-fluid-md text-muted-foreground mb-8 animate-fade-in-up" style={{animationDelay: "0.1s"}}>
              Each AI agent is specially trained to excel in different aspects of your learning journey.
              Together, they form your complete academic support system.
            </p>
            <Link to="/demo">
              <Button size="lg" className="gradient-primary text-white hover-lift animate-fade-in-up" style={{animationDelay: "0.2s"}}>
                Try All Agents
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Agents Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {agents.map((agent, index) => (
                <Card key={agent.id} className="glass-card hover-lift transition-smooth animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${agent.color} rounded-xl flex items-center justify-center`}>
                          <agent.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-1">{agent.title}</CardTitle>
                          <CardDescription className="text-sm font-medium text-primary">
                            {agent.subtitle}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base mt-4 leading-relaxed">
                      {agent.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {agent.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Link to={agent.link} className="flex-1">
                        <Button className="w-full gradient-primary text-white hover-scale">
                          Explore {agent.title}
                        </Button>
                      </Link>
                      <Link to={`/demo#${agent.id}`}>
                        <Button variant="outline" className="hover-scale">
                          Try Demo
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Agents Work Better Together</h2>
            <p className="text-lg text-muted-foreground mb-8">
              While each agent excels individually, the real magic happens when they collaborate. 
              NotesAgent feeds processed content to StudyAgent for quiz creation, while PlannerAgent 
              coordinates with ExamPredictionAgent to optimize your study schedule.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="glass-card p-6 text-center">
                <h3 className="font-semibold mb-2">Seamless Integration</h3>
                <p className="text-sm text-muted-foreground">All agents share data intelligently to provide cohesive support</p>
              </div>
              <div className="glass-card p-6 text-center">
                <h3 className="font-semibold mb-2">Unified Dashboard</h3>
                <p className="text-sm text-muted-foreground">Monitor all agent activities from a single, intuitive interface</p>
              </div>
              <div className="glass-card p-6 text-center">
                <h3 className="font-semibold mb-2">Smart Automation</h3>
                <p className="text-sm text-muted-foreground">Agents automatically trigger each other based on your study patterns</p>
              </div>
            </div>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="hover-scale">
                View Dashboard Preview
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Agents;