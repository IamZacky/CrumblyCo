import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// css
import './App.css';

/* Components */
import { AboutUs, Footer, Gallery, Header, Intro, SpecialMenu } from './container';
import { Navbar } from './components';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/order-form">

        </Route>
      </Switch>
      <Switch>
        <Route exact path="/faqs">
          
        </Route>
      </Switch>
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Gallery />
      <Intro />
      <Footer />
    </Router>
  )
}

export default App;
