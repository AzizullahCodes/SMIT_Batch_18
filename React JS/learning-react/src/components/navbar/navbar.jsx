import React, { useState, memo } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router';
import "./navbar.css";

const Navbar = () => {
    // console.log('Navbar component is rendering!');
    const [openNavSecond, setOpenNavSecond] = useState(false);

    return (
        <MDBNavbar expand='lg' dark bgColor='dark'>
            <MDBContainer fluid>
                <MDBNavbarBrand className='link'>Navbar</MDBNavbarBrand>
                <MDBNavbarToggler
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenNavSecond(!openNavSecond)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar open={openNavSecond}>
                    <MDBNavbarNav>
                        <MDBNavbarLink>
                            <Link to={'/'} className='link'> Home </Link>
                        </MDBNavbarLink>

                        <MDBNavbarLink>
                            <Link to={'/about'} className='link'> About </Link>
                        </MDBNavbarLink>

                        <MDBNavbarLink>
                            <Link to={'/contact'} className='link'> Contact </Link>
                        </MDBNavbarLink>

                        <MDBNavbarLink>
                            <Link to={'/users'} className='link'> Users </Link>
                        </MDBNavbarLink>

                        <MDBNavbarLink>
                            <Link to={'/todo'} className='link'> Todo </Link>
                        </MDBNavbarLink>

                        <MDBNavbarLink>
                            <Link to={'/services'} className='link'> Services </Link>
                        </MDBNavbarLink>

                        <MDBNavbarLink>
                            <Link to={'/slider'} className='link'> Slider </Link>
                        </MDBNavbarLink>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
};

export default memo(Navbar);