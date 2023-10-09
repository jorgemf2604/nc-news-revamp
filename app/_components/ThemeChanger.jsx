"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className="flex items-center gap-2 hover:scale-105 hover:text-white hover:font-semibold transition"
    >
      {theme === "dark" ? "Dark mode" : "Light mode"}
      {theme === "dark" ? <MdOutlineDarkMode size={20} /> : <BsSun size={20} />}
    </button>
  );
};

export default ThemeChanger;
