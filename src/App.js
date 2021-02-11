import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Oops from "./pages/Oops";
import Projects from "./pages/Projects";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route>
            <Oops />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
