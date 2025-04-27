import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
    const [language, setLanguage] = useState("en");

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "en" ? "pl" : "en"));
    };

    const translations = {
        en: {
            home: "Home",
            projects: "Projects",
            contact: "Contact",
            toggle: "🇬🇧 English",
            name: "Brandon Kuciapski"
        },
        pl: {
            home: "Strona Główna",
            projects: "Projekty",
            contact: "Kontakt",
            toggle: "🇵🇱 Polski",
            name: "Brandon Kuciapski"
        },
    };

    return (
        <div className="navbar">
            <div className="leftside">
                <h1>{translations[language].name}</h1>
                <div className="hiddenLinks">
                    <Link to="/">{translations[language].home}</Link>
                    <Link to="/Projects">{translations[language].projects}</Link>
                    <Link to="/Contact">{translations[language].contact}</Link>
                </div>
            </div>

            <div className="rightside">
                <Link to="/">{translations[language].home}</Link>
                <Link to="/Projects">{translations[language].projects}</Link>
                <Link to="/Contact">{translations[language].contact}</Link>

                {/* Language Toggle Button */}
                <button className="lang-btn" onClick={toggleLanguage}>
                    {translations[language].toggle}
                </button>
            </div>
        </div>
    );
}

export default Navbar;
