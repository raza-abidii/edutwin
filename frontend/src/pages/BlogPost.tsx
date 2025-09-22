import Layout from "@/components/shared/Layout";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <Layout>
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Blog Post: {slug}</h1>
          <div className="prose prose-lg max-w-none">
            <p>This is a sample blog post. In a real application, you would fetch the content based on the slug parameter.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;