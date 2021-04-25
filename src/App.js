import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Donate from "./components/Donate/Donate";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import JoinUs from "./components/JoinUs/JoinUs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Router>
        {/* <ContactHeader /> */}

        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>

          <Route exact path="/events">
            <Navbar />
            <Events />
          </Route>

          <Route exact path="/joinus">
            <Navbar />
            <JoinUs />
          </Route>
          <Route exact path="/donate">
            <Navbar isDonatePage={true} />
            <Donate />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
