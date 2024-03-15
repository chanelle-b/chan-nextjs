import React from "react";
import Image from "next/image"; // Ensure this import is correctly capitalized

const About = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          {/* Use the Image component correctly here */}
          <Image
            src="/laptop_portfolio.png" // Assuming the image is in the public directory, the path should start with a slash
            width={500}
            height={500}
            alt="laptop_portflio"
          />
          <div>
            <h2>About Me</h2>
            <p>**Description goes here**</p>
          </div>
        </div>
    </section>
  );
};

export default About;
