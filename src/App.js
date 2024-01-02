import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="text-3xl font-bold underline">grhre</div>
      <Footer />
    </div>
  );
}

export default App;
