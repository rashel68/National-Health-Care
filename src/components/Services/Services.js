import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices([]);
    return (
        <div className="container my-3">
            <h2 className="text-success">-- Our Services --</h2>
            <Row xs={1} md={3} className="g-4 my-2">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;