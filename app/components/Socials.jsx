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
      className="hidden lg:flex md:flex text-white fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2 p-4 pr-6 scale-125"
    >
      <div className="social-icons-container">
        <a
          href="#"
          title="github"
          className="transition-transform duration-500 scale-125 hover:scale-150"
        >
          <i className="bi bi-github social-links" aria-hidden="true"></i>
        </a>
        <a
          href="#"
          title="email"
          className="transition-transform duration-500 hover:scale-125"
        >
          <i
            className="bi bi-envelope-open-heart social-links"
            aria-hidden="true"
          ></i>
        </a>
        <a
          href="#"
          title="linkedin"
          className="transition-transform duration-300 hover:scale-125"
        >
          <i className="bi bi-linkedin social-links" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default Socials;
