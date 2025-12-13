import React from "react";
import "../styles/Header.css";
import { useTranslation } from "react-i18next";


import enFlag from "../assets/flags/en.png";
import frFlag from "../assets/flags/fr.webp";
import deFlag from "../assets/flags/de.png";
import plFlag from "../assets/flags/pl.png";

function Header() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <h1>
        brandon<span className="bold">kuciapski</span>
      </h1>

      {/* Language flags */}
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


