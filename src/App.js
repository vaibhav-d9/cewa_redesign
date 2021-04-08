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
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/events">
            <Events />
          </Route>

          <Route exact path="/joinus">
            <JoinUs />
          </Route>
          <Route exact path="/donate">
            <Donate />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
