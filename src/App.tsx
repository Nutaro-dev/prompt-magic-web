
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects"; // Add the new Projects page
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import Impressum from "./pages/Impressum";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Withdrawal from "./pages/Withdrawal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="projects" element={<Projects />} /> {/* Add this route */}
            <Route path="process" element={<Process />} />
            <Route path="contact" element={<Contact />} />
            <Route path="impressum" element={<Impressum />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="withdrawal" element={<Withdrawal />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
