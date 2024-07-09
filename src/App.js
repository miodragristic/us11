import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Imga from './components/Blog/Imga';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/inter-miami-global-attraction" element={<Imga />} />
      </Routes>
    </Router>
  );
};

export default App;

