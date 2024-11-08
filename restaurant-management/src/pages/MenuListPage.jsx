// MenuListPage.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import MenuList from "../components/MenuList";

const MenuListPage = () => {
  const [menuItems] = useState([
    { id: 1, name: "Nasi Goreng", category: "Makanan", price: 20000 },
    { id: 2, name: "Ayam Goreng", category: "Makanan", price: 25000 },
    { id: 3, name: "Es Teh", category: "Minuman", price: 5000 },
  ]);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Daftar Menu</h1>
      <p className="text-gray-600 mb-4">
        Pilih menu dari daftar di bawah ini untuk melihat detailnya.
      </p>
      <MenuList menuItems={menuItems} />
    </div>
  );
};

export default MenuListPage;
