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
                <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 ">Nazmul Hoque</h2>
                <p className="mb-4 text-accent">Junior Web Developer</p>
                <hr className="mb-8 opacity-5" />
                <p className="mb-8 text-left">
                  Hello! I'm Nazmul, a web developer with a good level of expertise in Front-End Web Development. I'm
                  currently studying at Alhaz Mokbul Hossain University College a degree BSc Engineering in Computer
                  Science & Engineering. I'm a tech lover and like to learn new things about programming and web
                  development. I'm passionate about MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack web development.
                  <br />
                  <br />I am a hardworking, confident, enthusiastic Web developer and I want to utilize my knowledge and
                  personal skills in Web Development. Also eagerly wants to serve a professional organization to the
                  best of my knowledge with true dedication, hard work, and commitment. I am down to earth honest,
                  confident, fun loving and caring as well.
                </p>
              </div>
              <div className="flex ">
                <a
                  href="#contact"
                  className="btn btn-md bg-accent hover:bg-secondary-hover transition-all mr-10 rounded-3xl"
                >
                  Contact me
                </a>
                <a href="#contact" className="btn btn-md bg-accent hover:bg-secondary-hover transition-all rounded-3xl">
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
