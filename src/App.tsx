import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import Index from "./pages/Index";
import Donate from "./pages/Donate";
import Programs from "./pages/Programs";
import ContactUs from "./pages/ContactUs";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import Shop from "./pages/Shop";
import Reports from "./pages/Reports";
import Gallery from "./pages/Gallery";
import LearnMore from "./pages/LearnMore";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsArticle />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/learn-more" element={<LearnMore />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
