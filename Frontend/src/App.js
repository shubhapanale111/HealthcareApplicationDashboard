import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Patients from './pages/Patients.jsx';
import HealthRecords from './pages/HealthRecords';
import Comment from './pages/Prescription.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/Contactus.jsx';
import CustomNavbar from './components/Navbar';
const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>

        <Routes>
          <Route path="/" element={<HealthRecords />} />
        
          <Route path="/about" element={<Patients />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<HealthRecords />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;