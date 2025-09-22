import Layout from "@/components/shared/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { 
  Upload, 
  FileText, 
  BookOpen, 
  Code, 
  Calendar, 
  GraduationCap,
  CheckCircle,
  Play,
  Download
} from "lucide-react";

const Demo = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState<any>(null);
  const [quiz, setQuiz] = useState<any[]>([]);
  const [code, setCode] = useState<any>(null);
  const [schedule, setSchedule] = useState<any[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
      setNotes(null);
      setQuiz([]);
      setCode(null);
      setSchedule([]);
    }
  };

  const handleUpload = async () => {
    console.log( "Uploading file:", uploadedFile);
    if (!uploadedFile) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", uploadedFile);

    try {
      // const notesRes = await fetch("http://localhost:8000/notes-agent", {
      //   method: "POST",
      //   body: formData,
      // });
      // const notesData = await notesRes.json();
      // setNotes(notesData.notes);

      // const quizRes = await fetch("http://localhost:8000/quiz-agent", {
      //   method: "POST",
      //   body: formData,
      // });
      // const quizData = await quizRes.json();
      // setQuiz(quizData.quiz);

      // const codeRes = await fetch("http://localhost:8000/code-agent", {
      //   method: "POST",
      //   body: formData,
      // });
      // const codeData = await codeRes.json();
      // setCode(codeData.code);

      const scheduleRes = await fetch("http://localhost:8082/planner-agent", {
        method: "POST",
        body: formData,
      });
      const scheduleData = await scheduleRes.json();
      setSchedule(scheduleData.schedule);

    } catch (error) {
      alert("Error processing file.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="bg-gradient-to-br from-background to-muted/20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-fluid-lg font-bold mb-6 animate-fade-in-up">
              Interactive
              <span className="text-gradient"> Demo</span>
            </h1>
            <p className="text-fluid-md text-muted-foreground mb-8 animate-fade-in-up" style={{animationDelay: "0.1s"}}>
              See EduTwin in action! Upload your syllabus or course materials and watch as our AI agents
              transform them into personalized study resources.
            </p>
          </div>

          {/* Upload Section */}
          <div className="max-w-2xl mx-auto">
            <Card className="glass-card animate-fade-in-up" style={{animationDelay: "0.2s"}}>
              <CardHeader className="text-center">
                <CardTitle>Step 1: Upload Your Course Materials</CardTitle>
                <CardDescription>
                  Upload a syllabus, PDF, or paste course content to get started
                </CardDescription>
              </CardHeader>
              <CardContent>
                {true ? (
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-smooth cursor-pointer">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg font-medium mb-2">Click to upload or drag and drop</p>
                    <p className="text-sm text-muted-foreground">PDF, DOCX, TXT files up to 10MB</p>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.txt"
                      onChange={handleFileChange}
                      className="block mx-auto my-4"
                    />
                    <Button
                      className="mt-4 gradient-primary text-white"
                      onClick={handleUpload}
                      disabled={loading}
                    >
                      {loading ? "Uploading..." : "Upload & Process"}
                    </Button>
                  </div>
                ) : (
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">File Uploaded Successfully!</h3>
                    <p className="text-muted-foreground mb-4">
                      Processing: "{uploadedFile.name}"
                    </p>
                    <Badge variant="secondary" className="text-success">✓ Processed by all agents</Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Demo Results */}
        {uploadedFile && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Your AI Agents at Work</h2>
                <p className="text-lg text-muted-foreground">
                  See how each agent processes your materials differently
                </p>
              </div>

              <Tabs value="notes" onValueChange={() => {}} className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="notes" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Notes
                  </TabsTrigger>
                  <TabsTrigger value="quiz" className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Quiz
                  </TabsTrigger>
                  <TabsTrigger value="code" className="flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Code
                  </TabsTrigger>
                  <TabsTrigger value="schedule" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Schedule
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="notes" className="animate-fade-in-up">
                  <Card className="glass-card">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>NotesAgent Results</CardTitle>
                          <CardDescription>Structured notes from your syllabus</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold">Introduction to Algorithms - Week 1</h3>
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Export
                          </Button>
                        </div>
                        
                        {notes?.sections?.map((section: any, index: number) => (
                          <div key={index} className="border-l-4 border-primary pl-4">
                            <h4 className="font-semibold text-lg mb-2">{section.title}</h4>
                            <p className="text-muted-foreground mb-3">{section.content}</p>
                            <div className="flex flex-wrap gap-2">
                              {section.keyPoints?.map((point: string, i: number) => (
                                <Badge key={i} variant="secondary">{point}</Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="quiz" className="animate-fade-in-up">
                  <Card className="glass-card">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>StudyAgent Quiz</CardTitle>
                          <CardDescription>Auto-generated questions from your content</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {quiz?.map((q: any, index: number) => (
                          <div key={index} className="glass-card p-4">
                            <h4 className="font-semibold mb-4">Question {index + 1}: {q.question}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {q.options?.map((option: string, i: number) => (
                                <Button 
                                  key={i} 
                                  variant={i === q.correct ? "default" : "outline"} 
                                  className={`text-left justify-start ${i === q.correct ? "gradient-primary text-white" : ""}`}
                                >
                                  {String.fromCharCode(65 + i)}. {option}
                                </Button>
                              ))}
                            </div>
                          </div>
                        ))}
                        <div className="text-center">
                          <Button className="gradient-primary text-white">
                            <Play className="w-4 h-4 mr-2" />
                            Start Full Quiz (10 questions)
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="code" className="animate-fade-in-up">
                  <Card className="glass-card">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                          <Code className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>CodeAgent Example</CardTitle>
                          <CardDescription>Code templates and explanations</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold">{code?.title}</h3>
                          <Badge variant="secondary">{code?.language}</Badge>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                          <pre>{code?.code}</pre>
                        </div>
                        <div className="glass-card p-4">
                          <h4 className="font-semibold mb-2">Explanation:</h4>
                          <p className="text-muted-foreground">{code?.explanation}</p>
                        </div>
                        <Button className="gradient-primary text-white">
                          <Play className="w-4 h-4 mr-2" />
                          Run Code Example
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="schedule" className="animate-fade-in-up">
                  <Card className="glass-card">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>PlannerAgent Schedule</CardTitle>
                          <CardDescription>Optimized study plan for today</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {(schedule.length > 0 ? schedule : []).map((item, index) => (
                          <div key={index} className="flex items-center gap-4 p-3 glass-card rounded-lg">
                            <div className="text-sm font-mono text-muted-foreground w-20">
                              {item.time}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">{item.subject}</div>
                              <div className="text-sm text-muted-foreground">{item.duration}</div>
                            </div>
                            <Badge variant={
                              item.type === 'study' ? 'default' : 
                              item.type === 'practice' ? 'secondary' : 
                              'outline'
                            }>
                              {item.type}
                            </Badge>
                          </div>
                        ))}
                      </div>
                      <div className="text-center mt-6">
                        <Button className="gradient-primary text-white">
                          <Calendar className="w-4 h-4 mr-2" />
                          View Full Week Schedule
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Full Power?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              This demo shows just a glimpse. Get access to all agents, unlimited uploads, 
              and advanced features with your free account.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="gradient-primary text-white hover-lift">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/agents">
                <Button size="lg" variant="outline" className="hover-scale">
                  Learn About Agents
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Demo;