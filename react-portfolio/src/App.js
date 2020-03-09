import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Projects from "./components/Projects";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Connect" component={Connect} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Skills" component={Skills} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

