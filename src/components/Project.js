import React from "react";
import Slide from "react-reveal/Slide";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Project = ({ item }) => {
  const { name, image, subtitle, description, live_site, github } = item;
  return (
    <Slide bottom>
      <div key={item.id} className="flex flex-col items-center text-center">
        <div className="mb-8">
          <PhotoProvider>
            <PhotoView src={image}>
              <img src={image} alt="" className="w-96 h-96 rounded-xl" />
            </PhotoView>
          </PhotoProvider>
        </div>

        <h3 className="text-2xl font-semibold capitalize mb-3">{name}</h3>
        <p className="capitalize text-accent text-sm mb-3">{subtitle}</p>
        <p className="text-base">{description}</p>
        <div className="flex mt-3">
          <a
            href={`${github}`}
            className="btn btn-md bg-accent hover:bg-secondary-hover transition-all mr-10 rounded-3xl"
          >
            GitHub
          </a>
          <a
            href={`${live_site}`}
            className="btn btn-md bg-accent hover:bg-secondary-hover transition-all rounded-3xl"
          >
            Live Site
          </a>
        </div>
      </div>
    </Slide>
  );
};

export default Project;
