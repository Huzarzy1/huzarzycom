import React from 'react';
import '../styles/Contact.css';
import arrow from '../assets/arrow.png';


const Contact = () => {
  return (
    <>

    <div className="page-content">
      <div className="welcome-section" id="welcome">
        <h2 className="page-title">Contact</h2>
      </div>

      <div className="content-sections">
        <div className="content-section" id="section1">
          <h3 className="section-title">Socials</h3>
          <div className="content-item">
            <p className="item-description">
              My Socials can be found here on the page navbar.
            </p>
          </div>
          <div className="image-placeholder">
                <img id='arrow' src={arrow} alt="arrow" className="prague-image" />
          </div>
        </div>
 

        {/* Email Section */}
        <div className="content-section" id="section3">
          <h3 className="section-title">E-Mail</h3>
          <div className="content-item">
            <p className="item-description">
                You can also reach out to me via email at <b>bkuciapski1@gmail.com (personal)</b>, or <b>bkuciapski@dal.ca (school)</b>.
            </p>
          </div>
        </div>
          <footer className="footer">
            <p>© 2025 Brandon Kuciapski. huzarzy<span className="bold">com</span></p>
          </footer>
      </div>
    </div>
    </>
  );
};
export default Contact;