import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/header';
import Footer from './component/footer';
import Home from './pages/Home';
import AboutUs from './pages/About';
import ContactUs from './pages/ContactUs';
import Testinomial from './pages/Testinomial';
import Repair from './pages/Repair';
import Salesproduct from './pages/Salesproduct';
import Calculator from './component/calculator';
import Stepform from './component/stepform';

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
        <Route path="/calculator" element={<Calculator/>} />
        <Route path="/stepform" element={<Stepform/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
