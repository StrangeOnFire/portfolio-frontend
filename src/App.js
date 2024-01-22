import "./css/common.css";
import "./App.css";
import Lenis from "@studio-freight/lenis";
import Header from "./components/Header";
import BlackInfoContainer from "./components/BlackInfoContainer";
import HowIdoIt from "./components/HowIdoIt";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// --------------------------------
function App() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <>
      <Header />
     
      <BlackInfoContainer />
      <HowIdoIt />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
