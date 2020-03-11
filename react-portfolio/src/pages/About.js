import React from "react";
import "./style.css";



function About() {
    return (
        <>

<div className="jumbotron">
        <h1>Hi there!</h1>
        <p>I'm Leah, a front end web developer in Charlotte, NC.</p>
    </div>

    <div className="container-fluid" id="about">
        <div className="row">
            <div className="col-sm-12 col-md-8">
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
            <div className="col-sm-12 col-md-4">
            <img alt="profile-img" src="/assets/images/leah.jpg" />
            </div>
        </div>
    </div>
        </>
    );
}

export default About;

