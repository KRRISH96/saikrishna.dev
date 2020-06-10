import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaCog, FaGlobeAmericas } from "react-icons/fa";
const THEMES = Object.freeze({
  dark: "theme-dark",
  light: "theme-light",
  system: "theme-system",
  auto: "theme-auto",
});
function Theme() {
  const [theme, setTheme] = useState(THEMES.auto);

  useEffect(() => {
    let themeType = theme;
    if (themeType === THEMES.auto) {
      const hourOfTheDay = new Date().getHours();
      // Light mode from 7am to 6:59pm
      themeType =
        hourOfTheDay > 6 && hourOfTheDay < 19 ? THEMES.light : THEMES.dark;
    }
    document.body.setAttribute("id", themeType);
  }, [theme]);

  return (
    <div className="theme-switch-wrapper">
      <span onClick={() => setTheme(THEMES.light)}>
        <FaSun />
      </span>
      <span onClick={() => setTheme(THEMES.dark)}>
        <FaMoon />
      </span>
      <span onClick={() => setTheme(THEMES.system)}>
        <FaCog />
      </span>
      <span onClick={() => setTheme(THEMES.auto)}>
        <FaGlobeAmericas />
      </span>
    </div>
  );
}

export default Theme;
