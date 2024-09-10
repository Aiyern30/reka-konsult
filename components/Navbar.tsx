"use client";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between px-4 lg:px-10 py-4 bg-white shadow-lg sticky top-0 z-50 text-black">
      <a href="/" className="text-[20px] lg:text-[32px] font-semibold">
        <Image src={"/rk logo.jpg"} alt="RK Logo" width={150} height={150} />
      </a>

      {/* Mobile Menu Button */}
      <button
        className="block lg:hidden text-xl px-4 py-2 hover:outline-none"
        onClick={toggleMenu}
      >
        <FiMenu />
      </button>

      {/* Menu Items */}
      <div
        className={`w-full lg:flex lg:items-center lg:w-auto ${
          isMenuOpen ? "block" : "hidden"
        } mt-6 lg:mt-0`}
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-14 space-y-4 lg:space-y-0 text-[18px] lg:items-center">
          <li className="hover:text-blue-500 hover:font-semibold">
            <a href="/Directors">Directors</a>
          </li>
          <li className="hover:text-blue-500 hover:font-semibold">
            <a href="/Corporate-Information">Corporate Information</a>
          </li>
          <li className="hover:text-blue-500 hover:font-semibold">
            <a href="/Projects">Projects</a>
          </li>
          <li className="hover:text-blue-500 hover:font-semibold">
            <a href="/ContactUs">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
