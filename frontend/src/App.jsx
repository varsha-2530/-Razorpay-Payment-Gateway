import React from 'react';
import Product from './components/Product';
import PaymentSuccess from './components/PaymentSuccess'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Product />} />
         <Route path='/paymentSuccess' element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;
