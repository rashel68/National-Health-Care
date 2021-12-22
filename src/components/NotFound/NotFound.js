import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="my-5">
            <h1 style={{ fontSize: '250px', fontWeight: 'bold' }}>404</h1>
            <h5>Sorry . . page does not exist. Back to <Link to="/home">Home</Link></h5>
        </div>
    );
};

export default NotFound;