import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/header';
import Footer from './component/footer';
import Home from './pages/Home';
import AboutUs from './pages/About';
import ContactUs from './pages/Contact';
import Testinomial from './pages/Testinomial';
import Repair from './pages/Repair';
import Salesproduct from './pages/Salesproduct';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/testinomial" element={<Testinomial/>} />
        <Route path="/repair" element={<Repair/>} />
        <Route path="/salesproduct" element={<Salesproduct/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
