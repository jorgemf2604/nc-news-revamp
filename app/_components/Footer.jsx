"use client";

import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      return currentTheme === "dark" ? "light" : "dark";
    });
  };

  return (
    <footer className="h-30  gap-2 md:h-20 mt-4 bg-black text-white px-8 py-4 flex flex-col justify-center items-center md:flex-row md:justify-between z-20">
      <div className="hover:scale-105 hover:text-white hover:font-semibold transition">
        <Link href="https://github.com/jorgemf2604">
          <div className="flex items-center gap-2">
            <span>
              <BsGithub size={22} />
            </span>
            <span>Jorge Martin-Fernandez</span>
          </div>
        </Link>
      </div>
      <p> 📅 {new Date().toDateString()}</p>
      <div>
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 hover:scale-105 hover:text-white hover:font-semibold transition"
        >
          {theme === "dark" ? "Dark mode" : "Light mode"}
          {theme === "dark" ? (
            <MdOutlineDarkMode size={20} />
          ) : (
            <BsSun size={20} />
          )}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
