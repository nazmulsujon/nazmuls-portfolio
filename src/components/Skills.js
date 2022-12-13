import React from "react";
import { Bounce } from "react-reveal";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";

// import skill data
import { skills } from "../data";

const Skills = () => {
  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto">
        <Bounce top>
          <h2 className="text text-4xl font-bold text-center mb-16">
            Skills & <span className="text-accent">Tools</span>
          </h2>
        </Bounce>
        <Flip bottom>
          <div className="grid grid-cols-5 gap-y-10">
            {skills.map((skill, index) => {
              return (
                <div className="flex items-center justify-center " key={index}>
                  <img className="lg:h-20 rounded-full" src={skill.image} alt="" />
                </div>
              );
            })}
          </div>
        </Flip>
      </div>
    </section>
  );
};

export default Skills;
