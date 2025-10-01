import React from 'react';
import xchangebot from '../assets/xchangebot.png';



function Projects() {
    return (
        <div class="container">
            <main class="main-content">
                <section class="project-section" id="xchangebot">
                    <div class="project-content">
                        <div class="text-content">
                            <h2>XchangeBot (Discord Bot)</h2>
                            <p>
                                A sophisticated Discord bot providing real-time stock and cryptocurrency data. 
                                Features include price tracking, historical data analysis, and market alerts. 
                                Built with Python libraries and integrated with financial APIs for updating information.
                            </p>
                        </div>
                        <div class="image-container" id='xchangeimg'>
                            <a href="https://discordapp.com/oauth2/authorize?&client_id=1340288716576526388&scope=bot" target="_blank" rel="noopener noreferrer">
                                <img src={xchangebot} alt="XchangeBot Preview" class="project-image" />
                            </a> 
                        </div>
                    </div>
                </section>

                <section class="project-section">
                    <div class="project-content">
                        <div class="image-container">
                            {/* <img src={logo} alt="Portfolio Website Preview" class="project-image"/> */}
                        </div>
                        <div class="text-content">
                            <h2>huzarzy.com (Portfolio Website)</h2>
                            <p>
                                My personal portfolio website built with React, showcasing my projects, 
                                skills, and experience. Features responsive design, APIs, project showcases,
                                and contact information. Continuously updated with new features and improvements.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Projects;