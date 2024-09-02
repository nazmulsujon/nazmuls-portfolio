import React from "react";

// import components
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackTopBtn from "./components/BackTopBtn";

const App = () => {
  return (
    <div className="bg-white relative">
      <Header />
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;
