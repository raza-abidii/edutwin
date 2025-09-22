import Layout from "@/components/shared/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Search, 
  Zap, 
  FileImage,
  ArrowRight,
  Play,
  CheckCircle,
  Download
} from "lucide-react";

const NotesAgent = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Upload PDFs, documents, or audio and get structured notes in seconds"
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "Find any information across all your notes with semantic search"
    },
    {
      icon: FileImage,
      title: "Visual Mind Maps",
      description: "Automatically generates visual representations of complex topics"
    }
  ];

  const sampleNotes = {
    title: "Machine Learning Fundamentals",
    lastProcessed: "2 minutes ago",
    sections: [
      {
        title: "Introduction to Machine Learning",
        content: "Machine Learning is a subset of artificial intelligence that enables computers to learn and make decisions without being explicitly programmed.",
        keyTerms: ["Artificial Intelligence", "Supervised Learning", "Unsupervised Learning"],
        highlights: ["Key concept: Pattern recognition from data"]
      },
      {
        title: "Types of Machine Learning",
        content: "There are three main categories: Supervised Learning (labeled data), Unsupervised Learning (finding patterns), and Reinforcement Learning (learning through rewards).",
        keyTerms: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning"],
        highlights: ["Classification vs Regression", "Clustering algorithms"]
      }
    ],
    mindMap: {
      central: "Machine Learning",
      branches: [
        { topic: "Supervised Learning", subtopics: ["Classification", "Regression"] },
        { topic: "Unsupervised Learning", subtopics: ["Clustering", "Dimensionality Reduction"] },
        { topic: "Reinforcement Learning", subtopics: ["Q-Learning", "Policy Gradients"] }
      ]
    }
  };

  return (
    <Layout>
      <div className="bg-gradient-to-br from-background to-muted/20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-fluid-lg font-bold animate-fade-in-up">NotesAgent</h1>
                <p className="text-lg text-primary font-medium">Transform Content into Knowledge</p>
              </div>
            </div>
            
            <p className="text-fluid-md text-muted-foreground mb-8 animate-fade-in-up" style={{animationDelay: "0.1s"}}>
              NotesAgent revolutionizes how you process information. Upload any document, PDF, or audio recording 
              and watch as it transforms into beautifully structured, searchable notes with key concepts highlighted 
              and mind maps generated automatically.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: "0.2s"}}>
              <Link to="/demo#notesagent">
                <Button size="lg" className="gradient-primary text-white hover-lift">
                  <Play className="w-5 h-5 mr-2" />
                  Try NotesAgent Demo
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
            <h2 className="text-3xl font-bold text-center mb-12">Powerful Note Processing</h2>
            
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

        {/* Sample Output */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Sample Processed Notes</h2>
            
            <Card className="glass-card animate-fade-in-up">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">{sampleNotes.title}</CardTitle>
                    <CardDescription>
                      Processed {sampleNotes.lastProcessed} • 2 pages • 1,247 words
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Structured Notes */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Structured Notes</h3>
                    <div className="space-y-6">
                      {sampleNotes.sections.map((section, index) => (
                        <div key={index} className="border-l-4 border-primary pl-6">
                          <h4 className="text-lg font-semibold mb-2">{section.title}</h4>
                          <p className="text-muted-foreground mb-4 leading-relaxed">{section.content}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-medium text-sm mb-2 text-primary">Key Terms</h5>
                              <div className="flex flex-wrap gap-2">
                                {section.keyTerms.map((term, i) => (
                                  <Badge key={i} variant="secondary">{term}</Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h5 className="font-medium text-sm mb-2 text-success">Highlights</h5>
                              <div className="space-y-1">
                                {section.highlights.map((highlight, i) => (
                                  <div key={i} className="text-sm bg-success/10 text-success px-2 py-1 rounded">
                                    {highlight}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mind Map Preview */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Generated Mind Map</h3>
                    <div className="glass-card p-8">
                      <div className="flex items-center justify-center">
                        <div className="relative">
                          {/* Central Node */}
                          <div className="w-32 h-32 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-center">
                            {sampleNotes.mindMap.central}
                          </div>
                          
                          {/* Branch Nodes */}
                          {sampleNotes.mindMap.branches.map((branch, index) => {
                            const angle = (360 / sampleNotes.mindMap.branches.length) * index;
                            const radius = 200;
                            const x = Math.cos((angle * Math.PI) / 180) * radius;
                            const y = Math.sin((angle * Math.PI) / 180) * radius;
                            
                            return (
                              <div key={index} className="absolute" style={{
                                transform: `translate(${x}px, ${y}px)`,
                                left: '50%',
                                top: '50%',
                                marginLeft: '-60px',
                                marginTop: '-40px'
                              }}>
                                <div className="w-24 h-20 bg-secondary rounded-lg flex items-center justify-center text-center text-sm font-medium p-2">
                                  {branch.topic}
                                </div>
                                {/* Subtopics */}
                                {branch.subtopics.map((subtopic, subIndex) => (
                                  <div key={subIndex} className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2">
                                    <div className="w-20 h-8 bg-muted rounded text-xs flex items-center justify-center">
                                      {subtopic}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Supported Formats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Supports Multiple Input Formats</h2>
            <p className="text-lg text-muted-foreground mb-8">
              NotesAgent can process various types of content to create comprehensive study materials.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { format: "PDF", description: "Documents & Books" },
                { format: "DOCX", description: "Word Documents" },
                { format: "MP3", description: "Audio Lectures" },
                { format: "TXT", description: "Plain Text" },
                { format: "PPT", description: "Presentations" },
                { format: "HTML", description: "Web Content" },
                { format: "MD", description: "Markdown Files" },
                { format: "URL", description: "Web Pages" }
              ].map((item, index) => (
                <div key={item.format} className="glass-card p-4 hover-lift transition-smooth animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="text-lg font-bold text-primary mb-1">{item.format}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/demo">
                <Button size="lg" className="gradient-primary text-white hover-lift">
                  Try File Upload Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Seamlessly Integrated Workflow</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your processed notes automatically feed into other agents for a complete learning experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">StudyAgent Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Automatically creates quizzes and flashcards from your notes
                </p>
              </div>
              <div className="glass-card p-6">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Search & Discovery</h3>
                <p className="text-sm text-muted-foreground">
                  Find information across all your notes instantly
                </p>
              </div>
              <div className="glass-card p-6">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Export Options</h3>
                <p className="text-sm text-muted-foreground">
                  Export to PDF, Word, or share with study groups
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default NotesAgent;