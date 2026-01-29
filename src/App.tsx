import { useEffect } from "react";
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
import Ecommerce from "./pages/Ecommerce";
import OeffentlicheEinrichtungen from "./pages/OeffentlicheEinrichtungen";
import Steuerberater from "./pages/Steuerberater";
import Versicherungsmakler from "./pages/Versicherungsmakler";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";

const queryClient = new QueryClient();

// Initialize GA4
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
if (GA_MEASUREMENT_ID) {
  ReactGA.initialize(GA_MEASUREMENT_ID);
}

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AnalyticsTracker />
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
          <Route path="/ki-loesungen-ecommerce" element={<Ecommerce />} />
          <Route path="/ki-loesungen-oeffentliche-einrichtungen" element={<OeffentlicheEinrichtungen />} />
          <Route path="/ki-loesungen-steuerberater" element={<Steuerberater />} />
          <Route path="/ki-loesungen-versicherungsmakler" element={<Versicherungsmakler />} />
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
