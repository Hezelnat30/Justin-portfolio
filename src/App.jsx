import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <NavBar />
          <HeroSection />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
