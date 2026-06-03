import React from 'react';
import { Link, Outlet } from 'react-router';

const DashboardLayout = () => {
    return (
        <div>
            <h1> Dashboard Main Screen </h1>

            <ul>
                <li>
                    <Link to={'profile'}> Profile </Link>
                </li>

                <li>
                    <Link to={'contact'}> Contact </Link>
                </li>
            </ul>

            <hr />

            <Outlet />
        </div>
    );
};

export default DashboardLayout;