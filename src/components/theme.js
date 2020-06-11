import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaCog, FaGlobeAmericas } from "react-icons/fa";
import { THEME_PREFERENCE_KEY, THEMES } from "../helpers/constants";
import { isDayTime } from "../helpers/utils";

function Theme() {
  const defaultTheme =
    localStorage.getItem(THEME_PREFERENCE_KEY) || THEMES.auto;
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    switchTheme(theme);
  }, [theme]);

  const switchTheme = themePreference => {
    let themeToApply = themePreference;

    if (themePreference === THEMES.auto) {
      themeToApply = isDayTime() ? THEMES.light : THEMES.dark;
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
