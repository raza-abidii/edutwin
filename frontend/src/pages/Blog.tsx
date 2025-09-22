import Layout from "@/components/shared/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      slug: "ai-revolutionizing-education",
      title: "How AI is Revolutionizing Education",
      excerpt: "Discover how artificial intelligence is transforming the way students learn and succeed in their academic journey.",
      date: "March 15, 2024",
      tags: ["AI", "Education", "Technology"]
    },
    {
      slug: "effective-study-techniques",
      title: "10 Effective Study Techniques Backed by Science",
      excerpt: "Learn evidence-based study methods that can significantly improve your learning outcomes and retention.",
      date: "March 10, 2024",
      tags: ["Study Tips", "Science", "Learning"]
    },
    {
      slug: "future-of-personalized-learning",
      title: "The Future of Personalized Learning",
      excerpt: "Explore how personalized learning powered by AI is creating more effective and engaging educational experiences.",
      date: "March 5, 2024",
      tags: ["Personalization", "Future", "AI"]
    }
  ];

  return (
    <Layout>
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          <div className="space-y-8">
            {posts.map((post) => (
              <Card key={post.slug} className="glass-card hover-lift transition-smooth">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <CardTitle className="text-2xl hover:text-primary transition-smooth">{post.title}</CardTitle>
                  </Link>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;