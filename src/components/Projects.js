import React from "react";

// import data
import { projectsData } from "../data";

// import components
import Project from "./Project";

const Projects = () => {
  return (
    <div>
      {/* projects */}
      <section className="grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
        {projectsData.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
