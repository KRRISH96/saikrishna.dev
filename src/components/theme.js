import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaCog, FaGlobeAmericas } from "react-icons/fa";

const THEMES = Object.freeze({
  dark: "dark",
  light: "light",
  system: "system",
  auto: "auto",
});
const THEME_PREFERENCE_KEY = 'theme-preference';

function Theme() {
  const [theme, setTheme] = useState(THEMES.auto);

  useEffect(() => {
    const themeFromLocalStorage = localStorage.getItem(THEME_PREFERENCE_KEY);

    if (!!themeFromLocalStorage && themeFromLocalStorage !== THEMES.auto) {
      setTheme(themeFromLocalStorage)
    }
  }, [])

  useEffect(() => {
    switchTheme(theme)
  }, [theme]);

  const switchTheme = (themePreference) => {
    let themeToApply = themePreference;

    if (themePreference === THEMES.auto) {
      const hourOfTheDay = new Date().getHours();
      // Light mode from 7am to 6:59pm
      themeToApply =
        hourOfTheDay > 6 && hourOfTheDay < 19 ? THEMES.light : THEMES.dark;
    }

    document.body.setAttribute("data-theme", themePreference);
    document.body.setAttribute("id", `theme-${themeToApply}`);
    localStorage.setItem(THEME_PREFERENCE_KEY, themePreference);
  }

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
