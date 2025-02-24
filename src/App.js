import "./App.scss";
import { Routes, Route, } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";


function App() {

  return (
    <div className="App">
      {/* particles js */}
      
      {/* navbar */}
      <Navbar/>

      {/* main page content */}

      <div className="App__main__page-content">
        <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route index path="/resume" element={<Resume />} />
        <Route index path="/skills" element={<Skills />} />
        <Route index path="/portfolio" element={<Portfolio />} />
        <Route index path="/contact" element={<Contact />} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
