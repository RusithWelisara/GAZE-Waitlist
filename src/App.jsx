import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import Install from "./pages/Install";
import Demo from "./pages/Demo";
import Trust from "./pages/Trust";
import Waitlist from "./pages/Waitlist";

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/how-it-works" element={<PageWrapper><HowItWorks /></PageWrapper>} />
        <Route path="/features" element={<PageWrapper><Features /></PageWrapper>} />
        <Route path="/demo" element={<PageWrapper><Demo /></PageWrapper>} />
        <Route path="/install" element={<PageWrapper><Install /></PageWrapper>} />
        <Route path="/trust" element={<PageWrapper><Trust /></PageWrapper>} />
        <Route path="/waitlist" element={<PageWrapper><Waitlist /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen text-foreground font-sans selection:bg-violet-500/20">
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
