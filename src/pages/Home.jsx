import React from 'react';
import Bibleverse from '../components/Bibleverse';
import Halifax from '../assets/halifax-day.jpg';
import '../styles/Home.css';

import mugshot from '../assets/mugshot.jpg';
import goldberg from '../assets/goldberg.jpg';
import personal from '../assets/prog-bridge.jpg';

import bayview from '../assets/bayview.jpg';

import Cadet1 from '../assets/cadet-1.jpg';
import Cadet2 from '../assets/cadet-2.jpg';
import Cadet3 from '../assets/cadet-3.jpg';
import Cadet4 from '../assets/cadet-4.jpg';

function Home() {
  return (
    <div>
      <div className='banner'>
        <img id='halifax' src={Halifax} alt='Halifax'/>
      </div>
      <div className='block' id='bible-block'>
        <Bibleverse />
      </div>
      {/* <div className='block'>
        <h1 id='intro'>Hi, I'm Brandon!</h1>
      </div> */}

    <main>
        <section class="container">
            <div class="profile-section">
                <img src={mugshot} alt="selfie" id="profile-img" />
                <div>
                    <h2>Hi, I'm Brandon!</h2>
                    <p>My name is Brandon Kuciapski! I am a Polish-Canadian student currently studying computer science at Dalhousie University in Halifax NS, Canada. My personal interests lie in artificial intelligence, web/app development, analytics, and cybersecurity. </p>
                </div>
            </div>
            <div id='intro-lower'>
              <div className='profile-section' id='goldberg-section'>
                <img src={goldberg} alt='goldberg' id='goldberg' />
                <p>I am currently a first-year Computer Science student at Dalhousie University, where I am building a strong foundation in programming, software development, and problem-solving. My passion for technology drives me to explore new innovations and continuously improve my skills.</p>
              </div>
              <div className='profile-section' id='personal-section'>
                <img src={personal} alt='Prague Bridge' id='prague' />
                <p>I love traveling and exploring new places. Seeing different cities and experiencing new cultures is really exciting to me. I enjoy trying different foods, meeting new people, and learning about how others live. Traveling helps me see the world in new ways</p>
              </div>
            </div>
        </section>


        <section class="container-experience-section">
          <h2>Experience</h2>
          <div class="experience-content">
              <div class="experience-text">
                  <h3>Bayview High School, Upper Tantallon</h3>
                  <p class="date">October 2023 - June 2024</p>
                  <div class="responsibilities-grid">
                      <div class="bullet">●</div>
                      <p>Volunteered lunch hours to tutor students</p>
                      <div class="bullet">●</div>
                      <p>Provided academic support to any student seeking help with school work</p>
                  </div>
              </div>
              <div class="experience-photo">
                  <img src={bayview} alt="Tutoring Session" class="experience-img" />
              </div> 
          </div>
        
          <div class="experience-content">
            <div class="experience-text">
                <h3>250 Vimy Air Cadets, Hubley</h3>
                <p class="date">September 2021 - June 2024</p>
                <div class="responsibilities-grid">
                    <div class="bullet">●</div>
                    <p>Ran squadron with leadership role</p>
                    <div class="bullet">●</div>
                    <p>Worked with schedules to make sure all cadets are being taught</p>
                    <div class="bullet">●</div>
                    <p>Indulged in Community service with 25+ additional hours of volunteer work</p>
                </div>
            </div>
          </div>
        
        
        
        
        
        </section>  




        <section class="container">
            <h2>My Gallery</h2>
            <div class="photo-grid">
                <div class="photo-container">
                    <img src={Cadet1} alt="Hobby 1" />
                </div>
                <div class="photo-container">
                    <img src={Cadet2} alt="Hobby 2" />
                </div>
                <div class="photo-container">
                    <img src={Cadet3} alt="Hobby 3" />
                </div>
                <div class="photo-container">
                    <img src={Cadet4} alt="Hobby 4" />
                </div>
            </div>
        </section>
    </main>
    </div>
  )
}

export default Home;
