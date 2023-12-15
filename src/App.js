import "./App.css";
// import {Routes,Route} from "react-router-dom"

import Translate from "./components/Translate";
import Navbar from './components/Navbar' ;

function App() {
  return (
    <>
      <Navbar title ="Translate App" />
      {/* <Routes></Routes> */}

      {/* <nav class="navbar">
        <div class="max-width">
            <div class="logo"><a href="#">Portfo<span>lio</span></a></div>
            <ul class="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#teams">Profiles</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav> */}
<div className="box">
      <Translate />
      </div>

    <footer className="text-center">&copy; All Rights Reserved!</footer>
    </>
  );
}

export default App;
