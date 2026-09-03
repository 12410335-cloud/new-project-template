import "./App.css";
import Navbar from "./components/Navbar";
import Greetings from "./components/props/Greetings";
import FeaturesList from "./components/props/FeaturesList";

function App() {
  return (
    <div className="app">
      <Navbar title="Pink Study" />
      <Greetings name="Gracia" />
      <FeaturesList />
    </div>
  );
}

export default App;