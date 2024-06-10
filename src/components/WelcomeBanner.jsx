import tempPic from "../images/tempPic.png?url";
import { NavLink } from 'react-router-dom';

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
                
            <NavLink to ="/contact">
                    <button className="contact-button">Contact</button>
            </NavLink>

        </div>
    );
}

export default WelcomeBanner;