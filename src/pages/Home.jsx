// import Bibleverse from '../components/Bibleverse';
import '../styles/theme.css';
import fcsLogo from '../assets/fcs-logo.png';
import prague from  '../assets/Screenshot 2025-09-30 174353.png';
import React from "react";
import { useTranslation } from "react-i18next";


const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="top-navbar">
        <ul>
          <li>
            <a href="#welcome">{t("navbar.welcome")}</a>
          </li>
          <li>
            <a href="#section1">{t("navbar.about")}</a>
          </li>
          <li>
            <a href="#section2">{t("navbar.interests")}</a>
          </li>
          <li>
            <a href="#section3">{t("navbar.stack")}</a>
          </li>
        </ul>
      </nav>

      <div className="page-content">
        {/* Welcome Section */}
        <div className="fade-section welcome-section" id="welcome">
          <h2 className="page-title">{t("welcome.title")}</h2>
          <p className="page-subtitle">{t("welcome.subtitle")}</p>
        </div>

        {/* About Me Section */}
        <div className="fade-section content-sections">
          <div className="content-section" id="section1">
            <h3 className="section-title">{t("about.title")}</h3>
            <div className="content-item">
              <p className="item-description">{t("about.description")}</p>
            </div>
          </div>

        {/* Academic Life Section */}
        <div className="fade-section content-section" id='academics'>
          <div>
            <h3 className="section-title">{t("academics.title")}</h3>
            <div className="content-grid">
              <div className="content-card">
                <div className="card-label">{t("academics.university.label")}</div>
                <div className="card-content">
                  <div className="text-block">
                    {t("academics.university.description")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-image-placeholder">
            <img id="fcs-logo" src={fcsLogo} alt="Faculty of Computer Science Logo" />
          </div>
        </div>


          {/* Interests Section */}
          <div className="fade-section content-section" id="section2">
            <h3 className="section-title">{t("interests.title")}</h3>

            <div className="content-list">
              <div className="content-item">
                <h4 className="item-title">{t("interests.technology.label")}</h4>
                <p className="item-description">{t("interests.technology.description")}</p>
              </div>

              <div className="content-item">
                <h4 className="item-title">{t("interests.travelling.label")}</h4>
                <p className="item-description">{t("interests.travelling.description")}</p>
                <div className="home-image-placeholder">
                  <img id="prague" src={prague} alt="Prague Brandon" className="prague-image" />
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="fade-section content-section" id="section3">
            <h3 className="section-title">{t("techStack.title")}</h3>
            <div className="content-grid">
              <div className="content-card">
                <div className="card-label">Languages</div>
                <div className="card-content">
                  <div className="text-block">{t("techStack.languages")}</div>
                </div>
              </div>

              <div className="content-card">
                <div className="card-label">Frontend</div>
                <div className="card-content">
                  <div className="text-block">{t("techStack.frontend")}</div>
                </div>
              </div>

              <div className="content-card">
                <div className="card-label">Backend</div>
                <div className="card-content">
                  <div className="text-block">{t("techStack.backend")}</div>
                </div>
              </div>

              <div className="content-card">
                <div className="card-label">Cloud & Systems</div>
                <div className="card-content">
                  <div className="text-block">{t("techStack.cloud")}</div>
                </div>
              </div>

              <div className="content-card">
                <div className="card-label">Tools & Workflow</div>
                <div className="card-content">
                  <div className="text-block">{t("techStack.tools")}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Section */}
          <div className="fade-section content-section" id="section4">
            <h3 className="section-title">{t("closing.title")}</h3>
            <div className="content-item">
              <p className="item-description">{t("closing.description")}</p>
            </div>
          </div>

          <footer className="footer">
            <p>© 2026 Brandon Kuciapski. huzarzy<span className="bold">com</span></p>
          </footer>

        </div>
      </div>
    </>
  );
};

export default Home;


