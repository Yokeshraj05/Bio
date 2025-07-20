import React from "react";
import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Projects";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, x: -100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 100 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <div className="min-h-screen relative" style={{ cursor: 'none' }}>
      <CustomCursor />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Home />
              </motion.div>
            } 
          />
          <Route 
            path="/about" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <About />
              </motion.div>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Contact />
              </motion.div>
            } 
          />
          <Route 
            path="/project" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Project />
              </motion.div>
            } 
          />
          <Route 
            path="/resume" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Resume />
              </motion.div>
            } 
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;