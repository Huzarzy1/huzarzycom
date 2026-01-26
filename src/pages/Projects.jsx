import { useEffect, useRef } from "react";
import "../styles/theme.css";
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
                {Array.from({ length: 6 }).map((_, i) => (
                  <div className="carrossel-item" key={i} />
                ))}
              </div>
            </div>
          </div>

            <div className="content-sections">

                {/* Featured Projects */}
                <div className="fade-section content-section" id="featured-projects">
                <h3 className="section-title">{t("projects.featuredTitle")}</h3>

                <div className="content-grid" id="featured">
                    {/* Project 1 */}
                    <div className="content-card">
                    <h4 className="item-title">{t("projects.huzarzy.title")}</h4>
                    <p className="item-description">
                        {t("projects.huzarzy.description")}
                    </p>
                    <p className="item-description">
                        {t("projects.huzarzy.tech")}
                    </p>
                    </div>

                    {/* Project 2 */}
                    <div className="content-card">
                    <h4 className="item-title">{t("projects.atmocan.title")}</h4>
                    <p className="item-description">
                        {t("projects.atmocan.description")}
                    </p>
                    <p className="item-description">
                        {t("projects.atmocan.tech")}
                    </p>
                    </div>
                </div>
                </div>

                {/* Additional Projects */}
                <div className="fade-section content-section" id="other-projects">
                <h3 className="section-title">{t("projects.otherTitle")}</h3>

                <div className="content-list">
                    <div className="content-item">
                    <h4 className="item-title">{t("projects.f1.title")}</h4>
                    <p className="item-description">
                        {t("projects.f1.description")}
                    </p>
                    </div>

                    <div className="content-item">
                    <h4 className="item-title">{t("projects.blockchain.title")}</h4>
                    <p className="item-description">
                        {t("projects.blockchain.description")}
                    </p>
                    </div>

                    <div className="content-item">
                    <h4 className="item-title">{t("projects.filechain.title")}</h4>
                    <p className="item-description">
                        {t("projects.filechain.description")}
                    </p>
                    </div>

                    <div className="content-item">
                    <h4 className="item-title">{t("projects.sticknotez.title")}</h4>
                    <p className="item-description">
                        {t("projects.sticknotez.description")}
                    </p>
                    </div>
                </div>
                </div>

                {/* Philosophy / Closing */}
                <div className="fade-section content-section" id="projects-closing">
                <h3 className="section-title">{t("projects.closing.title")}</h3>
                <div className="content-item">
                    <p className="item-description">
                    {t("projects.closing.description")}
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
