import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';
import Service from './Pages/Services';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from './Pages/info';

const theme = createTheme({
  // Your theme options here
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
  </ThemeProvider>
  );
}

export default App;