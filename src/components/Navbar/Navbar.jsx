import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);


  
  useEffect(() => {
    setIsDropdownVisible(false);
  }, [user]);
  return (
    <div className="navbar max-w-[1320px] mx-auto sticky top-0 z-50 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/all-campaign">All Campaign</NavLink>
            <NavLink to="/add-new-campaign">Add New Campaign</NavLink>
            <NavLink to="/my-campaign">My Campaign</NavLink>
            <NavLink to="/my-donation">My Donations</NavLink>
            <Link to="/">
              <p className="btn bg-[#469ee2] text-white text-xl">Login</p>
            </Link>
            <Link to="/">
              <p className="btn bg-[#469ee2] text-white text-xl">Register</p>
            </Link>
          </ul>
        </div>
        <Link to="/" className="btn px-0 btn-ghost text-lg lg:text-2xl">
          CrowdCube
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5 text-lg font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 rounded-md bg-blue-500 text-white"
                : "px-4 py-2 rounded-md"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/all-campaign"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 rounded-md bg-blue-500 text-white"
                : "px-4 py-2 rounded-md"
            }
          >
            All Campaign
          </NavLink>
          <NavLink
            to="/add-new-campaign"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 rounded-md bg-blue-500 text-white"
                : "px-4 py-2 rounded-md"
            }
          >
            Add New Campaign
          </NavLink>
          <NavLink
            to="/my-campaign"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 rounded-md bg-blue-500 text-white"
                : "px-4 py-2 rounded-md"
            }
          >
            My Campaign
          </NavLink>
          <NavLink
            to="/my-donation"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 rounded-md bg-blue-500 text-white"
                : "px-4 py-2 rounded-md"
            }
          >
            My Donations
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end relative flex items-center space-x-4">
      
        {user?.photoURL ? (
          <div
            className="w-12 h-12 rounded-full overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}
          >
            <img
              src={user.photoURL}
              alt="User Photo"
              className="w-full h-full object-cover"
            />
            {isDropdownVisible && (
              <div className="absolute right-0 lg:right-[-100px] z-10 top-8 mt-2 bg-gray-300 shadow-lg rounded-md border text-gray-800 w-48">
                <p className="px-4 py-2 font-medium border-b">
                  {user.displayName || "No Name"}
                </p>
                <button
                  onClick={logOut}
                  className="w-full text-left px-4 py-2 bg-error  text-white rounded-lg hover:opacity-70 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-xl px-4 py-2 rounded-md bg-green-500 text-white"
                  : "font-semibold text-green-500 text-xl px-4 py-2 rounded-md"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-xl px-4 py-2 rounded-md bg-green-500 text-white"
                  : "font-semibold text-green-500 text-xl px-4 py-2 rounded-md"
              }
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
