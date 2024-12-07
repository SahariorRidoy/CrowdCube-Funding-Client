import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);
  console.log(user)
  return (
    <div className="navbar bg-base-100 max-w-[1320px] mx-auto">
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
            <NavLink to="/">All Campaign</NavLink>
            <NavLink to="/">Add New Campaign</NavLink>
            <NavLink to="/">My Campaign</NavLink>
            <NavLink to="/">My Donations</NavLink>
            <Link to="/">
              <p className="btn bg-[#469ee2] text-white text-xl">Login</p>
            </Link>
            <Link to="/">
              <p className="btn bg-[#469ee2] text-white text-xl">Register</p>
            </Link>
          </ul>
        </div>
        <Link to="/" className="btn px-0 btn-ghost text-lg lg:text-2xl">
          Crowd Funding
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5 text-lg font-semibold">
          <NavLink to="/" className={({ isActive }) => 
        isActive ? "px-4 py-2 rounded-md bg-blue-500 text-white" : "px-4 py-2 rounded-md"
      }>
            Home
          </NavLink>
          <NavLink to="/all-campaign" className={({ isActive }) => 
        isActive ? "px-4 py-2 rounded-md bg-blue-500 text-white" : "px-4 py-2 rounded-md"
      }>
            All Campaign
          </NavLink>
          <NavLink to="/add-new-campaign" className={({ isActive }) => 
        isActive ? "px-4 py-2 rounded-md bg-blue-500 text-white" : "px-4 py-2 rounded-md"
      }>
            Add New Campaign
          </NavLink>
          <NavLink to="/my-campaign" className={({ isActive }) => 
        isActive ? "px-4 py-2 rounded-md bg-blue-500 text-white" : "px-4 py-2 rounded-md"
      }>
            My Campaign
          </NavLink>
          <NavLink to="/my-donation" className={({ isActive }) => 
        isActive ? "px-4 py-2 rounded-md bg-blue-500 text-white" : "px-4 py-2 rounded-md"
      }>
            My Donations
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
  {user?.photoURL && (
    <img
      className="w-12 h-12 rounded-full"
      src={user.photoURL}
      alt="User Photo"
    />
  )}
  {user?.email ? (
    <button
      onClick={logOut}
      className="btn btn-error text-white ml-2"
    >
      Log Out
    </button>
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
