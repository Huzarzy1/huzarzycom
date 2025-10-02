// import Bibleverse from '../components/Bibleverse';
import '../styles/Home.css';
import fcsLogo from '../assets/fcs-logo.png';
import prague from  '../assets/Screenshot 2025-09-30 174353.png';



const Home = () => {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="top-navbar">
        {/* <div className="nav-logo">
          <p>bk</p>
        </div> */}
        <ul>
          <li>
            <a href="#welcome">welcome</a>
          </li>
          <li>
            <a href="#section1">about</a>
          </li>
          <li>
            <a href="#section2">interests</a>
          </li>
          {/* <li>
            <a href="#section3">Section 3</a>
          </li>
          <li>
            <a href="#section4">Section 4</a>
          </li> */}
        </ul>
      </nav>


    <div className="page-content">
      <div className="welcome-section" id="welcome">
        <h2 className="page-title">Welcome</h2>
        <p className="page-subtitle">
          Hi, I’m Brandon — a Polish/Canadian student passionate about technology, travel, and learning.
        </p>
      </div>

      <div className="content-sections">
        {/* About Me Section */}
        <div className="content-section" id="section1">
          <h3 className="section-title">About Me</h3>
          <div className="content-item">
            <p className="item-description">
              I am a <strong>second-year Bachelor of Computer Science (BCS)</strong> student at 
              <strong> Dalhousie University</strong> in Halifax, Nova Scotia.  
              My main interests lie in <strong>web/software development</strong> and <strong>cybercrime</strong>.
            </p>
          </div>
        </div>

        {/* Academic Life Section */}
        <div className="content-section" id='academics'>
          <div>
            <h3 className="section-title">Academics</h3>
            <div className="content-grid">
              <div className="content-card">
                <div className="card-label">My University</div>
                <div className="card-content">
                  <div className="text-block">
                    Dalhousie University provides me with a strong foundation in computer science,  
                    from algorithms to modern Machine Learning.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-placeholder">
            <img id="fcs-logo" src={fcsLogo} alt="Faculty of Computer Science Logo" />
          </div>
        </div>

        {/* Interests Section */}
        <div className="content-section" id="section2">
          <h3 className="section-title">My Interests</h3>
          <div className="content-list">
            <div className="content-item">
              <h4 className="item-title">Technology</h4>
              <p className="item-description">
                I enjoy exploring software development, and taking on new projects that further my skills of the trade.
              </p>
            </div>

            <div className="content-item">
              <h4 className="item-title">Travelling</h4>
              <p className="item-description">
                Prague is my fav city :&#x29;  
              </p>
              <div className="image-placeholder">
                <img id='prague' src={prague} alt="Prague Brandon" className="prague-image" />
              </div>
            </div>
          </div>
        </div>

        {/* Closing Section */}
        <div className="content-section" id="section3">
          <h3 className="section-title">Looking Ahead</h3>
          <div className="content-item">
            <p className="item-description">
              My goal is to build impactful software development while contributing to a safer digital world.
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

export default Home;

