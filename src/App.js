import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// css
import "./App.css";

/* Pages */
import OrderForm from "./components/Pages/OrderForm";
import Faq from "./components/Pages/Faq";

/* Components */
import {
  AboutUs,
  Footer,
  Gallery,
  Header,
  Intro,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";

const App = () => {
  return (
    <Router>
      <Switch>

        {/* Ito yung pinaka main page */}
        <Route exact path="/">
          {/* Navbar */}
          <Navbar /> 
          {/* Header */}
          <Header />
          {/* About */}
          <AboutUs />
          {/* Menu */}
          <SpecialMenu />
          {/* Photo Gallery */}
          <Gallery />
          {/* Collaborations */}
          <Intro />
          {/* Contact Us at Footer */}
          <Footer />
        </Route>

        {/* Ito yung mga links papunta sa Order saka sa FAQ */}
        <Route exact path="/order-form" component={OrderForm} />
        <Route exact path="/faqs" component={Faq} />
        
      </Switch>
    </Router>
  );
};

export default App;
