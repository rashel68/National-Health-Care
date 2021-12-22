import React from 'react';
import { Carousel, Row } from 'react-bootstrap';
import useDoctors from '../../hooks/useDoctors';
import useServices from '../../hooks/useServices';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Doctor from '../Doctor/Doctor';
import Service from '../Service/Service';

const Home = () => {
    const [services] = useServices([]);
    const [doctors] = useDoctors([]);
    return (
        <div>
            <Banner></Banner>
            <div className="container my-3">
                <h2 className="text-success">-- Our Services --</h2>
                <Row xs={1} md={3} className="g-4 mt-0 my-3" >
                    {
                        services.slice(0, 3).map(service => <Service service={service} key={service.id}></Service>)
                    }
                </Row>

                {/* slider part  */}
                <Row>
                    <h2 className="mt-5 mb-3 text-success">-- Our Doctors --</h2>
                    <Carousel fade variant="dark" controls={false} className="pb-4">
                        <Carousel.Item>
                            <Row xs={1} md={3} className="g-4 mt-0 my-3">
                                {
                                    doctors.slice(0, 3).map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                                }
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row xs={1} md={3} className="g-4 mt-0 my-3">
                                {
                                    doctors.slice(3, 6).map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                                }
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row xs={1} md={3} className="g-4 mt-0 my-3">
                                {
                                    doctors.slice(6, 9).map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                                }
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <About></About>
            </div>
        </div>
    );
};

export default Home;