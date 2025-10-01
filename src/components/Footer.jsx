import React from 'react';
import { useLocation } from 'react-router-dom';
// import '../styles/Footer.css';
import fbIcon from '../assets/fb.png';
import igIcon from '../assets/ig.png';
import linkedinIcon from '../assets/linkedin.webp';

function Footer() {
  const location = useLocation();
  const isContactPage = location.pathname === "/Contact"; 

  return (
    <div id="footer-container" className={isContactPage ? "contact-footer" : ""}>
      <footer>
        <p>&copy; 2025. Brandon Kuciapski - Huzarzy.com</p>

        {!isContactPage && ( 
          <div id="media-links">
            <a href="https://www.facebook.com/brandon.kuciapski" target="_blank" rel="noopener noreferrer">
              <img className="sml" src={fbIcon} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/kuciapscy/" target="_blank" rel="noopener noreferrer">
              <img className="sml" src={igIcon} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/kuciapski/" target="_blank" rel="noopener noreferrer">
              <img className="sml" src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        )}
      </footer>
    </div>
  );
}

export default Footer;

