import React from "react";
import HeroImage from "../assets/heroImage.png";
import { TiArrowRight } from "react-icons/ti";
// React Smooth Scroll
import { Link } from "react-scroll";

const Home = () => {
  return (
    // name is needed for react smooth scroll
    <div
    name="home"
    className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-16">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-16">
            I'm a Full Stack Developer
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            I am passionate about creating dynamic and
            responsive web applications while leveraging my expertise in
            technologies such as ReactJS, NodeJS, Express, and integrating
            RESTful APIs.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <TiArrowRight size={25} className=" ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="px-5 rounded-2xl mx-auto w-2/3 md:w-full mt-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
