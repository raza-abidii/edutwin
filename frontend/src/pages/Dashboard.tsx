import Layout from "@/components/shared/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, FileText, Code, Calendar, GraduationCap, TrendingUp } from "lucide-react";

const Dashboard = () => {
  return (
    <Layout>
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Welcome back, Alex!</h1>
            <p className="text-muted-foreground">Here's your learning progress overview</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle>Study Progress</CardTitle>
                    <CardDescription>This week's activity</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">85%</div>
                <p className="text-sm text-muted-foreground">Week 12 of 14 completed</p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-warning" />
                  <div>
                    <CardTitle>Quiz Average</CardTitle>
                    <CardDescription>Last 10 quizzes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">78%</div>
                <p className="text-sm text-success">+12% from last month</p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-secondary" />
                  <div>
                    <CardTitle>Next Deadline</CardTitle>
                    <CardDescription>Upcoming assignment</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold">ML Project</div>
                <p className="text-sm text-destructive">Due in 3 days</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">This is a preview of your EduTwin dashboard</p>
            <Link to="/signup">
              <Button className="gradient-primary text-white">Unlock Full Dashboard</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;