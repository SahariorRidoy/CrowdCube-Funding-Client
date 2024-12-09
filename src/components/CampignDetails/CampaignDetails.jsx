import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const CampaignDetails = () => {
    const details=useLoaderData()
    const {title,date,amount,description,image}=details||{}
    console.log(details);
    const {user: contextUser}=useContext(AuthContext)
    const auth = getAuth();
    const [user, setUser] = useState(contextUser || null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
            } else {
                setUser(null); 
            }
        });
        return () => unsubscribe();
    }, []);
    return (
        <div className='max-w-[1320px] mx-auto text-center'>
        {details ? (
          <>
            <div className='flex justify-center'>
            <img src={image} alt={title} />
            </div>
            <h1 className='text-3xl'>Title: {title}</h1>
            <p className='text-xl'>Description: {description}</p>
            <p>Deadline: {date}</p>
            <p>Minimum Donation: ${amount}</p>
            {user ? (
                        <>
                            <p>Email: {user.email}</p>
                            <p>Username: {user.displayName || "No username set"}</p>
                        </>
                    ) : (
                        <p>Please log in to see your details.</p>
                    )}

                    <Link className='btn btn-success text-white'>Donate</Link>
          </>
        ) : (
          <p>No campaign details found.</p>
        )}
      </div>
    );
};

export default CampaignDetails;