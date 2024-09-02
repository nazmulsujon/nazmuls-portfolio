import React from "react";
import Swing from "react-reveal/Swing";

// import components
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-tertiary ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <Swing>
            <h2 className="section-title mb-16">
              My latest <span className="text-accent">projects</span>
            </h2>
          </Swing>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
