"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image"; // Ensure this import is correctly capitalized

const About = () => {
  useEffect(() => {
    AOS.init({
      // settings here, e.g., duration: 1200,
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div>
          <span>
            <h2 aos animate aos-init data-aos="fade-down" data-aos-delay="0" className="about-me text-xl pb-5 sm:text-2xl md:text-3xl lg:text-4xl font-extrabold">
              <span className="number-tags text-3xl font-mono">01.</span> About
              Me
            </h2>
            <p aos animate aos-init data-aos="fade-up" data-aos-delay="300" className="font-medium text-slate-200 drop-shadow-lg">
              Hello! I'm Chanelle, and I have a passion for developing
              innovative digital experiences, currently specializing in
              <span> full-stack development.</span> I'm always eager to learn
              about new technologies and expand my skill set, but I'm also
              focused on gaining more hands-on experience by taking part in
              internships and working on personal projects.
              <br></br>
              <br></br>
              I've currently been focued on further refining my skills with
              backend technologies, as well as exploring the ever growing
              capabilities of artificial intelligence!
            </p>
          </span>
        </div>
        <Image
          aos-animate
          aos-init
          data-aos="zoom-in-left"
          data-aos-delay="500"
          data-aos-once="true"
          //layout="responsive"
          src="/profile_image_bnw.jpg"
          width={500}
          height={500}
          alt="profilephoto"
          className="bg-purple-500 shadow-lg shadow-purple-500/50 "
        />
      </div>
    </section>
  );
};

export default About;
