import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuStyle = {
        textDecoration: 'none',
        color: 'white',
        margin: '0px 8px'
    }
    return (
        <Navbar bg="success" variant="dark">
            <Container>
                <Navbar.Brand className="fw-bold">National Health Care</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="mx-auto">
                        <Nav.Link><Link style={menuStyle} to="/home">Home</Link></Nav.Link>
                        <Nav.Link ><Link style={menuStyle} to="/services">Services</Link></Nav.Link>
                        <Nav.Link ><Link style={menuStyle} to="/doctors">Doctors Team</Link></Nav.Link>
                        <Nav.Link ><Link style={menuStyle} to="/about">About Us</Link></Nav.Link>
                        <Nav.Link ><Link style={menuStyle} to="/login">Login</Link></Nav.Link>
                    </Nav>
                    <Navbar.Text>
                        Signed in as: <a href="#login"> </a>
                    </Navbar.Text>
                </Navbar.Collapse>


            </Container>
        </Navbar>
    );
};

export default Header;