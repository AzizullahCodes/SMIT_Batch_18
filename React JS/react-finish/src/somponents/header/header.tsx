import React, { FC } from 'react';

interface HeaderTypes {
    userName: string;
    title: string;
};

const Header: FC<HeaderTypes> = ({ title, userName }) => {

    return (
        <div>
            <h1> {title} </h1>
            <h2> {userName} </h2>
        </div>
    );
};

export default Header;