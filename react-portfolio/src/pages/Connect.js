import React from "react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';



function Connect() {
    return (
        <div>

            <div className="row h-100">
                <div className="col-md-12 skills">
                    <h2 id="about-me">Let's Connect!</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-2 skills">
                    <div className="icon">
                        <IoIosPaper size="100" />
                    </div>
                    <p><a href="/assets/images/leah_barnes_resume.pdf" className="dark-link">View My Resume</a></p>
                    
                </div>
               
                <div className="col-lg-2 skills">
                    <div className="icon">
                        <MdEmail size="100" />
                    </div>
                    <p><a href="mailto:johnsone.leahe@gmail.com" className="dark-link">Email Me</a></p>
                    
                </div>

                <div className="col-lg-2 skills">
                    <div className="icon">
                        <FaGithub size="100" />
                    </div>
                    <p><a href="https://github.com/LJBarnes" className="dark-link">Find Me On GitHub</a></p>
                    
                </div>

                <div className="col-lg-2 skills">
                    <div className="icon">
                        <FaLinkedin size="100" />
                    </div>
                    <p><a href="https://www.linkedin.com/in/ljbarnes/" className="dark-link">Find Me On LinkedIn</a></p>
                    
                </div>

        </div>
           

        </div>
    );
}

export default Connect;