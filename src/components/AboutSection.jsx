import tempPic from '../assets/tempPic.png';

function AboutSection() {
    const path = window.location.pathname;

    if (path === '/about') {
        return (
            <div>
                <h1>About</h1>
                <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
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
