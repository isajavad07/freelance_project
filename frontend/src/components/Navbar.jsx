import React, { useState } from "react";
import { Link, Outlet } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/vite.svg" className="h-8" alt="Logo"/>
            <span className="text-3xl font-semibold dark:text-white">Jobs4You</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/postJob" className="text-xl text-blue-600 dark:text-blue-500 hover:underline">
                Post a Job
            </Link>
            <Link to="/register" className="text-xl text-blue-600 dark:text-blue-500 hover:underline">
                Register
            </Link>
            <Link to="/login" className="text-xl text-blue-600 dark:text-blue-500 hover:underline">
              Login
            </Link>
          </div>

          <button className="md:hidden p-2 text-gray-700 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
      </nav>

      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <ul className={`md:flex space-x-8 text-sm ${isOpen ? "block" : "hidden md:flex"}`}>
            <li><Link to="/" className="text-gray-900 dark:text-white hover:underline">Home</Link></li>
            <li><Link to="/jobs" className="text-gray-900 dark:text-white hover:underline">View Jobs</Link></li>
            <li><Link to="/company" className="text-gray-900 dark:text-white hover:underline">Company</Link></li>
            <li><Link to="#" className="text-gray-900 dark:text-white hover:underline">Features</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
