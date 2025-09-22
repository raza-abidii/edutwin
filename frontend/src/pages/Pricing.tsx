import Layout from "@/components/shared/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: ["5 document uploads/month", "Basic quiz generation", "Simple note processing", "Email support"],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "For serious students",
      features: ["Unlimited uploads", "All AI agents", "Advanced analytics", "Priority support", "Export features", "Collaboration tools"],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Classroom",
      price: "$99",
      period: "per month",
      description: "For educators and institutions",
      features: ["Everything in Pro", "Up to 100 students", "Teacher dashboard", "Progress tracking", "Custom integrations", "Dedicated support"],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-br from-background to-muted/20">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-fluid-lg font-bold mb-6">
              Choose Your <span className="text-gradient">Learning Plan</span>
            </h1>
            <p className="text-fluid-md text-muted-foreground mb-12">
              Start free and upgrade as your learning needs grow
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card key={plan.name} className={`glass-card hover-lift transition-smooth ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                  <CardHeader className="text-center">
                    {plan.popular && <Badge className="mb-2 gradient-primary text-white">Most Popular</Badge>}
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold">{plan.price}<span className="text-lg font-normal text-muted-foreground">/{plan.period}</span></div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/signup">
                      <Button className={`w-full ${plan.popular ? 'gradient-primary text-white' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                        {plan.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Pricing;