import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="flex justify-center items-center py-10 pl-1 mt-8 h-screen sm:pl-0">
      {/* full viewport height and centers content */}
      <div className="flex flex-col justify-center items-center w-full">
        {/* flexbox to center div */}
        <div data-aos="fade-down" data-aos-delay="300" className="text-center">
          <span className="number-tags text-3xl font-mono">03.</span>
          <h1
            data-aos="fade-down"
            data-aos-delay="750"
            className="text-slate-300 text-5xl sm:text-7xl lg:text-7xl font-bold pt-1"
          >
            Contact
          </h1>
          <div className="">
            <p
              data-aos="fade-down"
              data-aos-delay="750"
              className="text-slate-300 text-base sm:text-sm mb-6 lg:text-lg pt-6 pb-4"
            >
              I&apos;m actively applying for <span className="link">Summer 2024 internships.</span> If you&apos;re in the market for a <br></br> motivated and creative individual, look no further! My skills and qualifications<br></br> may align with what you&apos;re looking for, so drop me a message and let&apos;s chat<br></br> about potential opportunities.
            </p>
            <div data-aos="fade-up" data-aos-delay="1000">
            {/* Say Hi Button */}
            <a href="mailto:cblack4456@gmail.com" className="transition-transform duration-500 hover:scale-110 font-mono relative inline-flex items-center justify-center p-0.5 mb-2 ml-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-800 via-blue-400 to-pink-500 group-hover:from-pink-500 group-hover:to-yellow-500 hover:text-white dark:text-white">
              <span className="relative px-10 py-4 transition-all ease-in duration-100 bg-white dark:bg-[#0e0e0e] rounded-md group-hover:bg-opacity-0">
                Say Hi!
              </span>
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
