import React from 'react';
import { useParams } from 'react-router';

const BookingSerial = () => {
    const { serialId } = useParams();
    return (
        <div>
            <h1>This is Booking Serial {serialId}</h1>
        </div>
    );
};

export default BookingSerial;