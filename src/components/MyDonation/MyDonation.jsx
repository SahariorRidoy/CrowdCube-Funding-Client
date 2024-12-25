import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../Loading/Loading";

const MyDonations = () => {
  const { user } = useContext(AuthContext);
  const [donations, setDonations] = useState([]);
   const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch(
          `https://crowdfunding-theta-three.vercel.app/myDonations?email=${user.email}`
        );
        const data = await response.json();
        setDonations(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchDonations();
  }, [user]);
  if(loading){
    return <Loading></Loading>
}
  return (
    <div className="max-w-[1320px] mx-auto my-10">
      <h1 className="text-3xl font-semibold text-center mb-8 text-teal-800">
        My Donations
      </h1>
      {donations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {donations.map((donation) => (
            
            <div
              key={donation._id}
              className="bg-white shadow-lg rounded-lg p-5 text-center border-2"
            >
                <img src={donation.donorImage} alt=""  className="rounded"/>
              <h2 className="text-xl font-bold text-teal-600 mt-10">{donation.title}</h2>
              
              <p className=" mt-2 font-medium text-error">
                Donated Amount: ${donation.amount}
              </p>
              
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center">
          You haven't made any donations yet.
        </p>
      )}
    </div>
  );
};

export default MyDonations;
