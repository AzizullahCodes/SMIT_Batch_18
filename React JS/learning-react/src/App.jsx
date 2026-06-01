import React, { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router";
import AppRoutes from './utils/routes';
import Navbar from './components/navbar/navbar';
import { publicRoutesData, privateRoutesData } from './utils/all-routes';
// import { useNavigate } from "react-router";

const App = () => {

  const [authStatus, setAuthStatus] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('userAuthStatus') != null) {
      const fetchAuthStatus = localStorage.getItem('userAuthStatus');
      const actualJson = JSON.parse(fetchAuthStatus);
      console.log('Auth status: ', actualJson);
      setAuthStatus(actualJson);
    }

    else {
      localStorage.setItem('userAuthStatus', JSON.stringify(false));
      setAuthStatus(false);
      console.log('Auth status set to false: ', authStatus);
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      {/* {
        (authStatus == true)
          ?
          (
            <>
              <Navbar />
              <PrivateRoutes />
            </>
          )
          :
          (<PublicRoutes />)
      } */}
    </BrowserRouter>
  );
};

export default App;