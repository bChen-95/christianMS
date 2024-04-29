import tempPic from '../assets/tempPic.png';

function About() {


    return (
        <div className="about-wrapper">
            <div className="about-banner">
                <img src={tempPic} alt="About Banner" className="banner-image parallax-effect" />
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
