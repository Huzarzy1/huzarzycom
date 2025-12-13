import React, { useState } from "react";
import "../styles/Header.css";
import { useTranslation } from "react-i18next";

import enFlag from "../assets/flags/en.png";
import frFlag from "../assets/flags/fr.webp";
import deFlag from "../assets/flags/de.png";
import plFlag from "../assets/flags/pl.png";

import sunPng from "../assets/sun.png";
import moonPng from "../assets/moon.png";

function Header() {
  const { i18n } = useTranslation();
  const [theme, setTheme] = useState("light");
  const [animate, setAnimate] = useState("");

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  const handleThemeClick = (newTheme, type) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    setAnimate(type);
    setTimeout(() => setAnimate(""), 800);
  };
  const toggleDarkMode = (mode) => {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
};

  return (
    
    <header className="header">
      <h1>
        <span
          className="clickable-text"
          onClick={() => {
            handleThemeClick("light", "sun"); 
            toggleDarkMode("light");
          }}
        >
          brandon
          {animate === "sun" && (
            <img src={sunPng} alt="sun" className="jump-icon" />
          )}
        </span>
        <span
          className="clickable-text"
          onClick={() => {
            handleThemeClick("dark", "moon");
            toggleDarkMode("dark");
          }}
        >
          <span className="bold">kuciapski</span>
          {animate === "moon" && (
            <img src={moonPng} alt="moon" className="jump-icon" />
          )}
        </span>
      </h1>

      {/* language toggle */}

      <div className="lang-flags">
        <img
          src={enFlag}
          alt="English"
          onClick={() => changeLanguage("en")}
          className={i18n.language === "en" ? "active" : ""}
        />
        <img
          src={frFlag}
          alt="Français"
          onClick={() => changeLanguage("fr")}
          className={i18n.language === "fr" ? "active" : ""}
        />
        <img
          src={deFlag}
          alt="Deutsch"
          onClick={() => changeLanguage("de")}
          className={i18n.language === "de" ? "active" : ""}
        />
        <img
          src={plFlag}
          alt="Polski"
          onClick={() => changeLanguage("pl")}
          className={i18n.language === "pl" ? "active" : ""}
        />
      </div>
    </header>
  );
}

export default Header;
