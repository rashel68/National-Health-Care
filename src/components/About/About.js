import React from 'react';
import { Col, Row } from 'react-bootstrap';
import about_pic from './about.jpg'

const About = () => {
    return (
        <div className="container my-5">
            <Row>
                <Col>
                    <img style={{ borderRadius: '60% 10% 70% 60%/170% 80% 32% 40%' }} src={about_pic} alt="" />
                </Col>
                <Col className="text-start fw-bold">
                    <h2 className="text-success">About Us --</h2>
                    <h1 className="text-dark">We Are The Best To Take Care Of You</h1>
                    <p className="text-secondary">Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.</p>
                </Col>
            </Row>

        </div>
    );
};

export default About;