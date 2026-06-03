import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import DashboardLayout from './screens/dashboard/dashboard';
import Profile from "./screens/dashboard/profile/profile";
import Contact from "./screens/dashboard/contact/contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route path='profile' element={<Profile />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;