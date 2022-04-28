import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// css
import "./App.css";

/* Pages */
import OrderForm from "./components/Pages/OrderForm";

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
        <Route exact path="/">
          <Navbar />
          <Header />
          <AboutUs />
          <SpecialMenu />
          <Gallery />
          <Intro />
          <Footer />
        </Route>
        <Route exact path="/order-form" component={OrderForm} />
        <Route exact path="/faqs" component={{}} />
      </Switch>
    </Router>
  );
};

export default App;
