import React from 'react';
import '../styles/Contact.css';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.webp';
import insta from '../assets/ig.png';

function Contact() {
    return (
        <div class="container">
            <main class="contact-content">
                <section class="contact-section">
                    <div class="email-section">
                        <h2>Get in Touch!</h2>
                        <div class="email-placeholder">
                            <p><b>Email: </b>Bkuciapski1@gmail.com</p>
                        </div>
                    </div>

                    <h2>Social Media</h2>
                    <div class="social-media-grid">
                        <div class="social-item">
                            <div className="social-image">
                            <a href="https://www.linkedin.com/in/kuciapski/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="LinkedIn" className='image' />
                            </a>
                            </div>
                            <p>LinkedIn</p>
                        </div>

                        <div class="social-item">
                            <div className="social-image">
                            <a href="https://github.com/Huzarzy1" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="GitHub" className='image' />
                            </a>
                            </div>
                            <p>GitHub</p>
                        </div>

                        <div class="social-item">
                            <div className="social-image">
                            <a href="https://www.instagram.com/kuciapscy/" target="_blank" rel="noopener noreferrer">
                                <img src={insta} alt="Instagram" className='image'/>
                            </a>
                            </div>
                            <p>Instagram</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Contact;
