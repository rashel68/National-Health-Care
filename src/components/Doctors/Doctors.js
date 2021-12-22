import React from 'react';
import { Row } from 'react-bootstrap';
import useDoctors from '../../hooks/useDoctors';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors] = useDoctors([]);
    return (
        <div className="container my-2">
            <h2 className="text-success">-- Doctors Team --</h2>
            <Row xs={1} md={3} className="g-4 my-2">
                {
                    doctors.map(doctor => <Doctor doctor={doctor} key={doctor.id}></Doctor>)
                }
            </Row>

        </div>
    );
};

export default Doctors;