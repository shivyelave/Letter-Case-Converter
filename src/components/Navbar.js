import React from "react";
import CC_logo from '../assets/images/CC_logo.jpg';
import { Link } from "react-router-dom";

export default function Navbar (props){
    return (

        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                
                <img src={CC_logo} className="nav-logo"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to="/"  style={{ textDecoration: 'none', color: 'inherit' }}><a className="nav-link active " aria-current="page" href="/">{props.home}</a></Link>
                    </li>
                    <li className="nav-item" >
                        <Link to="/about"  style={{ textDecoration: 'none', color: 'inherit' }}><a className="nav-link" href="/">{props.contact}</a></Link>
                    </li>
                
                    </ul>
        
                </div>
                </div>
                </nav>
        </>
    )}