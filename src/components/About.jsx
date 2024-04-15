import { useState, useEffect } from 'react';
import tempPic from '../assets/tempPic.png';

function About() {
    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollOffset(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="about-wrapper">
            <div className="about-banner">
                <img src={tempPic} alt="About Banner" className="banner-image parallax-effect" style={{ transform: `translateY(${scrollOffset * 0.5}px)` }} />
                <div className="banner-content">
                    <h1 className="banner-title">About</h1>
                    <p className="banner-message">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                </div>
            </div>
            <a href="/contact" className="contact-button">Contact</a>
        </div>
    );
}

export default About;
