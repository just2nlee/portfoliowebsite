import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import MyTravels from "./pages/MyTravels";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from 'react-tsparticles';


function App() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async container => {
    console.log(container);
  }, []);

  return (
    <div className="App">
      <div className = "particles-container">
        <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 0.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
      </div>
      <div className = "content">
        <Router>
          <Navbar />
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/mytravels" element = {<MyTravels />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element = {<Contact />} />
          </Routes> 
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
