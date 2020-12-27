import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Events from "./components/Events/Events";
import Home from "./components/Home/Home";
import JoinUs from "./components/JoinUs/JoinUs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Router>
        <ContactHeader />
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/events">
            <Events />
          </Route>

          <Route exact path="/joinus">
            <JoinUs />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
