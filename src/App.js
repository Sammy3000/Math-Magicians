import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Calc from './components/calculator';
import Home from './components/Home';
import Nav from './components/Nav';
import Quote from './components/Quote';

const App = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calc />} />
      <Route path="quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
