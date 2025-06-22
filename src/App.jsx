import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from './component/pages/Home';
import Skills from './component/pages/Skills';
import Navbar from './component/common/Navbar';
import Footer from './component/common/Footer';
import Project from './component/pages/Project'
import Certificates from './component/pages/Certificates'
import Contact from "./component/pages/Contact"

function App() {
  return (
    <Router>
      <Navbar />
      
      <div className="pt-2" > {/* Add padding to prevent content under navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<div>Resume Page</div>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/certificates" element={<Certificates />} />

        </Routes>
        <Footer/>
      </div>

    </Router>
  );
}

export default App;
