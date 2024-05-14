import React from "react";
import CC_logo from '../assets/images/CC_logo.jpg';
import { Link } from "react-router-dom";
export default function Navbar (props){
    const homeMessage = ()=>{
    props.displayMessage("Welcome To Home Page")}
    const aboutMessage = ()=>{
        props.displayMessage("Welcome To About Us Page")}
    return (

        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
                <div className="container-fluid">
                
                <img src={CC_logo} alt = "logo" className="nav-logo"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item" style={{color: props.mode==="light"?'black':'white'}} >
                    <Link to="/"  style={{ textDecoration: 'none', color: 'inherit' }} className="nav-link active " aria-current="page" onClick={homeMessage}>{props.home}</Link>
                    </li>
                    <li className="nav-item" style={{color: props.mode==="light"?'black':'white'}}>
                        <Link to="/about"  style={{ textDecoration: 'none', color: 'inherit' }} className="nav-link" onClick={aboutMessage} >{props.contact}</Link>
                    </li>
                
                    </ul>
        
                </div>
                <div className="form-check form-switch form-check-reverse">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" onClick={props.toggleMode}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckReverse" style={{color : props.mode==="light"?"black":"white"}}>Enable {props.mode==="light"?"dark":"light"} Mode</label>
                </div>
                </div>
                </nav>
        </>
    )}