import React from "react";
import twitter from '../Images/twitter.png';
import linkedin from '../Images/linkedin.png';
import github from '../Images/github.png';
import instagram from '../Images/instagram.png';

const Footer = () => {
    return(
        <div className="section_6">
             <div className="contact">CONTACT ME </div>
             <div className="about_social">

                    <a href="https://twitter.com/ayush_11122" className="ftr_sec"><img  className="social" src={twitter} /></a>
                    <a href="https://www.linkedin.com/in/ayush-srivastava-198502219" className="ftr_sec"><img  class="social" src={linkedin} /></a>
                    <a href="https://github.com/ayush11122" className="ftr_sec"><img  className="social" src={github} /></a>
                    <a href="https://www.instagram.com/ayush_05_12/" className="ftr_sec"><img  className="social" src={instagram} /></a> 
                </div>
                <div className="prt1">This is made by Ayush :-)</div>
        </div>
    );
};

export default Footer;