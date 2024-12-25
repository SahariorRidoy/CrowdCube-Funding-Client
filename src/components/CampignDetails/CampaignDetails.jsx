import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from "firebase/compat/app";
import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const CampaignDetails = () => {
  const auth = getAuth();
  const details = useLoaderData();
  const { title, date, amount, description, image } = details || {};
  const { user: contextUser } = useContext(AuthContext);
  const [user, setUser] = useState(contextUser || null);
  const [donationSuccess, setDonationSuccess] = useState(false);
  const navigate=useNavigate()
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
  const isDeadlineOver = new Date(date) < new Date();

  // Donate part
  const handleDonate = async () => {
    if (isDeadlineOver) {
      Swal.fire({
        icon: "warning",
        title: "Donation not allowed",
        text: "The deadline for this campaign has passed. You cannot donate.",
        confirmButtonText: "Okay",
      });
      return;
    }

    const donationData = {
      campaignId: details._id,
      title,
      amount,
      donorImage:image,
      donorEmail: user.email,
      donorName: user.displayName || "Anonymous",
      date: new Date(),
    };

    try {
      const response = await fetch("https://crowdfunding-theta-three.vercel.app/donate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donationData),
      });
      const result = await response.json();
      if (response.ok) {
        setDonationSuccess(true);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Donation successful!",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/all-campaign')
      } else {
        Swal.fire({
          icon: "warning",
          title: "You have already donated to this Campaign",
          confirmButtonText: "Okay",
        });
      }
    } catch (error) {
      console.error("Error during donation:", error);
      toast.error("An error occurred while donating. Please try again.");
    }
  };

  return (
    <div className="max-w-[1320px] mx-auto text-center shadow-xl px-6 lg:px-0 mb-10">
      {details ? (
        <>
          <div className="flex justify-center">
            <img
              src={image}
              alt={title}
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <h1 className="text-3xl font-semibold mt-6 text-teal-800">{title}</h1>
          <p className="text-xl my-3 text-gray-700 lg:max-w-xl mx-auto">
            <span className="">{description}</span>
          </p>
          <p className="text-xl text-red-600">
            Deadline: <span className="font-medium text-teal-600">{date}</span>
          </p>
          <p className="my-3 text-xl ">
            Minimum Donation:{" "}
            <span className="font-medium text-teal-600">${amount}</span>
          </p>

          {user ? (
            <>
              <p>
                Email:{" "}
                <span className="font-medium text-teal-600">{user.email}</span>
              </p>
              <p>
                Username:{" "}
                <span className="font-medium text-teal-600 ">
                  {user.displayName || "No username set"}
                </span>
              </p>
            </>
          ) : (
            <p className="text-gray-600 mt-3 ">
              Please log in to see your details.
            </p>
          )}

          <div className="mt-6 pb-6">
            <button
              onClick={handleDonate}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition-all"
            >
              Donate
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-600">No campaign details found.</p>
      )}
    </div>
  );
};

export default CampaignDetails;
