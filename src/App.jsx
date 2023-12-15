import About from "./component/About";
import Home from "./component/Home"
import Work from "./component/Work";
import './css/app.css';
import myLOGO from './media/STpng.png';
import Photography from "./component/Photography";

function App() {

  return (
    <>
      <header className="header">
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
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Project</a>
          <a href="#photography">Photography</a>
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
      </section>
    </>
  )
}

export default App
