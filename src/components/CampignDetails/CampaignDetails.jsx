import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const CampaignDetails = () => {
    const details=useLoaderData()
    const {title,date,amount,description,image}=details||{}
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
        <div className='max-w-[1320px] mx-auto text-center shadow-xl my-10'>
  {details ? (
    <>
      <div className='flex justify-center'>
        <img src={image} alt={title} className="max-w-full h-auto rounded-lg shadow-md" />
      </div>
      <h1 className='text-3xl font-semibold mt-6 text-teal-800'>{title}</h1>
      <p className='text-xl my-3 text-gray-700'><span className="font-medium text-teal-600">{description}</span></p>
      <p className='text-xl text-red-600'>Deadline: <span className="font-medium text-teal-600">{date}</span></p>
      <p className='my-3 text-xl '>Minimum Donation: <span className="font-medium text-teal-600">${amount}</span></p>
      
      {user ? (
        <>
          <p>Email: <span className="font-medium text-teal-600">{user.email}</span></p>
          <p>Username: <span className="font-medium text-teal-600 ">{user.displayName || "No username set"}</span></p>
        </>
      ) : (
        <p className="text-gray-600 mt-3 ">Please log in to see your details.</p>
      )}

      <div className='mt-6 pb-6'>
      <Link
        className='bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition-all'
        
      >
        Donate
      </Link>
      </div>
    </>
  ) : (
    <p className="text-gray-600">No campaign details found.</p>
  )}
</div>

    );
};

export default CampaignDetails;