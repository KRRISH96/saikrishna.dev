import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaCog, FaGlobeAmericas } from "react-icons/fa";

const THEMES = Object.freeze({
  dark: "dark",
  light: "light",
  system: "system",
  auto: "auto",
});
const THEME_PREFERENCE_KEY = "theme-preference";

function Theme() {
  const defaultTheme = THEMES.auto;
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const themeFromLocalStorage = localStorage.getItem(THEME_PREFERENCE_KEY);

    if (!!themeFromLocalStorage && themeFromLocalStorage !== defaultTheme) {
      setTheme(themeFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    switchTheme(theme);
  }, [theme]);

  const switchTheme = themePreference => {
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
  };

  const ThemeIcon = ({ children, themePreference, ...props }) => (
    <span
      className={`theme-icon ${theme === themePreference ? "active" : ""}`}
      onClick={() => setTheme(themePreference)}
      {...props}
    >
      {children}
    </span>
  );

  return (
    <div className="theme-switch-wrapper">
      <ThemeIcon themePreference={THEMES.light} title="Light Theme">
        <FaSun />
      </ThemeIcon>
      <ThemeIcon themePreference={THEMES.dark} title="Dark Theme">
        <FaMoon />
      </ThemeIcon>
      <ThemeIcon themePreference={THEMES.system} title="System Default Theme">
        <FaCog />
      </ThemeIcon>
      <ThemeIcon
        themePreference={THEMES.auto}
        title="Light during Day(7am-7pm) and Dark during Night"
      >
        <FaGlobeAmericas />
      </ThemeIcon>
    </div>
  );
}

export default Theme;
