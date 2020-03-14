import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Connect from "./pages/Connect";

import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
// import TestNavbar from "./components/TestNavbar";
import Footer from "./components/Footer";
// import Projects from "./components/Projects";
import Wrapper from "./components/Wrapper";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

