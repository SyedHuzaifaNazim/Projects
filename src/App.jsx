import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Home from './pages/Home'; 
import ProductDetails from './pages/ProductDetails';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
