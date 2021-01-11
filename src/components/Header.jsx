import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/stamp.jpg';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/"><img src={logo} width="35"
                    height="35"
                    className="d-inline-block align-top"
                    alt="Remind Me"/></Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}

export default Header;
