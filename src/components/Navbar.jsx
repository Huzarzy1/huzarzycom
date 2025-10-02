import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import homePng from "../assets/IconBundles/com.apple.mobileslideshow-large.png";
import contactpng from "../assets/IconBundles/com.apple.MobileAddressBook-large.png";
import projectspng from "../assets/IconBundles/com.apple.AppStore-large.png";
import githubpng from "../assets/github.png";
import linkedinpng from "../assets/IconBundles/com.linkedin.LinkedIn-large.png";
import instapng from "../assets/IconBundles/com.burbn.instagram-large.png";


// Navbar Component (Left Sidebar)
const Navbar = () => {
  const location = useLocation();
  
  const sidebarLinks = [
    { name: "home", icon: homePng, path: "/" },
    { name: "projects", icon: projectspng, path: "/projects" },
    { name: "contact", icon: contactpng, path: "/contact" },
  ];

  const socialLinks = [
    {
      name: "github",
      url: "https://github.com/Huzarzy1",
      icon: githubpng,
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/kuciapski/",
      icon: linkedinpng,
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/kuciapski3/",
      icon: instapng,
    },
  ];

  return (
    <aside className="Navbar">
      <div className="navbar-content">
        <div className="navbar-section">
          <h3 className="navbar-title">navigation</h3>
          <div className="nav-links">
            {sidebarLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${
                  location.pathname === link.path
                    ? "bg-gray-200 text-gray-900"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                <img src={link.icon} alt={`${link.name} icon`} className="nav-icon" />
                {link.name}
              </Link>
            ))}
          </div>

          <h3 className="navbar-title">socials</h3>
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
