import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../images/stamp.jpg';
import { useAuth } from '../contexts/AuthContext';
// import { useData } from '../contexts/DataContext';


const Header = () => {

    const { currentUser } = useAuth();
    // const [state, dispatch] = useData();

    const isUser = currentUser && currentUser.emailVerified;

    return (
        <>
            <Navbar sticky="top" className="custom-navbar">

            <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
            />

                <Nav className="container-fluid">

                    <Nav.Item>
                        <Navbar.Brand href="/">
                            <img 
                                src={logo}
                                width="35"
                                height="35"
                                className="d-inline-block align-top"
                                alt="Remind Me"
                            />
                        </Navbar.Brand>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/signup" className="add-reminder">
                            <i className="far fa-calendar-plus" />
                            <span> Add Reminder</span>
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/login">
                            <i className="fas fa-list-alt"></i>
                            <span> My Reminders</span>
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/login">
                            <i className="fas fa-cog"></i>
                            <span> Configure</span>
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="ml-auto">
                        {
                            isUser ?
                            <NavDropdown alignRight title="User" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/dashboard">View Profile</NavDropdown.Item>
                                <NavDropdown.Item href="/update-profile">Update Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/logout">Sign Out</NavDropdown.Item>
                            </NavDropdown> : 
                            <NavDropdown alignRight title="Guest" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
                                <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                            </NavDropdown>
                        }
                    </Nav.Item>

                </Nav>
            </Navbar>
        </>
    );
}

export default Header;
