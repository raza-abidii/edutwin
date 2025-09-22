import Layout from "@/components/shared/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Brain, BookOpen, FileText, Code, Calendar, GraduationCap, ArrowRight, Play, Sparkles } from "lucide-react";

const Index = () => {
  const agents = [
    { icon: BookOpen, name: "StudyAgent", desc: "Quizzes & Flashcards", link: "/agents/studyagent" },
    { icon: FileText, name: "NotesAgent", desc: "Smart Note Processing", link: "/agents/notesagent" },
    { icon: Code, name: "CodeAgent", desc: "Programming Help", link: "/agents/codeagent" },
    { icon: Calendar, name: "PlannerAgent", desc: "Study Scheduling", link: "/agents/planneragent" },
    { icon: GraduationCap, name: "ExamAgent", desc: "Mock Tests", link: "/agents/exampredictionagent" }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-br from-background to-muted/20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Brain className="w-12 h-12 text-primary animate-pulse-glow" />
              <h1 className="text-fluid-lg font-bold animate-fade-in-up">
                EduTwin —
                <span className="text-gradient"> Your Learning Twin</span>
              </h1>
            </div>
            <p className="text-fluid-md text-muted-foreground mb-8 animate-fade-in-up" style={{animationDelay: "0.1s"}}>
              Transform your study experience with AI-powered agents that create personalized quizzes, 
              process your notes, help with coding, and optimize your learning schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: "0.2s"}}>
              <Link to="/signup">
                <Button size="lg" className="gradient-primary text-white hover-lift">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" variant="outline" className="hover-scale">
                  <Play className="w-5 h-5 mr-2" />
                  See Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Agent Cards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Meet Your AI Learning Agents</h2>
              </div>
              <p className="text-lg text-muted-foreground">Each agent specializes in a different aspect of your learning journey</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agents.map((agent, index) => (
                <Link key={agent.name} to={agent.link}>
                  <Card className="glass-card hover-lift transition-smooth h-full animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                        <agent.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{agent.name}</CardTitle>
                      <CardDescription>{agent.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
              <Link to="/agents">
                <Card className="glass-card hover-lift transition-smooth h-full animate-fade-in-up border-dashed border-2 border-primary/30" style={{animationDelay: "0.5s"}}>
                  <CardContent className="flex items-center justify-center h-full text-center py-8">
                    <div>
                      <ArrowRight className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="font-medium text-primary">Explore All Agents</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
