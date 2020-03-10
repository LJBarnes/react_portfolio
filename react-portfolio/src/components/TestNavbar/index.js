import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Nav from 'react-bootstrap/Nav';

function TestNavbar() {
    return (
                    
            <>
            
                <Link className="navbar-brand" to="/">Leah J. Barnes</Link>
            
                
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
      </Nav.Link>
                    </Nav.Item>
                </Nav>
            </>
            )
        }
        
export default TestNavbar