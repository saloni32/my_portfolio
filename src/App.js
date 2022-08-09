import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Myportfolio from "./components/myportfolio/Myportfolio";
import Intro from "./components/intro/Intro";
import Menu from "./components/menu/Menu";
import End from "./components/end/End";
import "./app.scss";
import { useState } from "react";
function App() {
  const [menuOpen,setMenuOpen]=useState();
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Myportfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
        <End/>
      </div>
    </div>
  );
}

export default App;
