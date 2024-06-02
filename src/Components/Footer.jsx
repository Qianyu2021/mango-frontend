import React from 'react';
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
        <footer>
                <p> Email me or Connect with me {' '} 
                <SocialIcon  href="https://www.linkedin.com/in/qiangillianyu/" url="www.linkedin.com"/> 
                <SocialIcon fallback="email" href="mailto:gillianhappy@gmail.com" />
                </p>
                
                <p> Here is my github <SocialIcon href="www.github.com" url="www.github.com" /></p>
        </footer>
    );
}

export default Footer;