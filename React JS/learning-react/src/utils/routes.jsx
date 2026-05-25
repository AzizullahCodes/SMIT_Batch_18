import React from 'react';
import { Routes, Route } from "react-router";

import Home from "../pages/home/home";
import About from "../pages/about/about";
import Contact from '../pages/contact/contact';
import Users from '../pages/users/users';
import CustomUser from "../pages/user/user";
import Todo from '../pages/todo/todo';
import Services from '../pages/services/services';
import Slider from '../pages/slider/slider';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<About />} path='/about' />
            <Route element={<Contact />} path='/contact' />
            <Route element={<Users />} path='/users' />
            <Route element={<CustomUser />} path='/users/:uid/details' />
            <Route element={<Todo />} path='/todo' />
            <Route element={<Services />} path='/services' />
            <Route element={<Slider />} path='/slider' />
        </Routes>
    );
};

export default AppRoutes;