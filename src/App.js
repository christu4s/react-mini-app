import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import NavBar from "./pages/Navbar";
import Technology from "./pages/Technology";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
     
    <NavBar />
    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
    </div>
   
  );
}

export default App;
