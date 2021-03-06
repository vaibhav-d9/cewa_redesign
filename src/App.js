import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Donate from "./components/Donate/Donate";
// import ContactHeader from "./components/ContactHeader/ContactHeader";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import JoinUs from "./components/JoinUs/JoinUs";
import Navbar from "./components/Navbar/Navbar";
import Privacy from "./components/Privacy/Privacy";
import Team from "./components/Team/Team";
import Tnc from "./components/Tnc/Tnc";

function App() {
  useEffect(() => {
    fetch("https://cewa-backend.herokuapp.com/");
    console.log("ping");
  });
  return (
    <div className="app">
      <div className="main">
        <Router>
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Home /> <Footer />
            </Route>
            <Route exact path="/termsandconditions">
              <Navbar />
              <Tnc /> <Footer />
            </Route>
            <Route exact path="/privacy">
              <Navbar />
              <Privacy /> <Footer />
            </Route>
            <Route exact path="/events">
              <Navbar />
              <Events /> <Footer />
            </Route>
            <Route exact path="/team">
              <Navbar />
              <Team /> <Footer />
            </Route>

            <Route exact path="/joinus">
              <Navbar />
              <JoinUs />
              <Footer />
            </Route>
            <Route exact path="/donate">
              <Navbar isDonatePage={true} />
              <Donate />
            </Route>
            <Route exact path="/donate/:id">
              <Navbar isDonatePage={true} />
              <Donate />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
