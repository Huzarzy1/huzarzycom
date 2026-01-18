import React from 'react';
import '../styles/Contact.css';
import arrow from '../assets/arrow.png';
import { useTranslation } from 'react-i18next';


const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="page-content">
      <div className="welcome-section" id="welcome">
        <h2 className="page-title">{t("contact.title")}</h2>
        <p className="page-subtitle">{t("contact.subtitle")}</p>
      </div>

      <div className="content-sections">
        <div className="content-section" id="section1">
          <h3 className="section-title">{t("contact.socials.title")}</h3>
          <div className="content-item">
            <p className="item-description">{t("contact.socials.description1")}</p>
            <p className="item-description">{t("contact.socials.description2")}</p>
          </div>
          <div className="image-placeholder">
            <img id="arrow" src={arrow} alt="Arrow pointing to navbar" className="prague-image" />
          </div>
        </div>

        <div className="content-section" id="section3">
          <h3 className="section-title">{t("contact.email.title")}</h3>
          <div className="content-item">
            <p className="item-description">{t("contact.email.description1")}</p>
            <p className="item-description">{t("contact.email.description2")}</p>
          </div>
        </div>

        <div className="content-section" id="section4">
          <h3 className="section-title">{t("contact.connect.title")}</h3>
          <div className="content-item">
            <p className="item-description">{t("contact.connect.description1")}</p>
            <p className="item-description">{t("contact.connect.description2")}</p>
          </div>
        </div>

        <footer className="footer">
          <p>{t("contact.footer")}</p>
        </footer>
      </div>
    </div>
  );
};

export default Contact;