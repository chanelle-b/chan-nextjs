"use client";
import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

// Remember to import Image from 'next/image' at the top of your file

//const name = "Hello, I'm Chanelle!";

const HeaderSection = () => {
  useEffect(() => {
    AOS.init({
      // settings here, e.g., duration: 1200,
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []); // Empty array ensures effect is only run on mount and unmount
  return (
    <section className="flex justify-center items-start py-10 lg:mr-40 mt-8 mr-20 h-screen">
      {" "}
      {/* Ensures the section takes full viewport height and centers content */}
      <div
        aos-animate
        aos-init
      >
        {" "}
        {/* Centers the grid and sets a max width */}
        <div className="col-span-10 sm:col-span-10 lg:col-span-8 xl:col-span-7">
          {" "}
          {/* Adjusts the column span for different screen sizes */}
          <div data-aos="fade-down" data-aos-delay="300"className="text-left">
            <h1 className="greeting text-white mt-7 mb-3 text-2xl">
              Hi, my name is
            </h1>
          </div>
          <div data-aos-once="true">
            <h1 data-aos="fade-down" data-aos-delay="750" className="mb-4 text-white text-5xl sm:text-7xl lg:text-7xl font-extrabold">
              <span className="whitespace-nowrap">Chanelle Blackwood.</span>
            </h1>
          </div>
          <h1 data-aos="fade-down" data-aos-delay="1200" className="text-white mb-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            I&apos;m a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800  via-blue-400 to-pink-500 ">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Learner.",
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Student.",
                  2000,
                  "Developer.",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p data-aos="fade-down" data-aos-delay="1600" className="text-white text-base sm:text-sm mb-6 lg:text-sm">
            Computer Programming student at{" "}
            <a
              href="https://www.conestogac.on.ca"
              className="link hover:underline "
            >
              Conestoga College,
            </a>{" "}
            interested in full-stack development. <br />
            Currently looking for{" "}
            <span className="link">Summer 2024 internships.</span>
          </p>
          <div data-aos="fade-up" data-aos-delay="2000" >
            {/* Hire Me Button */}
            <button className=" mr-5 transition-transform duration-500 hover:scale-110 font-mono relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-800 via-blue-400 to-pink-500 group-hover:from-pink-500 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-10 py-4 transition-all ease-in duration-100 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0">
                Hire Me
              </span>
            </button>

            {/* Download CV Button */}
            <button className="transition-transform duration-500 hover:scale-110 font-mono relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-800 via-blue-400 to-pink-500 group-hover:from-pink-500 group-hover:to-yellow-500 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-10 py-4 transition-all ease-in duration-100 bg-white dark:bg-transparent rounded-md group-hover:bg-opacity-0">
                Download CV
              </span>
            </button>
          </div>
        </div>
        {/* This div is for the circle and image, now correctly placed within the grid */}
      </div>
    </section>
  );
};

export default HeaderSection;
