import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Agents from "./pages/Agents";
import StudyAgent from "./pages/agents/StudyAgent";
import NotesAgent from "./pages/agents/NotesAgent";
import CodeAgent from "./pages/agents/CodeAgent";
import PlannerAgent from "./pages/agents/PlannerAgent";
import ExamPredictionAgent from "./pages/agents/ExamPredictionAgent";
import Demo from "./pages/Demo";
import Pricing from "./pages/Pricing";
import Docs from "./pages/Docs";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/agents/studyagent" element={<StudyAgent />} />
          <Route path="/agents/notesagent" element={<NotesAgent />} />
          <Route path="/agents/codeagent" element={<CodeAgent />} />
          <Route path="/agents/planneragent" element={<PlannerAgent />} />
          <Route path="/agents/exampredictionagent" element={<ExamPredictionAgent />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
