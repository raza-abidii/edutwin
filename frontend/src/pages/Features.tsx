import Layout from "@/components/shared/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  FileText, 
  Code, 
  Calendar, 
  GraduationCap,
  Zap,
  Users,
  Shield,
  Smartphone,
  Globe
} from "lucide-react";

const Features = () => {
  const coreFeatures = [
    {
      icon: BookOpen,
      title: "StudyAgent",
      description: "AI-powered quizzes, flashcards, and study summaries tailored to your curriculum.",
      link: "/agents/studyagent"
    },
    {
      icon: FileText,
      title: "NotesAgent", 
      description: "Transform PDFs and lectures into structured, searchable study notes instantly.",
      link: "/agents/notesagent"
    },
    {
      icon: Code,
      title: "CodeAgent",
      description: "Get starter code templates and clear explanations for programming assignments.",
      link: "/agents/codeagent"
    },
    {
      icon: Calendar,
      title: "PlannerAgent",
      description: "Smart scheduling and deadline management that adapts to your study patterns.",
      link: "/agents/planneragent"
    },
    {
      icon: GraduationCap,
      title: "ExamPredictionAgent",
      description: "Practice with AI-generated mock tests and predicted exam questions.",
      link: "/agents/exampredictionagent"
    }
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get instant responses and real-time study assistance whenever you need it."
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Share study materials and progress with classmates and study groups."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data stays secure with enterprise-grade encryption and privacy controls."
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Access your learning twin on web, mobile, and desktop applications."
    },
    {
      icon: Globe,
      title: "Multi-Language",
      description: "Support for multiple languages and international curriculum standards."
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-br from-background to-muted/20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-fluid-lg font-bold mb-6 animate-fade-in-up">
              Powerful Features for
              <span className="text-gradient"> Smarter Learning</span>
            </h1>
            <p className="text-fluid-md text-muted-foreground mb-8 animate-fade-in-up" style={{animationDelay: "0.1s"}}>
              Discover how EduTwin's AI agents work together to revolutionize your study experience.
              From instant note-taking to personalized exam preparation, we've got every aspect covered.
            </p>
            <Link to="/demo">
              <Button size="lg" className="gradient-primary text-white hover-lift animate-fade-in-up" style={{animationDelay: "0.2s"}}>
                Try Interactive Demo
              </Button>
            </Link>
          </div>
        </section>

        {/* Core Agent Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Your AI Learning Agents</h2>
              <p className="text-lg text-muted-foreground">
                Each agent specializes in a different aspect of your learning journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <Card key={feature.title} className="glass-card hover-lift transition-smooth animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={feature.link}>
                      <Button variant="outline" className="w-full hover-scale">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Built for Modern Students</h2>
              <p className="text-lg text-muted-foreground">
                Everything you need for a seamless learning experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalFeatures.map((feature, index) => (
                <div key={feature.title} className="text-center animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Learning?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of students already using EduTwin to achieve academic success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="gradient-primary text-white hover-lift">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="hover-scale">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Features;