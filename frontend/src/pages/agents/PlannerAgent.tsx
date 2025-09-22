import Layout from "@/components/shared/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Target, 
  TrendingUp, 
  Clock,
  ArrowRight,
  Play,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const PlannerAgent = () => {
  const features = [
    {
      icon: Target,
      title: "Smart Goal Setting",
      description: "Breaks down complex subjects into manageable daily and weekly goals"
    },
    {
      icon: Clock,
      title: "Adaptive Scheduling",
      description: "Learns your optimal study times and adjusts plans accordingly"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Visual progress indicators keep you motivated and on track"
    }
  ];

  const sampleSchedule = [
    {
      date: "Today",
      tasks: [
        { time: "9:00 AM", subject: "Data Structures", type: "Study", duration: "2h", status: "completed" },
        { time: "11:30 AM", subject: "Break", type: "Break", duration: "30m", status: "completed" },
        { time: "12:00 PM", subject: "Algorithm Practice", type: "Practice", duration: "1h", status: "in-progress" },
        { time: "2:00 PM", subject: "Lunch", type: "Break", duration: "1h", status: "upcoming" },
        { time: "3:00 PM", subject: "Review Notes", type: "Review", duration: "45m", status: "upcoming" }
      ]
    },
    {
      date: "Tomorrow",
      tasks: [
        { time: "9:00 AM", subject: "Machine Learning Quiz", type: "Quiz", duration: "1h", status: "scheduled" },
        { time: "10:30 AM", subject: "Project Work", type: "Project", duration: "2.5h", status: "scheduled" },
        { time: "1:00 PM", subject: "Peer Study Session", type: "Collaboration", duration: "2h", status: "scheduled" }
      ]
    }
  ];

  const upcomingDeadlines = [
    { subject: "Machine Learning Project", due: "3 days", priority: "high", progress: 75 },
    { subject: "Data Structures Assignment", due: "1 week", priority: "medium", progress: 40 },
    { subject: "Statistics Quiz", due: "2 weeks", priority: "low", progress: 0 }
  ];

  const weeklyGoals = [
    { goal: "Complete 5 Algorithm Problems", progress: 80, target: 5, completed: 4 },
    { goal: "Review All Lecture Notes", progress: 60, target: 100, completed: 60 },
    { goal: "Finish ML Project Phase 2", progress: 90, target: 100, completed: 90 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-success';
      case 'in-progress': return 'text-warning';
      case 'upcoming': return 'text-primary';
      case 'scheduled': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-success" />;
      case 'in-progress': return <Clock className="w-4 h-4 text-warning" />;
      case 'upcoming': return <AlertCircle className="w-4 h-4 text-primary" />;
      default: return <Calendar className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'low': return 'bg-success text-success-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <Layout>
      <div className="bg-gradient-to-br from-background to-muted/20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-fluid-lg font-bold animate-fade-in-up">PlannerAgent</h1>
                <p className="text-lg text-primary font-medium">Smart Academic Scheduling</p>
              </div>
            </div>
            
            <p className="text-fluid-md text-muted-foreground mb-8 animate-fade-in-up" style={{animationDelay: "0.1s"}}>
              PlannerAgent revolutionizes how you manage your academic schedule. It creates optimized study plans, 
              tracks deadlines, balances workloads across courses, and adapts to your productivity patterns to 
              maximize learning efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: "0.2s"}}>
              <Link to="/demo#planneragent">
                <Button size="lg" className="gradient-primary text-white hover-lift">
                  <Play className="w-5 h-5 mr-2" />
                  Try PlannerAgent Demo
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
            <h2 className="text-3xl font-bold text-center mb-12">Intelligent Planning Features</h2>
            
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

        {/* Sample Schedule */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Your Personalized Schedule</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {sampleSchedule.map((day, dayIndex) => (
                <Card key={day.date} className="glass-card animate-fade-in-up" style={{animationDelay: `${dayIndex * 0.1}s`}}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      {day.date}
                    </CardTitle>
                    <CardDescription>
                      {day.tasks.length} activities planned
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {day.tasks.map((task, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 glass-card rounded-lg hover-lift transition-smooth">
                          <div className="text-sm font-mono text-muted-foreground w-20">
                            {task.time}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{task.subject}</div>
                            <div className="text-sm text-muted-foreground">{task.duration}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {task.type}
                            </Badge>
                            {getStatusIcon(task.status)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Deadlines & Goals */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Upcoming Deadlines */}
              <Card className="glass-card animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-warning" />
                    Upcoming Deadlines
                  </CardTitle>
                  <CardDescription>Stay on top of important due dates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingDeadlines.map((deadline, index) => (
                      <div key={index} className="glass-card p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{deadline.subject}</h4>
                          <Badge className={getPriorityColor(deadline.priority)}>
                            {deadline.priority}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Due in {deadline.due}</span>
                          <span className="text-primary font-medium">{deadline.progress}% complete</span>
                        </div>
                        <div className="mt-2 w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${deadline.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Weekly Goals */}
              <Card className="glass-card animate-fade-in-up" style={{animationDelay: "0.1s"}}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-success" />
                    Weekly Goals
                  </CardTitle>
                  <CardDescription>Track your learning objectives</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {weeklyGoals.map((goal, index) => (
                      <div key={index} className="glass-card p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{goal.goal}</h4>
                          <span className="text-sm text-primary font-medium">
                            {goal.completed}/{goal.target}
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-success h-2 rounded-full" 
                            style={{ width: `${goal.progress}%` }}
                          ></div>
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          {goal.progress}% complete
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Smart Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Intelligent Adaptation</h2>
            <p className="text-lg text-muted-foreground mb-8">
              PlannerAgent learns from your behavior to create increasingly personalized and effective schedules.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Peak Hours", desc: "Identifies when you're most productive", icon: TrendingUp },
                { title: "Break Optimization", desc: "Schedules breaks at optimal intervals", icon: Clock },
                { title: "Workload Balance", desc: "Distributes tasks evenly across subjects", icon: Target },
                { title: "Deadline Alerts", desc: "Smart notifications before due dates", icon: AlertCircle }
              ].map((feature, index) => (
                <div key={feature.title} className="glass-card p-6 text-center hover-lift transition-smooth animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Coordinates with All Agents</h2>
            <p className="text-lg text-muted-foreground mb-8">
              PlannerAgent works with your other AI agents to create a unified learning experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">StudyAgent Sync</h3>
                <p className="text-sm text-muted-foreground">
                  Schedules quiz sessions and review periods automatically
                </p>
              </div>
              <div className="glass-card p-6">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">NotesAgent Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Plans time for processing and reviewing uploaded materials
                </p>
              </div>
              <div className="glass-card p-6">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Exam Preparation</h3>
                <p className="text-sm text-muted-foreground">
                  Coordinates with ExamPredictionAgent for optimal test prep
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/dashboard">
                <Button size="lg" className="gradient-primary text-white hover-lift">
                  See Full Dashboard
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

export default PlannerAgent;