import React from "react";
import Swing from "react-reveal/Swing";
import Fade from "react-reveal/Fade";

// import img
import devCartoon from "../assets/img/dev-cartoon.png";

const About = () => {
  return (
    <section className="section bg-tertiary" id="about">
      <Swing>
        <h2 className="text text-4xl font-bold text-center mb-16">
          About <span className="text-accent">Me</span>{" "}
        </h2>
      </Swing>
      <div className="container mx-auto">
        <div className="flex flex-col items-center xl:flex-row gap-24">
          <Fade left>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex flex-col">
                <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 ">
                  Nazmul Hoque
                </h2>
                <p className="mb-4 text-accent">Junior Web Developer</p>
                <hr className="mb-8 opacity-5" />
                <p className="mb-8 text-left text-balance">
                  Hello! I'm Nazmul, a web developer with nearly one year of
                  professional experience in Front-End Development. I have
                  worked as a Frontend Engineer Intern at Expatal and as a MERN
                  Stack Developer at Bright Future. Currently, I am working as a
                  Frontend Developer at Kalbela.
                  <br />
                  I'm pursuing a BSc in Computer Science & Engineering at Alhaz
                  Mokbul Hossain University College. I am passionate about
                  learning new technologies and staying updated with the latest
                  advancements in programming and web development.
                  <br />I consider myself a dedicated, enthusiastic, and
                  hard-working web developer, eager to leverage my knowledge and
                  skills to contribute to innovative projects. With a strong
                  commitment to delivering high-quality results, I strive to
                  bring value through my work. I am also known for being honest,
                  confident, and a team player, with a strong desire to grow
                  professionally.
                </p>
              </div>
              <div className="flex ">
                <a
                  href="#contact"
                  className="btn btn-md bg-accent hover:bg-secondary-hover transition-all mr-10 rounded-3xl"
                >
                  Contact me
                </a>
                <a
                  href="#contact"
                  className="btn btn-md bg-accent hover:bg-secondary-hover transition-all rounded-3xl"
                >
                  GitHub
                </a>
              </div>
            </div>
          </Fade>

          <Fade right>
            <img
              className="object-cover w-80 h-80 md:w-96 md:h-96 md:mx-auto lg:mx-0 rounded-full"
              src={devCartoon}
              alt=""
            />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
