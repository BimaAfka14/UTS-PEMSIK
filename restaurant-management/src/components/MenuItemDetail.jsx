// MenuItemDetail.jsx
//import React from "react";
import { useParams, Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MenuItemDetail = ({ menuItems }) => {
  const { id } = useParams();
  // eslint-disable-next-line react/prop-types
  const menuItem = menuItems.find((item) => item.id === parseInt(id));

  if (!menuItem) return <p className="p-6">Menu item tidak ditemukan.</p>;

  return (
    <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        {menuItem.name}
      </h2>
      <div className="flex flex-col items-center space-y-4">
        <p className="text-gray-600">Kategori: {menuItem.category}</p>
        <p className="text-gray-600 font-semibold">
          Harga: Rp{menuItem.price.toLocaleString()}
        </p>
        {/* Tambahan informasi lain, seperti deskripsi menu atau gambar */}
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors">
          Tambahkan ke Keranjang
        </button>
      </div>
      <div className="mt-6 text-center">
        <Link to="/dashboard">
          <button className="bg-gray-700 text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-colors">
            Kembali ke Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuItemDetail;
