import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Portfolio from "./components/portfolio/Portfolio";
import Achievements from "./components/achievements/Achievements";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Achievements />
      <Contact />
      <Footer />
    </>
  )
}

export default App