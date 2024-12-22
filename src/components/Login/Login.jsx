import React, { useContext, useState } from "react";
import googleImg from "../../assets/google.png"
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Typewriter } from 'react-simple-typewriter'

const Login = () => {
  const navigate=useNavigate()
  const location = useLocation();
const {userLogin,handleGoogleLogin,setUser}=useContext(AuthContext)
// Google Login
const submitGoogleLogin = (e) => {
  e.preventDefault();
  handleGoogleLogin()
    .then((result) => {
      const user = result.user;
      setUser(user)
      toast.success("Login Successful!", {
        duration: 4000,
      });
      setTimeout(() => {
        navigate(location?.state ? location.state : "/");
      }, 500);
    })
    .catch((error) => {
      
      
    });
};
// Login
const handleLogIn = (e) => {
e.preventDefault();
const form = e.target;
const email = form.email.value;
const password = form.password.value;

userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user)
        toast.success("Login Successful!", {
          duration: 2000,
        });
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 500);
      })
      .catch((error) => {
        toast.error('Invalid email or password. Please Provide valid information.', {
          duration: 4000,
        });
      });
}


  // Password toggling 
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="max-w-sm lg:max-w-xl lg:mx-auto  border-2 bg-base-300 shadow-lg rounded-lg py-10 mx-4 lg:px-0 ">
      <div className="text-center">
        <h1 className="text-[#11175D] w-full overflow-hidden text-4xl font-bold mb-7">
        <Typewriter
          words={['Login to your account!']}
          
          
          cursorStyle="|"
          typeSpeed={70}
          delaySpeed={1000}
        />
 </h1>
      </div>
      <div className="text-center flex justify-center">
        
          
       
        
        <form onSubmit={handleLogIn}>
          <div className="relative">
            <label className="text-[#03014C] w-full opacity-70 absolute right-20">Email Address</label>{" "}
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
            <label className="text-[#03014C] w-full opacity-70 absolute right-24">Password</label>
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
          
          <button onClick={submitGoogleLogin}>Login with Google</button>
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
