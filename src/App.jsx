import About from "./component/About";
import Home from "./component/Home"
import Work from "./component/Work";
import './css/app.css';
import myLOGO from './media/STpng.png';
import Photography from "./component/Photography";
import { useState } from "react";
import DarkBg from './media/DarkLogoBG.gif';
import LightBg from './media/LightLogoBG.gif';
import Maintanance from "./component/Maintanance";
// import Maintenance from "./component/Maintenance";

function App() {
  // document.body.style.backgroundImage = `url(${LightBg})`;
  const [mode, setMode] = useState('light')
  const darkmode = () => {
    if (mode === 'light') {
      document.body.style.backgroundImage = `url(${DarkBg})`;
      document.body.style.color = '#fff';
      setMode('dark');
    } else {
      document.body.style.backgroundImage = `url(${LightBg})`;
      document.body.style.color = '#000';
      setMode('light');
    }
  };

  return (
    <>
      {/* <header className="header">
        <a className="logo" href="#home"> <img src={myLOGO} alt="" className="logo-img" /></a>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fillRule="currentColor" className="bi bi-list" viewBox="0 0 16 16" id="menu-view">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fillRule="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16" id="menu-close">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </label>
        <nav className="navbar">
          <a style={{ color: mode === 'light' ? 'black' : 'white' }} href="#home">Home</a>
          <a style={{ color: mode === 'light' ? 'black' : 'white' }} href="#about">About</a>
          <a style={{ color: mode === 'light' ? 'black' : 'white' }} href="#project">Project</a>
          <a style={{ color: mode === 'light' ? 'black' : 'white' }} href="#photography">Photography</a>
          <label className="switch">
            <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fillRule="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
            <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>
            <input type="checkbox" className="input" onClick={darkmode} />
            <span className="slider"></span>
          </label>
        </nav>

      </header>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="project">
        <Work />
      </section>
      <section id="photography">
        <Photography />
      </section> */}


      <Maintanance />
    </>
  )
}

export default App
