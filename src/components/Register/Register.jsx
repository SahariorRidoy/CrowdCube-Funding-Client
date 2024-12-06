import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };
    return (
        <div className="max-w-xl mx-auto flex justify-center my-10 border-2 shadow-lg rounded-lg py-10">
      <div className='text-center'>
        <h1 className="text-[#11175D] text-4xl font-bold mb-3">
          Get started with easily register
        </h1>
        <p className="text-xl opacity-50 mb-16">
          Free register and you can enjoy it
        </p>
        <form className="relative">
          <input
            className="border-2 focus:outline-none border-[#11175D] border-opacity-30 rounded-lg px-12 py-6"
            type="text"
            name="email"
            placeholder="example@mail.com"
          />
          <p className="absolute top-[-12px] left-20 lg:left-36 bg-white px-4 opacity-90 text-[#11175D]">
            Email Address
          </p>
          <br />
          <div className="relative">
            <input
              className="border-2 focus:outline-none border-[#11175D] border-opacity-30 rounded-lg px-12 py-6 my-14"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <p className="absolute top-[45px] left-20 lg:left-36 opacity-90 bg-white px-4  text-[#11175D]">
              Full Name
            </p> 
          </div>
          <br />
          <div className="relative">
            <input
              className="border-2 focus:outline-none border-[#11175D] border-opacity-30 rounded-lg px-12 py-6"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="***********"
            />
            <p className="absolute top-[-12px] left-20 lg:left-36 bg-white px-4 opacity-90 text-[#11175D]">
              Password
            </p>
            {showPassword ? (
              <FaEye
                onClick={handleShowPassword}
                className="absolute text-xl left-72 lg:left-[360px] top-7 cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={handleShowPassword}
                className="absolute text-xl left-72 lg:left-[360px] top-7 cursor-pointer"
              />
            )}
          </div>
          <br />
          <button
            className=" mt-2 btn bg-[#24a062] text-xl rounded-full text-white px-[100px] mb-6 hover:opacity-70"
            type="submit"
          >
            Register
          </button>
          <p className="text-sm text-[#03014C] mb-6">
            Already have an account?  
            <span className="text-[#EA6C00] font-bold">
              <Link to="/login" className='underline'>  Login</Link>
            </span>
          </p>
        </form>
      </div>
      
    </div>
    );
};

export default Register;