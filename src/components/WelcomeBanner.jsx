import tempPic from '../../public/tempPic.png';
import { HashLink } from 'react-router-hash-link';

function WelcomeBanner(){

    return (
        <div className="welcome-wrapper">
            <div className="banner-wrapper">
                <img src={tempPic} alt="Welcome Banner"className="banner-image" />
                <div className="banner-content">
                    <h1 className="banner-title">Welcome to my website!</h1>
                    <p className="banner-message">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                </div>
            </div>
            <HashLink smooth to="/#contact">
                <button className="contact-button">Contact</button>
            </HashLink>
        </div>
    );
}

export default WelcomeBanner;