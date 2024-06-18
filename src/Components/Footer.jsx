import React from 'react';
import { SocialIcon } from 'react-social-icons'
import './footer.css'

const Footer = () => {
    return (
        <footer>
                <p> Connect with me {' '}</p>
                <div className="social"><SocialIcon href="https://www.linkedin.com/in/qiangillianyu/" url="www.linkedin.com" /></div>
                <div className="social"><SocialIcon fallback="email" href="mailto:gillianhappy+mango@gmail.com" /></div>
                <div className="social"><SocialIcon href="www.github.com/Qianyu2021" url="www.github.com" /></div>
                
        </footer>
    );
}

export default Footer;