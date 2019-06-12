import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Image from './Image';
import Header from './Header';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <Header />
        <div className="nt-spacer"></div>
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/images/" component={Image} />
      </div>
    </Router>
  );
}

export default AppRouter;