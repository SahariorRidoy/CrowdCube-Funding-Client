import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
const Register = () => {
const navigate = useNavigate()
const location =useLocation()
const [err, setErr] = useState("");
// Get from Context
const {createNewUser,setUser,updateUserProfile} =useContext(AuthContext)


// Password Validation
const validatePassword = (password) => {
  return /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password);
};



// Handle Submit
const handleSubmit=e=>{
  e.preventDefault()
  const form = new FormData(e.target);
  const name = form.get("name");
  const email = form.get("email");
  const image = form.get("image");
  const password = form.get("password");

  if (!name || !email || !image || !password) {
    toast.error('All fields are required!', { duration: 3000 });
    return;
  }

  if (!validatePassword(password)) {
    toast.error(
      "Password must be at least 6 characters long, contain at least one uppercase letter, and one lowercase letter."
    );
    return;
  } 

  createNewUser(email, password)
  .then((result) => {
    const user = result.user;
    setUser(user);
    updateUserProfile({ displayName: name, photoURL: image }).then(() => {
      toast.success("Registration Successful! Also Logged in!", { duration: 3000 });
      navigate(location?.state ? location.state : "/");
      
    });
    
  })
  .catch((error) => {
    toast.error('Registration not successful')
  });
}

  // Password Toggling
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };
    return (
        <div className="max-w-xl mx-auto border-2 bg-base-300 shadow-lg rounded-lg py-10">
      <div className='text-center'>
      <h1 className="text-[#11175D] text-4xl font-bold mb-3">
          Get started with easily register
        </h1>
        <p className="text-xl opacity-50 mb-16">
          Free register and you can enjoy it
        </p>
      </div>
      <div className=' flex justify-center'>
       <div className='text-center'>
       <form onSubmit={handleSubmit} className="relative">
          <input
            className=" lg:w-96 border-2 focus:outline-none border-[#11175D] border-opacity-30 rounded-lg px-12 py-6"
            type="text"
            name="email"
            placeholder="example@mail.com"
          />
          <p className="absolute top-[-14px] left-4 lg:left-8  bg-base-300  px-4 opacity-90 text-[#11175D]">
            Email Address
          </p>
          
          <div className="relative my-14">
            <input
              className="lg:w-96 border-2 focus:outline-none border-[#11175D] border-opacity-30 rounded-lg px-12 py-6"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <p className="absolute top-[-14px] left-4 lg:left-8  bg-base-300 px-4  text-[#11175D]">
              Full Name
            </p> 
          </div>
          <div className="relative my-14">
            <input
              className="lg:w-96 border-2 focus:outline-none border-[#11175D] border-opacity-30 rounded-lg px-12 py-6"
              type="text"
              name="image"
              placeholder="Enter your photo URL"
            />
            <p className="absolute top-[-14px] left-4 lg:left-8  bg-base-300 px-4 text-[#11175D]">
              Photo URL
            </p> 
          </div>
          

          {/* Password Field */}
          <div className="relative">
            <input
              className="lg:w-96 border-2 focus:outline-none border-[#11175D] border-opacity-30 rounded-lg px-12 py-6"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="***********"
            />
            <p className="absolute top-[-14px] left-4 lg:left-8  bg-base-300 px-4 opacity-90 text-[#11175D]">
              Password
            </p>
            {showPassword ? (
              <FaEye
                onClick={handleShowPassword}
                className="absolute text-xl left-60 lg:left-[340px] top-7 cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={handleShowPassword}
                className="absolute text-xl left-60 lg:left-[340px] top-7 cursor-pointer"
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
      
    </div>
    );
};

export default Register;