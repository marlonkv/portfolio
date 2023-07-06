import Header from '../src/Header';
import React from 'react';
import Dev from './Pags/Dev/Dev';
import Contato from './Pags/Contato/Contato';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dev />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
