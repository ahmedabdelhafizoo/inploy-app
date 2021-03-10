import React, { Component } from "react";
import AppHeader from "../components/layout/AppHeader";
import IntroSection from "../components/home-components/Intro";
import Register from "../components/home-components/Register";
import Clients from "./../components/home-components/Clients";
import Contact from "./../components/home-components/Contact";
import AppFooter from "./../components/layout/AppFooter";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <IntroSection />
        <Register />
        <Clients />
        <Contact />
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default App;
