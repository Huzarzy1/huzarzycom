import { useEffect, useRef } from "react";
import "../styles/Projects.css";
import { useTranslation } from "react-i18next";

function Projects() {

    const { t } = useTranslation();

  const containerRef = useRef(null);
  const containerCarrosselRef = useRef(null);
  const carrosselRef = useRef(null);

  useEffect(() => {
    const container = containerCarrosselRef.current;

    const containercarrossel = containerCarrosselRef.current;
    const carrossel = carrosselRef.current;
    const carrosselItems = carrossel.querySelectorAll(".carrossel-item");

    if (!container || !containercarrossel || !carrossel) return;

    let isMouseDown = false;
    let currentMousePos = 0;
    let lastMousePos = 0;
    let lastMoveTo = 0;
    let moveTo = 0;

    const lerp = (a, b, n) => n * (a - b) + b;

    const distanceZ = (widthElement, length, gap) =>
      widthElement / 2 / Math.tan(Math.PI / length) + gap;

    const calculateHeight = (z) => {
      const t = Math.atan((90 * Math.PI) / 180 / 2);
      return t * 2 * z;
    };

    const onResize = () => {
      const bounds = containercarrossel.getBoundingClientRect();
      return { w: bounds.width, h: bounds.height };
    };

    const createCarousel = () => {
      const props = onResize();
      const length = carrosselItems.length;
      const degrees = 360 / length;
      const gap = 20;
      const tz = distanceZ(props.w, length, gap);
      const height = calculateHeight(tz);

    //   container.style.width = tz * 2 + gap * length + "px";
    //   container.style.height = height + "px";

      carrosselItems.forEach((item, i) => {
        item.style.setProperty("--rotatey", `${degrees * i}deg`);
        item.style.setProperty("--tz", `${tz}px`);
      });
    };

    const getPosX = (x) => {
      currentMousePos = x;
      moveTo = currentMousePos < lastMousePos ? moveTo - 2 : moveTo + 2;
      lastMousePos = currentMousePos;
    };

    const update = () => {
      lastMoveTo = lerp(moveTo, lastMoveTo, 0.05);
      carrossel.style.setProperty("--rotatey", `${lastMoveTo}deg`);
      requestAnimationFrame(update);
    };

    // Mouse
    carrossel.addEventListener("mousedown", () => {
      isMouseDown = true;
      carrossel.style.cursor = "grabbing";
    });

    carrossel.addEventListener("mouseup", () => {
      isMouseDown = false;
      carrossel.style.cursor = "grab";
    });

    carrossel.addEventListener("mousemove", (e) => {
      if (isMouseDown) getPosX(e.clientX);
    });

    // Touch
    carrossel.addEventListener("touchstart", () => (isMouseDown = true));
    carrossel.addEventListener("touchend", () => (isMouseDown = false));
    carrossel.addEventListener("touchmove", (e) => {
      if (isMouseDown) getPosX(e.touches[0].clientX);
    });

    window.addEventListener("resize", createCarousel);

    createCarousel();
    update();

    return () => {
      window.removeEventListener("resize", createCarousel);
    };
  }, []);

  return (

    

    <div className="container" ref={containerRef}>
      <main className="main-content">

      {/* ================= NAVBAR ================= */}
      <nav className="top-navbar">
        <ul>
          <li>
            <a href="#featured">{t("navbar.featured")}</a>
          </li>
          <li>
            <a href="#other-projects">{t("navbar.others")}</a>
          </li>
          {/* <li>
            <a href="#section2">{t("navbar.interests")}</a>
          </li>
          <li>
            <a href="#section3">{t("navbar.stack")}</a>
          </li> */}
        </ul>
      </nav>

        <div className="conteudo__geral">
          <div className="carousel-container">
            <div className="container-carrossel" ref={containerCarrosselRef}>
              <div className="carrossel" ref={carrosselRef}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div className="carrossel-item" key={i} />
                ))}
              </div>
            </div>
          </div>

            <div className="content-sections">

                {/* Featured Projects */}
                <div className="fade-section content-section" id="featured-projects">
                <h3 className="section-title">Featured Work</h3>

                <div className="content-grid" id="featured">
                    {/* Project 1 */}
                    <div className="content-card">
                    <h4 className="item-title">Decentralized Blockchain Node</h4>
                    <p className="item-description">
                        Built a peer-to-peer blockchain node with transaction broadcasting, UTXO management,
                        mining, and consensus logic. Later extended the project with a Java Swing GUI to
                        visualize node state and interact with the network.
                    </p>
                    <p className="item-description">
                        <strong>Tech:</strong> Java, Networking (Sockets), Cryptography, Swing
                    </p>
                    </div>

                    {/* Project 2 */}
                    <div className="content-card">
                    <h4 className="item-title">Personal Portfolio Website</h4>
                    <p className="item-description">
                        Designed and developed a responsive portfolio using React with scroll-based animations,
                        reusable components, and theme-aware (light/dark) styling.
                    </p>
                    <p className="item-description">
                        <strong>Tech:</strong> React, JavaScript, CSS, Responsive Design
                    </p>
                    </div>
                </div>
                </div>

                {/* Additional Projects */}
                <div className="fade-section content-section" id="other-projects">
                <h3 className="section-title">Other Projects</h3>

                <div className="content-list">
                    <div className="content-item">
                    <h4 className="item-title">Formula 1 Live Standings App</h4>
                    <p className="item-description">
                        Built a React-based web app that displays live Formula 1 standings using external APIs,
                        with protected routes behind an authentication system.
                    </p>
                    </div>

                    <div className="content-item">
                    <h4 className="item-title">Brightspace Assignment Scraper</h4>
                    <p className="item-description">
                        Designed a concept for a Raspberry Pi–hosted service that aggregates course deadlines
                        from Brightspace and outputs them into a continuously updating local dashboard.
                    </p>
                    </div>

                    <div className="content-item">
                    <h4 className="item-title">DualShock 3 Driver Exploration</h4>
                    <p className="item-description">
                        Researched and prototyped components of a custom Windows driver for the DualShock 3
                        controller to better understand USB, HID, and driver-level interactions.
                    </p>
                    </div>
                </div>
                </div>

                {/* Philosophy / Closing */}
                <div className="fade-section content-section" id="projects-closing">
                <h3 className="section-title">How I Build</h3>
                <div className="content-item">
                    <p className="item-description">
                    I prioritize clarity, maintainability, and understanding how systems work under the hood.
                    I’m most interested in projects that expose real-world constraints—networking, security,
                    data flow, and user experience.
                    </p>
                </div>
                </div>

        </div>
        </div>
      </main>

    <footer className="footer">
        <p>© 2026 Brandon Kuciapski. huzarzy<span className="bold">com</span></p>
    </footer>

    </div>
  );
}

export default Projects;
