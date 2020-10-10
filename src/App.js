import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Home from './components/Home'

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
                  <Route exact path="/opportunities" component={Opportunities} />
                  <Route exact path="/solutions" component={Solutions} />
                  <Route exact path="/contact-us" component={Contact} />
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

// function Home() {
//   return ()
// }
export default App;
