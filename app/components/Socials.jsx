import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Socials = () => {
  return (
    <div
      aos
      animate
      aos-init
      data-aos="fade-left"
      data-aos-delay="3000"
      className="md:flex text-white fixed right-0 top-1/2 transform -translate-y-1/2 flex-col items-center space-y-2 p-4 pr-6 scale-125 hidden"
    >
      <div className="social-icons-container">
        <a
          href="#"
          title="github"
          className="transition-transform duration-500 scale-100 hover:scale-125 lg:text-2xl pt-0 p-3"
        >
          <svg
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            class="w-8 hover:text-[#d48bff]"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        <a
          href="#"
          title="email"
          className="transition-transform duration-500 hover:scale-125 text-2xl p-3"
        >
          <i className="bi bi-envelope-open-heart social-links" aria-hidden="true"></i>
        </a>
        <a
          href="#"
          title="linkedin"
          className="transition-transform duration-300 hover:scale-125 text-2xl mb-20 p-3"
        >
          <i className="bi bi-linkedin social-links" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default Socials;
