import React, { useState } from "react";
import googleImg from "../../assets/google.png"
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="max-w-sm lg:max-w-xl lg:mx-auto flex justify-center my-10 border-2 shadow-lg rounded-lg py-10 mx-4 lg:px-0 ">
      <div className="text-center">
        <h1 className="text-[#11175D] text-4xl font-bold mb-7">
          Login to your account!
        </h1>
        
        <form>
          <div className="relative">
            <label className="text-[#03014C] opacity-70 absolute left-16">Email Address</label>{" "}
            <br />
            <input
              className="w-80 border-2 focus:outline-none border-[#11175D] border-opacity-30 px-8 rounded-md py-3 mb-6"
              type="text"
              name="email"
              placeholder="example@mail.com"
            />
          </div>
          <br />
          <div className="relative">
            <label className="text-[#03014C] opacity-70 absolute left-16">Password</label>
            <br />
            <input
              className="w-80 border-2 focus:outline-none border-[#11175D] border-opacity-30 px-8 rounded-md  py-3"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
            />
            {showPassword ? (
              <FaEye
                onClick={handleShowPassword}
                className="absolute text-xl left-[280px] top-10 cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={handleShowPassword}
                className="absolute text-xl left-[280px] top-10 cursor-pointer"
              />
            )}
          </div>
          <br />
          <button
            className=" mt-4 btn bg-[#24a062] text-xl rounded-full text-white px-[100px] mb-4 hover:opacity-70"
            type="submit"
          >
            Login
          </button>
          <p>or</p>
          <div className="hover:opacity-50 cursor-pointer w-60 flex gap-3 mx-auto border-[#11175D] rounded-full items-center py-2 border-2 pl-7 pr-10 border-opacity-30 my-4">
          <img src={googleImg} alt="" />
          
          <button>Login with Google</button>
        </div>
          <p className="text-sm text-[#03014C] mb-10">
            Don't have an account?
            <span className="text-[#EA6C00] font-bold">
              <Link to="/register" className="underline">  Register</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
