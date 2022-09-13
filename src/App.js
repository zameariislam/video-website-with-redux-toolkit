import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Video from './components/pages/Video';
import Footer from './components/ui/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




function App() {
  return (
    <Router >
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos/:videoId' element={<Video />} />
      </Routes>



      <Footer />

    </Router>
  );
}

export default App;
