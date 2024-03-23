"use client";
import React, { useEffect } from "react";
import AOS from "aos";

const ProjectSection = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <section
      id="projects"
      className="flex justify-center w-full pl-4 sm:pl-10 md:pt-32 lg:pt-64"
    >
      <div className="pt-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14 lg:gap-14 lg:gap-x-14 px-4 md:pr-8 md:gap-x-52">
        {/* Header */}
        <div className="col-span-full">
          <h2
            data-aos="fade-down"
            data-aos-delay="0"
            className="about-me pt-16 text-xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold text-slate-300"
          >
            <span className="number-tags text-3xl font-mono">02.</span> Projects
          </h2>
        </div>

        <div data-aos="fade-down" data-aos-delay="300" className="pb-4  ">
          <div className="card gradient-border p-0.2 inline-block -mt-8">
            <div className="card2 content border border-purple-400 p-4 text-white hover:text-black bg-black text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-blue-400 to-pink-500">
              <h1 className="project-title text-2xl font-semibold scale-125 drop-shadow-md pb-1 pt-2">
                Chan-Folio
                <br />
              </h1>
              <div class="flex justify-center items-center pr-4">
                <a
                  href="https://chanfolio.vercel.app"
                  class="transition-transform duration-200 scale-150 hover:scale-125 pr-1"
                >
                  <i
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="bi bi-link-45deg w-8 hover:text-[rgb(99,213,255)]"
                  ></i>
                </a>
                <a
                  href="https://github.com/chanelle-b/chan-nextjs"
                  class="transition-transform duration-200 hover:scale-125"
                >
                  <svg
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="w-8 hover:text-[rgb(99,213,255)]"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>

              <p className="text-center text-sm font-light italic pr-2">
                
              </p>
              <div className="text-sm">
                <p className="project-body font-medium mt-4 mb-1 text-sm leading-relaxed">
                  Dynamic web portfolio to display various projects, employing
                  React.js for the UI and Next.js for server-side rendering,
                  optimizing for performance and SEO.
                </p>
              </div>

              <ul className="project-languages flex flex-wrap -mx-1 pl-10">
                <li className="font-mono mx-1 my-1 px-2 py-1 rounded-md bg-opacity-50 bg-white text-black text-xs">
                  React.js
                </li>
                <li className="font-mono mx-1 my-1 px-2 py-1 rounded-md bg-opacity-50 bg-white text-black text-xs">
                  Next.js
                </li>
                <li className="font-mono mx-1 my-1 px-2 py-1 rounded-md bg-opacity-50 bg-white text-black text-xs">
                  TailwindCSS
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div data-aos="fade-down" data-aos-delay="500" className="pb-4">
          <div className="card gradient-border p-0.2 inline-block -mt-8">
            <div className="card2 content border border-purple-400 p-4 text-white hover:text-purple-300">
              <h1 className="project-title text-2xl font-semibold scale-125 drop-shadow-md pb-1 pt-2">
                ScreenSeeker
                <br />
              </h1>
              <div class="flex justify-center items-center">
                <a
                  href="https://github.com/chanelle-b/Screen-Seeker"
                  class="transition-transform duration-200 hover:scale-125"
                >
                  <svg
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="w-8 hover:text-[rgb(255,161,214)]"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>

              <p className="text-center text-sm font-light italic">
                (In Progress)
              </p>
              <div className="text-slate-300 hover:text-purple-300 text-sm">
                <p className="project-body font-medium mt-1 mb-1 text-sm leading-relaxed">
                  Developing a responsive movie exploration application using
                  React.js, integrating TailwindCSS for a mobile-first, adaptive
                  design, enhancing user experience across various devices.
                </p>
              </div>

              <ul className="project-languages flex flex-wrap -mx-1 pl-8">
                <li className="font-mono mx-1 my-1 px-2 py-1 rounded-md bg-opacity-50 bg-[#b37cf1] text-black text-xs">
                  React.js
                </li>
                <li className="font-mono mx-1 my-1 px-2 py-1 rounded-md bg-opacity-50 bg-[#b37cf1] text-black text-xs">
                  JavaScript
                </li>
                <li className="font-mono mx-1 my-1 px-2 py-1 rounded-md bg-opacity-50 bg-[#b37cf1] text-black text-xs">
                  TailwindCSS
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="-mt-8">
          <div data-aos="fade-down" data-aos-delay="700">
            <div className="card gradient-border p-0.2 inline-block">
              <div className="card2 content border border-purple-400 p-4 text-white hover:text-black bg-black text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-blue-400 to-pink-500">
                <h1 className="project-title text-2xl font-semibold scale-125 drop-shadow-md pb-1 pt-2">
                  Party Manager
                  <br />
                </h1>
                <div class="flex justify-center items-center">
                  <a href="https://github.com/chanelle-b/Party-Manager" class="transition-transform duration-200 hover:scale-125">
                    <svg
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="w-8 hover:text-[rgb(99,213,255)]"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
                <p className="text-center text-sm font-light italic">
                  
                </p>
                <div className="text-sm">
                  <p className="project-body font-medium mt-4 mb-1 text-sm leading-relaxed">
                    Developed an integrated party manager system using C#
                    ASP.NETMVC for backend operations, coupled with a bootstrap
                    frontend for aresponsive and intuitive user interface.
                  </p>
                </div>
                <ul className="project-languages flex flex-wrap -mx-1 pl-14">
                  <li className="font-mono mx-1 my-1 px-2 py-1 rounded-md bg-opacity-50 bg-white text-black text-xs">
                    C#
                  </li>
                  <li className="font-mono mx-1 my-1 px-2 py-1 rounded-md bg-opacity-50 bg-white text-black text-xs">
                    ASP.NET MVC
                  </li>
                  <li className="font-mono mx-1 my-1 px-2 py-1 rounded-md bg-opacity-50 bg-white text-black text-xs">
                    Bootstrap
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
            {/* Card 4 */}
        <div
          data-aos="fade-down"
          data-aos-delay="900"
          className="md:col-start-2 lg:col-start2"
        >
          <div className="card gradient-border p-0.2 inline-block -mt-">
            <div className="card2 content border border-purple-400 p-4 text-white hover:text-purple-300">
              <h1 className="project-title text-2xl font-semibold scale-125 drop-shadow-md pb-1 pt-2">
                AI ChatBot
                <br />
              </h1>
              <div class="flex justify-center items-center">
                <a href="https://github.com/chanelle-b/AI-Chatbot" class="transition-transform duration-200 hover:scale-125">
                  <svg
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="w-8 hover:text-[rgb(255,161,214)]"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>

              <p className="text-center text-sm font-light italic">
                (In Progress)
              </p>
              <div className="text-slate-300 hover:text-purple-300 text-sm">
                <p className="project-body font-medium mt-4 mb-1 text-sm leading-relaxed">
                  Currently developing an AI Chatbot
                </p>
              </div>

              <ul className="project-languages flex flex-wrap -mx-1 pl-16">
                <li className="font-mono mx-1 my-1 px-2 py-1 rounded-md bg-opacity-50 bg-[#b37cf1] text-black text-xs">
                  Node.js
                </li>
                <li className="font-mono mx-1 my-1 px-2 py-1 rounded-md bg-opacity-50 bg-[#b37cf1] text-black text-xs">
                  Python
                </li>
                <li className="font-mono mx-1 my-1 px-2 py-1 rounded-md bg-opacity-50 bg-[#b37cf1] text-black text-xs">
                  *****
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
