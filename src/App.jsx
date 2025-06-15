import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact'
import ProjectDetails from "./components/ProjectDetails";
import Aos from "aos";
import "aos/dist/aos.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main page component that contains all sections
const MainPage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        {/* <Experience /> */}
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/project-details" element={<ProjectDetails />} />
    </Routes>
  );
};

export default App;