import React from 'react';
import { Routes, Route } from "react-router";

import Home from "../pages/home/home";
import About from "../pages/about/about";
import Contact from '../pages/contact/contact';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<About />} path='/about' />
            <Route element={<Contact />} path='/contact' />
        </Routes>
    );
};

export default AppRoutes;