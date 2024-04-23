"use client";
import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";


const HeaderSection = () => {
  useEffect(() => {
    AOS.init({

      once: true, 
    });
  }, []); 
  return (
    <section className="flex justify-center items-start sm:px-6 sm:pr-16 py-10 lg:mr-40 mt-8 mr-20 h-screen">
      <div className="w-full max-w-4xl mx-auto">
        {" "}
        <div aos-animate aos-init>
          {" "}
          {/* centers the grid and sets a max width */}
          <div className="col-span-10 sm:col-span-10 lg:col-span-8 xl:col-span-7">
            {" "}
            {/* adjusts for different screen sizes */}
            <div data-aos="fade-down" data-aos-delay="300" className=" lg:text-left md:text-left">
              <h1 className="greeting text-white mt-7 mb-3 text-2xl ">
                Hi, my name is
              </h1>
            </div>
            <div data-aos-once="true">
              <h1
                data-aos="fade-down"
                data-aos-delay="750"
                className="mb-4 text-slate-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold"
              >
                <span className="lg:whitespace-nowrap md:whitespace-nowrap ">Chanelle Blackwood.</span>
              </h1>
            </div>
            <h1
              data-aos="fade-down"
              data-aos-delay="1200"
              className="text-slate-300 mb-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold"
            >
              I&apos;m a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800  via-blue-400 to-pink-500 ">
                <TypeAnimation
                  sequence={[
                    "Learner.",
                    2000, 
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
            <p
              data-aos="fade-down"
              data-aos-delay="1600"
              className="text-slate-300 text-base sm:text-sm mb-6 lg:text-sm"
            >
              Computer Programming student at{" "}
              <a
                href="https://www.conestogac.on.ca"
                className="link hover:underline "
              >
                Conestoga College,
              </a>{" "}
              interested in full-stack development. <br />
              Currently looking for{" "}
              <span className="link">Spring 2025 New Grad opportunities!.</span>
            </p>
            <div data-aos="fade-up" data-aos-delay="2000" className="flex justify-start lg:justify-start gap-4 flex-wrap">
              {/* Hire Me Button */}
              <a href="#contact" className=" mr-5 transition-transform duration-500 hover:scale-110 font-mono relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-800 via-blue-400 to-pink-500 group-hover:from-pink-500 group-hover:to-yellow-500 hover:text-white dark:text-white">
                <span className="relative px-10 py-4 transition-all ease-in duration-100 bg-white dark:bg-[#0e0e0e] rounded-md group-hover:bg-opacity-0">
                  Hire Me
                </span>
              </a>
              {/* Download CV Button */}
              <a href="/resume.pdf" className="transition-transform duration-500 hover:scale-110 font-mono relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-800 via-blue-400 to-pink-500 group-hover:from-pink-500 group-hover:to-yellow-500 hover:text-black dark:text-white">
                <span className="relative px-10 py-4 transition-all ease-in duration-100 bg-white dark:bg-transparent rounded-md group-hover:bg-opacity-0">
                  Download CV
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
