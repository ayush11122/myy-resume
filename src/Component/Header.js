import React from 'react';
import img from '../Images/profile_pic.jpeg'

const Header = () =>{
    return(
        <div className="section_1">
            <div className="intro_sec">
            <div className="name">AYUSH SRIVASTAVA</div>
            <div className="about">
                <div className="about_me">A aspiring software engineer with focus on frontend developememt, 
                DevOps enthusiast, believe in open source contributions
                pursuing B.Tech in Computer Science with specialization in Artificial Intelligence. 
                Currently in 3rd year of my learning stint.</div>
                
            </div>
            </div>
            <div className="pic_sec">
                <img src={img} className="profile_sec"/>
            </div>
        </div>   
    );
};

export default Header;
