import React from 'react';
import html from '../Images/html-5.png';
import css from '../Images/css-3.png';
import javascript from '../Images/java-script.png';
import react from '../Images/react.png';
import cc from '../Images/c++.png';
import c from '../Images/c.png';
import python from '../Images/python.png';
import github from '../Images/github.png';
import database from '../Images/database.png';
import wd from '../Images/web development.gif';
const Skills = () =>{
    return(
        <div className="section_2">
            <h1 className="heading">Skills</h1>
            <div className="ss">
                <img src={wd} className="ss_pic" />
                <img src={html} className="ss_pic" />
                <img src={css} className="ss_pic" />
                <img src={javascript} className="ss_pic" />
                <img src={react} className="ss_pic" />
                <img src={cc} className="ss_pic" />
                <img src={c} className="ss_pic" />
                <img src={python} className="ss_pic" />
                <img src={github} className="ss_pic" />
                <img src={database} className="ss_pic" />
            </div>
        </div>
    );
};

export default Skills;