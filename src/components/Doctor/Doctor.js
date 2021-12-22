import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Doctor.css';
import { Card, Col } from 'react-bootstrap';

const Doctor = ({ doctor }) => {
    const { name, title, img, description } = doctor;
    return (
        <Col className="doctor-colum">
            <Card className=" my-2 shadow p-3 doctor-item">
                <div>
                    <img className="rounded rounded-circle shadow border border-2 border-success" src={img} alt="" />
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h6 className="text-success">{title}</h6>
                    <Card.Text>{description}</Card.Text>
                    <Button style={{ marginTop: '10px' }} className="btn btn-success">Make Appoint</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;