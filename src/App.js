import React from "react";
import "./App.scss";
import Header from "./components/header_parts/Header"
import Home from './components/Home'
import Projects from './components/projects/Projects'
import About from './components/About'
import Engineering from './components/preview_skills/Engineering'
import DataScience from './components/preview_skills/DataScience'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div>
          <Header />
        </div>
          <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/Projects" component={Projects} />
                  <Route exact path="/About" component={About} />
                  <Route exact path="/contact-us" component={Contact} />
                  <Route exact path="/software_engineering" component={Engineering} />
                  <Route exact path="/datascience" component={DataScience} />
          </Switch>       
      </div>
    </Router>
  );
}

function Opportunities() {
  return <p>Discover our numerous opportunities</p>;
}

function Solutions() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

export default App;
