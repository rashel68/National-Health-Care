import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    const fStyle = {
        textDecoration: 'none',
        color: 'rgb(1 30 19)',
        fontWeight: 'bold'
    }
    return (
        <div className="border-top border-3 border-success py-3 text-start bg-light">
            <div className="container">
                <h3 className="text-success mb-5 text-center">National Health Care</h3>
                <Row md={4}>
                    <Col>
                        <p><Link style={fStyle} to="/home"> Home</Link></p>
                        <p><Link style={fStyle} to="/services"> Services</Link></p>
                        <p><Link style={fStyle} to="/doctors">Doctors Team</Link></p>
                        <p><Link style={fStyle} to="/about"> About Us</Link></p>
                    </Col>

                    <Col>
                        <p><Link style={fStyle} to="/home">Appoint Now</Link></p>
                        <p><Link style={fStyle} to="/services">Appoint Events</Link></p>
                        <p><Link style={fStyle} to="/doctors">Careers</Link></p>
                        <p><Link style={fStyle} to="/about">Contact</Link></p>
                    </Col>

                    <Col>
                        <p><Link style={fStyle} to="/home"> Blog</Link></p>
                        <p><Link style={fStyle} to="/services"> Terms and Condition</Link></p>
                        <p><Link style={fStyle} to="/doctors"> Privacy Policy</Link></p>
                        <p><Link style={fStyle} to="/sitemap"> Sitemap</Link></p>
                    </Col>

                    <Col>
                        <h4>Address</h4>
                        <p> Society-67, Mohammadpur, Dhaka, Bangladesh.</p>
                        <p> 017200XXXXX</p>
                        <p> abcdefg@gmail.com</p>
                    </Col>
                </Row>

            </div>
            <h6 className="text-center my-3 text-muted">Everything all right reserved on National Health Care</h6>

        </div>
    );
};

export default Footer;