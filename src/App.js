import "./App.css";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <ContactHeader />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
