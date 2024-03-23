"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";

const About = () => {
  useEffect(() => {
    AOS.init({
      once: true, 
    });
  }, []);
  return (
    <section className="text-slate-300" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="pl-4 md:pl-16"> {/* Adjust padding left for small screens */}
          <span>
            <h2
              data-aos="fade-down"
              data-aos-delay="0"
              className="about-me text-xl pb-5 sm:text-2xl md:text-3xl lg:text-3xl font-extrabold"
            >
              <span className="number-tags text-3xl font-mono">01.</span> About Me
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-medium text-slate-300 drop-shadow-lg"
            >
              Hello! I&apos;m Chanelle, and I have a passion for developing innovative digital experiences. I&apos;m currently specializing in
              <span className="link"> full-stack development.</span> However, I&apos;m always eager to learn about new technologies and expand my skillset. I&apos;m also focused on gaining more hands-on experience by taking part in internships and working on personal projects.
              <br></br>
              <br></br>
              I&apos;ve currently been focused on further refining my skills with backend technologies, as well as exploring the ever-expanding capabilities of artificial intelligence!
            </p>
          </span>
        </div>
        <div className="relative w-full max-w-sm mx-auto md:max-w-lg lg:max-w-xl">
          <Image
            data-aos="fade-right"
            data-aos-delay="750"
            data-aos-once="true"
            layout="responsive"
            src="/profile_image_bnw.jpg"
            width={500} 
            height={500}
            alt="profile photo"
            className="md:pl-32" // Apply left padding only on medium screens and above
          />
        </div>
      </div>
    </section>
  );
};

export default About;
