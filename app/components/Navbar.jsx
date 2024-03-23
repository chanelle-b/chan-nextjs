"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    number: "01. ",
    title: "About",
    path: "#about",
    class: "nav-item",
  },
  {
    number: "02. ",
    title: "Projects",
    path: "#projects",
    class: "nav-item",
  },
  {
    number: "03. ",
    title: "Contact",
    path: "#contact",
    class: "nav-item",
  },
];

const Navbar = () => {
  // visibility of the mobile navigation menu.
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#0b0b0bd0] bg-opacity-55">
      {/* Container for navbar content centered padded */}
      <div className="flex container lg:py-5 flex-wrap items-center justify-between mx-auto px-1 py-1">
        {/* Logo linking to the homepage */}
        <Link
          href={"/"}
          className="logo text-2xl md:text-1xl text-slate-300 font-semibold transition-transform duration-500 hover:scale-125"
        >
          CB.
        </Link>
        {/* Mobile menu toggle button */}
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)} //menu open
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-white hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" /> {/* Hamburger icon */}
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)} //menu closed
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-white hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" /> {/* Close icon */}
            </button>
          )}
        </div>
        {/* Nav links for desktop */}
        <div
          data-aos="fade-down"
          data-aos-delay="2000"
          className="menu hidden md:block md:w-auto"
          id="navbar"
        >
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="nav-item transition-transform duration-500 hover:scale-125"
              >
                {/* Render nav link */}
                <NavLink
                  href={link.path}
                  title={link.title}
                  number={link.number}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* render MenuOverlay if navbar is open */}
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
