import React from "react";
import { Typewriter } from "react-simple-typewriter";
import developerImg from "../assets/img/me.webp";

const Banner = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] md:flex md:flex-row-reverse items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="h-full w-full md:w-1/2 md:mr-10">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <h2 className="my-[8px] text-xl lg:text-xl font-bold ml-10 md:ml-0">
              Hey, I'm <br />{" "}
              <span className="text-6xl my-2  text-accent">
                <Typewriter
                  words={[" Nazmul Hoque 👋"]}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <h2 className="my-2 text-xl font-bold text-white">
              Hey, I'm{" "}
              <span style={{ fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "",
                    "Web Developer",
                    "React Developer",
                    "Next.js Developer",
                    "Typescript Developer",
                    "Self Believer",
                  ]}
                  loop={20}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <div className="flex">
              <button className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all mt-10 mr-10">
                <a
                  href="https://drive.google.com/uc?export=download&id=1F9igog-LXWl4_hmmChyvSYcB9Dgk60BD"
                  download
                >
                  Get resume
                </a>
              </button>

              <a
                href="#contact"
                className="btn btn-md bg-accent  hover:bg-secondary-hover md:btn-lg transition-all mt-10"
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex flex-1 h-full pt-16 w-full md:w-1/2 justify-center">
        <img src={developerImg} alt="developerImg" className="" />
      </div>
    </section>
  );
};

export default Banner;
