import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, description, imgUrl } = service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Link to={`/BookingSerial/${id}`}><Button style={{ marginTop: '10px' }} className="btn btn-danger">Booking Serial</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;