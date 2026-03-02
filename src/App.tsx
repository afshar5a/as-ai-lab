import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import Framework from "./pages/Framework";
import Research from "./pages/Research";
import TrackDetail from "./pages/TrackDetail";
import About from "./pages/About";
import Demos from "./pages/Demos";
import Writing from "./pages/Writing";
import PostDetail from "./pages/PostDetail";
import Policies from "./pages/Policies";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/framework" element={<Framework />} />
              <Route path="/research" element={<Research />} />
              <Route path="/research/:slug" element={<TrackDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/demos" element={<Demos />} />
              <Route path="/writing" element={<Writing />} />
              <Route path="/writing/:slug" element={<PostDetail />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
