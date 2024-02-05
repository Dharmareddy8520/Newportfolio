import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home, About, Skills, Work, Resume } from "./Components/Export";
import Footer from "./Components/Footer";
import Work2 from "./Components/Work2";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Footer />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Work2 />} />
      </Routes>
    </div>
  );
}

export default App;
