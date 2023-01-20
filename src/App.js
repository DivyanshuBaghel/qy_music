//import List from "./components/List";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Slider/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
