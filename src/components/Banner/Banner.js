import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from './images/slider1.jpg';
import slide2 from './images/slider2.jpg';
import slide3 from './images/slider3.jpg';

const Banner = () => {
    return (
        <div className=" mb-5">
            <Carousel fade variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Book Your Appoinment</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>We Are The Best To Take Care Of You</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Meet Our Doctors Team</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;