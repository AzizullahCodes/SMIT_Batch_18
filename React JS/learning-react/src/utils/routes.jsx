import React from 'react';
import { Routes, Route } from "react-router";

import Home from "../pages/home/home";
import About from "../pages/about/about";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<About />} path='/about' />
        </Routes>
    );
};

export default AppRoutes;