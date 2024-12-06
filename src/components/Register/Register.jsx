import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
            Register Page 
            <br />
            <Link to="/login" className='text-orange-500'>Login</Link>
        </div>
    );
};

export default Register;