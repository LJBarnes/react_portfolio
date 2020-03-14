import React from "react";
import "./style.css";

import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaDatabase } from 'react-icons/fa';



function About() {
    return (
        <>

<div className="jumbotron">
        <h1>Hi there!</h1>
        <p class>I'm Leah, a front end web developer in Charlotte, NC.</p>
    </div>

    <div className="container-fluid" id="about">
        <div className="row h-100">
            <div className="col-sm-12 col-md-8 my-auto">
                <div className="wrapper">
                    <span className="align-middle">
                        <h2 id="about-me">A Little About Me</h2>
                        <p id="abm-content">I transitioned into tech from the design world and love putting my past art
                            experience to use creating dynamic websites and applications. After completing a certificate in Full Stack Development from the University 
                            of North Carolina at Charlotte, my specialities include HTML, CSS, Bootstrap, JavaScript, APIs, JQuery, MySQL, MongoDB, and React. 
                            I am dedicated to constantly learning and implementing current technologies. What I enjoy most about web development is blending my creative and technical 
                            skills to build web experiences that are both effective and enjoyable.</p>
                            <p>When I'm not coding, you can probably find me listening to a good podcast, reading (I dig Sci-Fi and Fantasy most), exploring nature trails up on the Blue Ridge, and
                             hanging out with my awesome husband and our two corgis.</p>
                    </span>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 ">
            <img alt="profile-img" src="/assets/images/leah.jpg" className="profile-img" />
            </div>
        </div>
    </div>

                <div className="row h-100">
                    <div className="col-md-12 skills">
                    <h2 id="about-me">My Specialities Include</h2>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-2"></div>
                <div className="col-lg-2 skills">
                    <div className="icon">
                        <FaHtml5 size="100"/>
                    </div>
                    <h4>HTML</h4>
                </div>
                <div className="col-lg-2 skills">
                    <div className="icon">
                        <FaCss3Alt size="100"/>
                    </div>
                    <h4>CSS</h4>
                    <p>Bootstrap</p>                    
                </div>
                <div className="col-lg-2 skills">
                    <div className="icon">
                        <IoLogoJavascript size="100"/>
                    </div>
                    <h4>JavaScript</h4>
                    <p>jQuery<br/>
                    React</p>                    
                </div>
                <div className="col-lg-2 skills">
                    <div className="icon">
                        <FaDatabase size="100"/>
                    </div>
                    <h4>Databases</h4>
                    <p>MySql<br />
                    MongoDB</p>                    
                </div>
            </div>



        
        </>
    );
}

export default About;

