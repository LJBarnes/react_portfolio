import React from "react";
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaDatabase } from 'react-icons/fa';


function Skills() {
    return (
        <div className="content">

            <div className="row h-100">
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



        </div>
    );
}

export default Skills;