// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-blue-300 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6">Restaurant Manager</h2>
      <nav className="flex flex-col space-y-4">
        
        <Link
          to="/dashboard"
          className="hover:bg-blue-400 py-2 px-3 rounded-lg flex items-center"
        >
          <FontAwesomeIcon icon={faHouse} />
          Dashboard
        </Link>
        <Link to="/menu" className="hover:bg-blue-400 py-2 px-3 rounded-lg">
          <FontAwesomeIcon icon={faBars} />
          Menu List
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
