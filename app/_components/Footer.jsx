"use client";

import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsCalendar2Date } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";
import ThemeChanger from "./ThemeChanger";

const Footer = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      return currentTheme === "dark" ? "light" : "dark";
    });
  };

  return (
    <footer className="h-32  md:h-20 bg-black text-white px-8 py-4 z-20">
      <div className=" h-full flex flex-col items-center md:flex-row md:align-middle md:justify-between md:items-center max-w-7xl gap-2 mx-auto">
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
        <div className="flex items-center gap-2">
          <BsCalendar2Date size={22} />
          <span>{new Date().toDateString()}</span>
        </div>
        <div>
          <ThemeChanger />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
