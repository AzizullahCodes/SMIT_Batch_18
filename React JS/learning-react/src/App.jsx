import React, { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router";
import AppRoutes from './utils/routes';
import Navbar from './components/navbar/navbar';
import { publicRoutesData, privateRoutesData } from './utils/all-routes';

const App = () => {

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;