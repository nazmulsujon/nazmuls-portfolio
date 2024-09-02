import React from "react";
import Fade from "react-reveal/Fade";
import Swing from "react-reveal/Swing";

// import contact data
import { contact } from "../data";

const Contact = () => {
  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <Swing>
            <h2 className="section-title ">
              Contact <span className="text-accent">me</span>
            </h2>
          </Swing>
          <p className="subtitle">Don't hasitate to contact me</p>
        </div>

        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <Fade left>
            <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
              {contact.map((item, index) => {
                const { icon, title, subtitle, description } = item;
                return (
                  <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                    <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                      {icon}
                    </div>
                    <div>
                      <h4 className="font-body text-xl mb-1">{title}</h4>
                      <p className="mb-1 text-paragraph">{subtitle}</p>
                      <p className="text-accent font-normal ">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Fade>
          <Fade right>
            <form
              className="space-y-8 w-full max-w-[780px]"
              action="https://formsubmit.co/sujon686500@gmail.com"
              method="POST"
            >
              <div className="flex gap-8">
                <input className="input" type="text" name="name" placeholder="Your name" />
                <input className="input" type="email" name="email" placeholder="Your email" />
              </div>
              <input className="input" type="text" name="subject" placeholder="Subject" />
              <textarea className="textarea" name="message" placeholder="Your message"></textarea>
              <button type="submit" className="btn btn-lg bg-accent hover:bg-secondary-hover">
                Send message
              </button>
            </form>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Contact;
