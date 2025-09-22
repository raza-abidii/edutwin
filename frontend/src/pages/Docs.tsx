import Layout from "@/components/shared/Layout";

const Docs = () => {
  return (
    <Layout>
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Documentation</h1>
          <div className="prose prose-lg max-w-none">
            <h2>Getting Started</h2>
            <p>Welcome to EduTwin! Follow these steps to get started with your AI learning companion.</p>
            
            <h3>1. Upload Your Materials</h3>
            <p>Start by uploading your syllabus, lecture notes, or any study materials.</p>
            
            <h3>2. Let the Agents Process</h3>
            <p>Our AI agents will automatically process your content and create personalized study resources.</p>
            
            <h3>FAQ</h3>
            <h4>How does EduTwin work?</h4>
            <p>EduTwin uses advanced AI to transform your study materials into interactive learning experiences.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Docs;