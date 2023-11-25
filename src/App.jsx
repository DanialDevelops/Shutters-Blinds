import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';
import Service from './Pages/Services';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from './Pages/info';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Info />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;