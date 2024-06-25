import tempPic from "../images/tempPic.png?url";
// import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

function AboutSection() {
    const path = window.location.pathname;

    if (path.startsWith('/about')) {
        return (
            <div className="about-page">
                <h1>About</h1>

                    <div className="about-page-content-wrapper">
                        <img src={tempPic} alt="picture of Christian" className="about-image about-page-image" />
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </div>

                    <NavLink to ="/contact">
                        <button className="contact-button contactBtn-about">Contact</button>
                    </NavLink>
            </div>
        );
    }
    else{
        return (
        <div className="about-wrapper">
            <div className="banner-wrapper">
                <img src={tempPic} alt="About Banner" className="banner-image parallax-effect" />
                <div className="banner-content">
                    <h1 className="banner-title">About</h1>
                    <p className="banner-message">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    <a href='/about' className="contact-button">More</a>
                </div>
            </div>
            {/* <a href="/contact" className="contact-button">Contact</a> */}
        </div>
    );
}
}

    

export default AboutSection;
