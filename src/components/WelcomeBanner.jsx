import tempPic from '../assets/tempPic.png';

function WelcomeBanner(){

    return (
        <div className="welcome-wrapper">
            <div className="welcome-banner">
                <img src={tempPic} alt="Welcome Banner"className="banner-image" />
                <div className="banner-content">
                    <h1 className="banner-title">Welcome to our website!</h1>
                    <p className="banner-message">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                </div>
            </div>
            <a href="/contact" className="contact-button">Contact</a>
        </div>
    );
}

export default WelcomeBanner;