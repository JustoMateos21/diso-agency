import NavBar from "./Components/NavBar";
import Benefits from "./Screens/Benefits";
import Contact from "./Screens/Contact";
import Home from "./Screens/Home";
import HowWeWork from "./Screens/HowWeWork";
import Services from "./Screens/Services";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Services />
      <HowWeWork />
      <Benefits />
      <Contact />
    </div>
  );
}

export default App;
