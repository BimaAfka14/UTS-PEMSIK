// MenuList.jsx
//import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MenuList = ({ menuItems }) => {
  return (
    <ul className="space-y-4">
      {menuItems.map((item) => (
        <li
          key={item.id}
          className="border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <Link
            to={`/menu/${item.id}`}
            className="flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-gray-600">{item.category}</p>
            </div>
            <span className="text-lg font-semibold text-blue-600">
              Rp{item.price.toLocaleString()}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
