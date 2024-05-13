import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CaseChanger from './components/CaseChanger';
import About from './components/About';
import React from 'react';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';


function App() {
  
  

  return (
    <div className="App">
      <Router>
        <Navbar home ="Home" contact = "About Us"/>
        <Routes>
          <Route path="/" element={<CaseChanger />} />
          <Route path="/about" element={<About />} />
        </Routes>
  
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
