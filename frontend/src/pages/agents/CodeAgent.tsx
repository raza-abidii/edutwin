import Layout from "@/components/shared/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Code, 
  Lightbulb, 
  Bug, 
  BookOpen,
  ArrowRight,
  Play,
  CheckCircle,
  Copy
} from "lucide-react";

const CodeAgent = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Smart Templates",
      description: "Get starter code templates for any programming concept or assignment"
    },
    {
      icon: Bug,
      title: "Debug Assistant",
      description: "Identify bugs and get clear explanations on how to fix them"
    },
    {
      icon: BookOpen,
      title: "Concept Explanations",
      description: "Understand complex algorithms with step-by-step breakdowns"
    }
  ];

  const codeExamples = [
    {
      title: "Binary Search Algorithm",
      language: "Python",
      description: "Classic divide-and-conquer search algorithm",
      code: `def binary_search(arr, target):
    """
    Performs binary search on a sorted array
    Time Complexity: O(log n)
    Space Complexity: O(1)
    """
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid  # Found target
        elif arr[mid] < target:
            left = mid + 1  # Search right half
        else:
            right = mid - 1  # Search left half
    
    return -1  # Target not found`,
      explanation: "This implementation divides the search space in half with each iteration, making it very efficient for large sorted arrays."
    },
    {
      title: "React Component Template",
      language: "TypeScript",
      description: "Modern React functional component with hooks",
      code: `import React, { useState, useEffect } from 'react';

interface Props {
  title: string;
  items: string[];
}

const ItemList: React.FC<Props> = ({ title, items }) => {
  const [filteredItems, setFilteredItems] = useState<string[]>(items);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filtered = items.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [items, searchTerm]);

  return (
    <div className="item-list">
      <h2>{title}</h2>
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;`,
      explanation: "A reusable React component demonstrating proper TypeScript typing, state management, and side effects with hooks."
    }
  ];

  const debugExample = {
    buggyCode: `def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n + 1)  # BUG HERE`,
    fixedCode: `def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)  # FIXED`,
    explanation: "The bug was in the recursive call - it should be n-1, not n+1, otherwise it creates infinite recursion."
  };

  return (
    <Layout>
      <div className="bg-gradient-to-br from-background to-muted/20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-fluid-lg font-bold animate-fade-in-up">CodeAgent</h1>
                <p className="text-lg text-primary font-medium">Your Programming Mentor</p>
              </div>
            </div>
            
            <p className="text-fluid-md text-muted-foreground mb-8 animate-fade-in-up" style={{animationDelay: "0.1s"}}>
              CodeAgent is your intelligent programming companion that provides starter code templates, 
              explains complex algorithms, and helps debug your code with clear, educational feedback. 
              Perfect for students learning to code or tackling challenging assignments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: "0.2s"}}>
              <Link to="/demo#codeagent">
                <Button size="lg" className="gradient-primary text-white hover-lift">
                  <Play className="w-5 h-5 mr-2" />
                  Try CodeAgent Demo
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
            <h2 className="text-3xl font-bold text-center mb-12">Coding Made Easier</h2>
            
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

        {/* Code Examples */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Sample Code Templates</h2>
            
            <div className="space-y-8">
              {codeExamples.map((example, index) => (
                <Card key={index} className="glass-card animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">{example.title}</CardTitle>
                        <CardDescription>{example.description}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{example.language}</Badge>
                        <Button size="sm" variant="outline">
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <pre className="whitespace-pre-wrap">{example.code}</pre>
                      </div>
                      <div className="glass-card p-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-warning" />
                          Explanation
                        </h4>
                        <p className="text-muted-foreground">{example.explanation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Debug Example */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Debug Assistant Example</h2>
            
            <Card className="glass-card animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bug className="w-5 h-5 text-destructive" />
                  Bug Detection & Fix
                </CardTitle>
                <CardDescription>
                  CodeAgent identifies the issue and provides a corrected version with explanation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Buggy Code */}
                  <div>
                    <h4 className="font-semibold mb-3 text-destructive">❌ Buggy Code</h4>
                    <div className="bg-destructive/10 border-destructive/20 border rounded-lg p-4 font-mono text-sm">
                      <pre className="whitespace-pre-wrap">{debugExample.buggyCode}</pre>
                    </div>
                  </div>
                  
                  {/* Fixed Code */}
                  <div>
                    <h4 className="font-semibold mb-3 text-success">✅ Fixed Code</h4>
                    <div className="bg-success/10 border-success/20 border rounded-lg p-4 font-mono text-sm">
                      <pre className="whitespace-pre-wrap">{debugExample.fixedCode}</pre>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 glass-card p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-warning" />
                    What was wrong?
                  </h4>
                  <p className="text-muted-foreground">{debugExample.explanation}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Supported Languages */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Supports Popular Languages</h2>
            <p className="text-lg text-muted-foreground mb-8">
              CodeAgent works with the most commonly used programming languages in education and industry.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { lang: "Python", desc: "Data Science & AI" },
                { lang: "JavaScript", desc: "Web Development" },
                { lang: "Java", desc: "Enterprise & Android" },
                { lang: "C++", desc: "Systems Programming" },
                { lang: "React", desc: "Frontend Framework" },
                { lang: "Node.js", desc: "Backend Development" },
                { lang: "SQL", desc: "Database Queries" },
                { lang: "HTML/CSS", desc: "Web Markup & Styling" }
              ].map((item, index) => (
                <div key={item.lang} className="glass-card p-4 hover-lift transition-smooth animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="text-lg font-bold text-primary mb-1">{item.lang}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Integrates with Your Learning</h2>
            <p className="text-lg text-muted-foreground mb-8">
              CodeAgent works alongside other agents to provide comprehensive programming education.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">StudyAgent Quizzes</h3>
                <p className="text-sm text-muted-foreground">
                  Generates coding quizzes based on the concepts you're learning
                </p>
              </div>
              <div className="glass-card p-6">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">NotesAgent Docs</h3>
                <p className="text-sm text-muted-foreground">
                  Creates structured notes from coding tutorials and documentation
                </p>
              </div>
              <div className="glass-card p-6">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Practice Scheduling</h3>
                <p className="text-sm text-muted-foreground">
                  PlannerAgent schedules regular coding practice sessions
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

export default CodeAgent;