import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CaseChanger from './components/CaseChanger';
import About from './components/About';
import React, { useState } from 'react';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Alert from './components/Alert';


function App() {
  const [mode, setMode]= useState("light")
  const [message, setMessage]= useState(null)
  const toggleMode = ()=>{
    if (mode==="light") {
      setMode("dark")
      document.body.style.backgroundColor="grey"
      setMessage("Dark Mode has Enabled")
      setTimeout(()=>{
        setMessage(null)},
        1500
      )
      
    }
    if(mode==="dark"){
      setMode("light")
      document.body.style.backgroundColor="white"
      setMessage("Light Mode has Enabled")
      setTimeout(()=>{
        setMessage(null)},
        1500
      )

    }
  }
  const displayMessage =(message)=>{
    setMessage(message)
    setTimeout(()=>{
      setMessage(null)},
      1500
    )
  }
  
  

  return (
    <div className="App">
      <Router>
        <Navbar home ="Home" contact = "About Us" mode={mode} toggleMode={toggleMode} displayMessage={displayMessage} />
        <Alert message={message}/>
        
        <Routes>
          <Route path="/" element={<CaseChanger mode={mode} displayMessage={displayMessage}/>} />
          <Route path="/about" element={<About mode={mode} displayMessage={displayMessage}/>} />
        </Routes>
  
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
