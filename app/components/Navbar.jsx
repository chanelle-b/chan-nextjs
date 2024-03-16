// Directs Next.js to only use client-side rendering for this component.
"use client";

// Import necessary modules and components.
import Link from "next/link"; // For client-side navigation between pages.
import React, { useState } from "react"; // React core and useState hook for managing state.
import NavLink from "./NavLink"; // Custom NavLink component for individual nav items.
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // Icons for the mobile menu toggle.
import MenuOverlay from "./MenuOverlay"; // Custom component for displaying the mobile menu overlay.
import Image from "next/image";

// Array of objects representing navigation links with title and path properties.
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
    class: "nav-item"
  },
  {
    number: "03. ",
    title: "Contact",
    path: "#contact",
    class: "nav-item",
    
  },
];

// Navbar component definition.
const Navbar = () => {
  // State hook to manage the visibility of the mobile navigation menu.
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Return JSX for rendering the Navbar component.
  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#000000] bg-opacity-55">
      {/* Container for navbar content, ensuring it's centered and properly padded */}
      <div className="flex container lg:py-5 flex-wrap items-center justify-between mx-auto px-1 py-1">
        {/* Logo linking to the homepage */}
        <Link
          href={"/"}
          className="logo text-2xl md:text-1xl text-white font-semibold transition-transform duration-500 hover:scale-125"
          data-aos="fade-down" data-aos-delay="2000"
        >
          CB.
        </Link>
        {/* Mobile menu toggle button */}
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)} // Toggle menu open
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-white hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" /> {/* Hamburger icon */}
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)} // Toggle menu closed
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-white hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" /> {/* Close icon */}
            </button>
          )}
        </div>
        {/* Navigation links for desktop, hidden on mobile */}
        <div data-aos="fade-down" data-aos-delay="2000" className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item transition-transform duration-500 hover:scale-125">
                <NavLink href={link.path} title={link.title} number={link.number} /> {/* Render navigation link */}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Conditionally render MenuOverlay if navbar is open */}
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
