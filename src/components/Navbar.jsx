import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

import homePng from "../assets/IconBundles/com.apple.mobileslideshow-large.png";
import contactpng from "../assets/IconBundles/com.apple.MobileAddressBook-large.png";
import projectspng from "../assets/IconBundles/com.apple.AppStore-large.png";
import f1png from "../assets/IconBundles/com.google.Maps-large.png";

import githubpng from "../assets/github.png";
import linkedinpng from "../assets/IconBundles/com.linkedin.LinkedIn-large.png";
import instapng from "../assets/IconBundles/com.burbn.instagram-large.png";

import { useTranslation } from "react-i18next";

const Navbar = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const sidebarLinks = [
    { key: "home", name: "home", icon: homePng, path: "/" },
    { key: "projects", name: "projects", icon: projectspng, path: "/projects" },
    { key: "formula1", name: "formula1", ID: "sublink", icon: f1png, path: "/formula1" },
    { key: "contact", name: "contact", icon: contactpng, path: "/contact" },
  ];

  const socialLinks = [
    { name: "github", url: "https://github.com/Huzarzy1", icon: githubpng },
    { name: "linkedin", url: "https://www.linkedin.com/in/kuciapski/", icon: linkedinpng },
    { name: "instagram", url: "https://www.instagram.com/kuciapski3/", icon: instapng },
  ];

  return (
    <aside className="Navbar">
      <div className="navbar-content">
        <div className="navbar-section">
          <h3 className="navbar-title">{t("nav.navigation")}</h3>

          <div className="nav-links">
            {sidebarLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className={`nav-link ${link.ID === "sublink" ? "nav-sublink" : ""}`}
              >
                <img
                  src={link.icon}
                  alt={`${link.name} icon`}
                  className="nav-icon"
                />
                {t(`nav.${link.name}`)}
              </Link>
            ))}

          </div>

          <h3 className="navbar-title">{t("nav.socials")}</h3>

          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={social.icon}
                  alt={`${social.name} icon`}
                  className="nav-icon"
                />
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Navbar;
