import React from "react";

// import social data
import { social } from "../data";

const Footer = () => {
  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <div>
                  <a className="text-accent text-base" href={href} key={index}>
                    {icon}
                  </a>
                </div>
              );
            })}
            <div>
              <a href="#" className="font-bold text-xl italic">
                Nazmul <span className="text-accent">Hoque</span>
              </a>
            </div>
          </div>

          <p className="text-paragraph opacity-80 text-[15px]">
            &copy; 2024 Dhaka, Bangladesh. All rights reserved by Nazmul Hoque.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
