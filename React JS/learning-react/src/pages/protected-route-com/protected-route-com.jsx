import React from 'react';
import { Outlet, Navigate } from 'react-router';

const ProtectedRouteCom = () => {

    const isAuthenticated = JSON.parse(localStorage.getItem('userAuthStatus')) || false;

    return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} replace />
};

export default ProtectedRouteCom;