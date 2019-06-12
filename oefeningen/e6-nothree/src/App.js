import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Images from './components/Images';
import Navigation from './components/Navigation';



function App() {
  return (
    <BrowserRouter>
        <Navigation />
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/images" component={Images} />
    </BrowserRouter>
  );
}

export default App;
