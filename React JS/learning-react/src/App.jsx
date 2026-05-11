import React from 'react';
import { BrowserRouter } from "react-router";
import AppRoutes from './utils/routes';
import Navbar from './components/navbar/navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;