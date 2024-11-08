// Header.jsx
//import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-blue-800 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-semibold">Manajemen Menu Restoran</h1>
      <div className="flex items-center space-x-3 bg-gray-800 px-4 py-2 rounded-full">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          {/* Icon profil bisa berupa huruf awal nama pengguna atau icon */}B
        </div>
        <span className="font-medium">Lark Imogen</span>
      </div>
    </div>
  );
};

export default Header;
