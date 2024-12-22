import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='min-h-screen text-center flex flex-col justify-center items-center'>
             <h2 className='text-9xl text-error font-bold'>Oops!</h2>
            <p className='my-6 text-2xl font-medium'>404 - PAGE NOT FOUND</p>
            <Link to="/" className='btn btn-success text-white'>Back to HomePage</Link>
        </div>
    );
};

export default ErrorPage;