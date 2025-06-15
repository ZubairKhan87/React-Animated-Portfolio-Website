import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Faizan_Resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Zubair Khan",
        "I'm full stack developer",
        "Python, React developer",
        "I specialize in building scalable web applications and intelligent systems.",
        "With hands-on experience in Python development using Django and Flask, I develop powerful backend solutions.",
        "Also , I work with the MERN stack (MongoDB, Express, React, Node.js) to create responsive and interactive user interfaces.",
        "My expertise also extends to Artificial Intelligence and Machine Learning, where I build smart models for prediction, classification, and automation.",
        "I have strong skills in Natural Language Processing (NLP), enabling me to develop applications like text classifiers, sentiment analyzers, and chatbots.", 
        "I’m also proficient in data analysis and visualization using Python and Power BI, helping businesses make data-driven decisions through insightful dashboards and reports.",



      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="Zubair_Khan_Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;