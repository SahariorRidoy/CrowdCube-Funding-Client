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
    <div className="w-[1320px] mx-auto flex justify-center mt-20">
      <div>
        <h1 className="text-[#11175D] text-4xl font-bold mb-7">
          Login to your account!
        </h1>
        <div className="hover:opacity-50 cursor-pointer w-60 flex gap-3 border-[#11175D] rounded-lg items-center py-5 border-2 pl-7 pr-10 border-opacity-30 mb-8">
          <img src={googleImg} alt="" />
          
          <button>Login with Google</button>
        </div>
        <form>
          <div className="relative">
            <label className="text-[#03014C] opacity-70">Email Address</label>{" "}
            <br />
            <input
              className="border-b-2 focus:outline-none border-[#11175D] border-opacity-30 pr-12 py-6 mb-14"
              type="text"
              name="email"
              placeholder="example@mail.com"
            />
          </div>
          <br />
          <div className="relative">
            <label className="text-[#03014C] opacity-70">Password</label>
            <br />
            <input
              className=" border-b-2 focus:outline-none border-[#11175D] border-opacity-30  pr-12 py-6"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
            />
            {showPassword ? (
              <FaEye
                onClick={handleShowPassword}
                className="absolute text-xl left-52 top-12 cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={handleShowPassword}
                className="absolute text-xl left-52 top-12 cursor-pointer"
              />
            )}
          </div>
          <br />
          <button
            className=" mt-12 btn bg-[#5F35F5] text-xl rounded-full text-white px-[85px] mb-9 hover:opacity-70"
            type="submit"
          >
            Login
          </button>
          <p className="text-sm text-[#03014C] ml-6 mb-24">
            Don't have an account?{" "}
            <span className="text-[#EA6C00] font-bold">
              <Link to="/register">Register</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
