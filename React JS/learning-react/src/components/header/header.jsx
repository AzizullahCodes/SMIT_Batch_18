import React from 'react';
import "./header.css";

const Header = (props) => {
    // console.log('Props of header component: ', props);
    const { screenName } = props;
    return (
        <h1 className='header'> {`${screenName} screen`} </h1>
    );
};

export default Header;