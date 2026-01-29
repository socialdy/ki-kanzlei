import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";
import { CookieBanner } from "./components/CookieBanner";
import Hotels from "./pages/Hotels";
import Hausverwaltung from "./pages/Hausverwaltung";
import Immobilienmakler from "./pages/Immobilienmakler";
import Autohaus from "./pages/Autohaus";
import Handwerker from "./pages/Handwerker";
import Rechtsanwaelte from "./pages/Rechtsanwaelte";
import Aerzte from "./pages/Aerzte";
import Recruiting from "./pages/Recruiting";
import Fitness from "./pages/Fitness";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ki-loesungen-psychotherapeuten" element={<Index />} />
          <Route path="/ki-loesungen-hotels" element={<Hotels />} />
          <Route path="/ki-loesungen-hausverwaltung" element={<Hausverwaltung />} />
          <Route path="/ki-loesungen-immobilienmakler" element={<Immobilienmakler />} />
          <Route path="/ki-loesungen-autohaus" element={<Autohaus />} />
          <Route path="/ki-loesungen-handwerker" element={<Handwerker />} />
          <Route path="/ki-loesungen-rechtsanwaelte" element={<Rechtsanwaelte />} />
          <Route path="/ki-loesungen-aerzte" element={<Aerzte />} />
          <Route path="/ki-loesungen-recruiting" element={<Recruiting />} />
          <Route path="/ki-loesungen-fitness" element={<Fitness />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <CookieBanner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
