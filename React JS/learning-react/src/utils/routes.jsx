import React from 'react';
import { Routes, Route } from "react-router";

import Home from "../pages/home/home";
import About from "../pages/about/about";
import Contact from '../pages/contact/contact';
import Users from '../pages/users/users';
import CustomUser from "../pages/user/user";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<About />} path='/about' />
            <Route element={<Contact />} path='/contact' />
            <Route element={<Users />} path='/users' />
            <Route element={<CustomUser />} path='/users/:uid/details' />
        </Routes>
    );
};

export default AppRoutes;