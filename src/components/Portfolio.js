import React from "react";
import { Bounce } from "react-reveal";

// import components
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-tertiary ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <Bounce top>
            <h2 className="section-title mb-16">
              My latest <span className="text-accent">projects</span>
            </h2>
          </Bounce>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
