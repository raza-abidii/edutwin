import Layout from "@/components/shared/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Target, 
  TrendingUp, 
  Brain,
  ArrowRight,
  Play,
  CheckCircle,
  AlertTriangle,
  Award
} from "lucide-react";
import React, { useState } from "react";

async function generateExam(syllabus: string) {
  const response = await fetch("http://localhost:8000/generate-exam", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ syllabus }),
  });
  const data = await response.json();
  return data.exam_paper;
}

const ExamPredictionAgent = () => {
  const features = [
    {
      icon: Brain,
      title: "Pattern Analysis",
      description: "Analyzes past exams and course content to identify recurring themes"
    },
    {
      icon: Target,
      title: "Question Prediction",
      description: "Generates likely exam questions based on curriculum emphasis"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Tracks your strengths and identifies areas needing improvement"
    }
  ];

  const mockExam = {
    subject: "Data Structures & Algorithms",
    duration: "2 hours",
    totalQuestions: 10,
    predictedDifficulty: "Medium-Hard",
    questions: [
      {
        number: 1,
        type: "Multiple Choice",
        difficulty: "Easy",
        topic: "Time Complexity",
        question: "What is the time complexity of binary search in a sorted array?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correct: 1,
        likelihood: "95%"
      },
      {
        number: 2,
        type: "Short Answer",
        difficulty: "Medium",
        topic: "Data Structures",
        question: "Explain the difference between a stack and a queue, providing one real-world example for each.",
        likelihood: "85%"
      },
      {
        number: 3,
        type: "Coding Problem",
        difficulty: "Hard",
        topic: "Graph Algorithms",
        question: "Implement Dijkstra's algorithm to find the shortest path in a weighted graph. Analyze its time complexity.",
        likelihood: "70%"
      }
    ]
  };

  const knowledgeGaps = [
    {
      topic: "Dynamic Programming",
      confidence: 45,
      priority: "High",
      lastStudied: "3 days ago",
      suggestedTime: "4 hours"
    },
    {
      topic: "Graph Traversal",
      confidence: 65,
      priority: "Medium",
      lastStudied: "1 day ago", 
      suggestedTime: "2 hours"
    },
    {
      topic: "Sorting Algorithms",
      confidence: 85,
      priority: "Low",
      lastStudied: "Today",
      suggestedTime: "30 minutes"
    }
  ];

  const examStats = {
    totalMocksTaken: 12,
    averageScore: 78,
    improvement: "+15%",
    strongTopics: ["Arrays", "Linked Lists", "Basic Recursion"],
    weakTopics: ["Dynamic Programming", "Graph Theory"]
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return "text-success";
    if (confidence >= 60) return "text-warning";
    return "text-destructive";
  };

  const getConfidenceBackground = (confidence: number) => {
    if (confidence >= 80) return "bg-success";
    if (confidence >= 60) return "bg-warning";
    return "bg-destructive";
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-destructive text-destructive-foreground';
      case 'Medium': return 'bg-warning text-warning-foreground';
      case 'Low': return 'bg-success text-success-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-success text-success-foreground';
      case 'Medium': return 'bg-warning text-warning-foreground';
      case 'Hard': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<any>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://localhost:8000/generate-exam", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setPrediction(data.exam_paper);
    } catch (error) {
      alert("Error uploading file or predicting exam.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="bg-gradient-to-br from-background to-muted/20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-fluid-lg font-bold animate-fade-in-up">ExamPredictionAgent</h1>
                <p className="text-lg text-primary font-medium">Ace Your Exams with Confidence</p>
              </div>
            </div>
            
            <p className="text-fluid-md text-muted-foreground mb-8 animate-fade-in-up" style={{animationDelay: "0.1s"}}>
              ExamPredictionAgent analyzes your course materials, past exams, and learning patterns to generate 
              realistic practice tests and predict likely exam questions. Get ready for your exams with AI-powered 
              insights and targeted preparation strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: "0.2s"}}>
              <Link to="/demo#exampredictionagent">
                <Button size="lg" className="gradient-primary text-white hover-lift">
                  <Play className="w-5 h-5 mr-2" />
                  Try Exam Demo
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
            <h2 className="text-3xl font-bold text-center mb-12">Exam Preparation Intelligence</h2>
            
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

        {/* Mock Exam Preview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Sample Generated Mock Exam</h2>
            
            <Card className="glass-card animate-fade-in-up">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">{mockExam.subject}</CardTitle>
                    <CardDescription>
                      {mockExam.duration} • {mockExam.totalQuestions} questions • {mockExam.predictedDifficulty}
                    </CardDescription>
                  </div>
                  <Button className="gradient-primary text-white">
                    <Play className="w-4 h-4 mr-2" />
                    Start Mock Exam
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mockExam.questions.map((question, index) => (
                    <div key={question.number} className="glass-card p-6 rounded-lg">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-bold text-primary">Q{question.number}.</span>
                          <div className="flex gap-2">
                            <Badge className={getDifficultyColor(question.difficulty)}>
                              {question.difficulty}
                            </Badge>
                            <Badge variant="outline">{question.type}</Badge>
                            <Badge variant="secondary">{question.topic}</Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-success font-medium">{question.likelihood} likely</div>
                        </div>
                      </div>
                      
                      <p className="text-base font-medium mb-4">{question.question}</p>
                      
                      {question.type === "Multiple Choice" && question.options && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {question.options.map((option, i) => (
                            <Button 
                              key={i} 
                              variant="outline" 
                              className="text-left justify-start hover-scale"
                            >
                              {String.fromCharCode(65 + i)}. {option}
                            </Button>
                          ))}
                        </div>
                      )}
                      
                      {question.type === "Short Answer" && (
                        <div className="glass-card p-4 bg-muted/30">
                          <p className="text-sm text-muted-foreground">
                            This question requires a written response. Expected length: 2-3 paragraphs.
                          </p>
                        </div>
                      )}
                      
                      {question.type === "Coding Problem" && (
                        <div className="glass-card p-4 bg-muted/30">
                          <p className="text-sm text-muted-foreground">
                            This is a programming question. You'll have access to a code editor and compiler.
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Knowledge Gaps Analysis */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Knowledge Gaps */}
              <Card className="glass-card animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-warning" />
                    Knowledge Gap Analysis
                  </CardTitle>
                  <CardDescription>Areas that need more attention before your exam</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {knowledgeGaps.map((gap, index) => (
                      <div key={index} className="glass-card p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium">{gap.topic}</h4>
                          <Badge className={getPriorityColor(gap.priority)}>
                            {gap.priority}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Confidence Level</span>
                          <span className={`text-sm font-medium ${getConfidenceColor(gap.confidence)}`}>
                            {gap.confidence}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-muted rounded-full h-2 mb-3">
                          <div 
                            className={`h-2 rounded-full ${getConfidenceBackground(gap.confidence)}`}
                            style={{ width: `${gap.confidence}%` }}
                          ></div>
                        </div>
                        
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Last studied: {gap.lastStudied}</span>
                          <span>Suggested time: {gap.suggestedTime}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Exam Performance Stats */}
              <Card className="glass-card animate-fade-in-up" style={{animationDelay: "0.1s"}}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-success" />
                    Performance Analytics
                  </CardTitle>
                  <CardDescription>Your exam preparation progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Overall Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center glass-card p-4 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{examStats.totalMocksTaken}</div>
                        <div className="text-sm text-muted-foreground">Mock Exams</div>
                      </div>
                      <div className="text-center glass-card p-4 rounded-lg">
                        <div className="text-2xl font-bold text-success">{examStats.averageScore}%</div>
                        <div className="text-sm text-muted-foreground">Average Score</div>
                      </div>
                      <div className="text-center glass-card p-4 rounded-lg">
                        <div className="text-2xl font-bold text-warning">{examStats.improvement}</div>
                        <div className="text-sm text-muted-foreground">Improvement</div>
                      </div>
                    </div>

                    {/* Strong Topics */}
                    <div>
                      <h4 className="font-semibold mb-3 text-success">Strong Topics</h4>
                      <div className="flex flex-wrap gap-2">
                        {examStats.strongTopics.map((topic, index) => (
                          <Badge key={index} className="bg-success/10 text-success border-success/20">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Weak Topics */}
                    <div>
                      <h4 className="font-semibold mb-3 text-destructive">Needs Improvement</h4>
                      <div className="flex flex-wrap gap-2">
                        {examStats.weakTopics.map((topic, index) => (
                          <Badge key={index} className="bg-destructive/10 text-destructive border-destructive/20">
                            <AlertTriangle className="w-3 h-3 mr-1" />
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Complete Exam Preparation System</h2>
            <p className="text-lg text-muted-foreground mb-8">
              ExamPredictionAgent works with all other agents to provide comprehensive exam preparation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">StudyAgent Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Creates targeted practice sessions for weak areas
                </p>
              </div>
              <div className="glass-card p-6">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">PlannerAgent Sync</h3>
                <p className="text-sm text-muted-foreground">
                  Schedules optimal exam preparation timeline
                </p>
              </div>
              <div className="glass-card p-6">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">NotesAgent Content</h3>
                <p className="text-sm text-muted-foreground">
                  Uses your processed notes to generate relevant questions
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/dashboard">
                <Button size="lg" className="gradient-primary text-white hover-lift">
                  View Full Analytics
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

export default ExamPredictionAgent;