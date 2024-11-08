import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import MenuListPage from "./pages/MenuListPage";
import MenuItemDetail from "./components/MenuItemDetail";

const App = () => {
  const menuItems = [
    { id: 1, name: "Nasi Goreng", category: "Makanan", price: 20000 },
    { id: 2, name: "Ayam Goreng", category: "Makanan", price: 25000 },
    { id: 3, name: "Es Teh", category: "Minuman", price: 5000 },
  ];

  return (
    <Router>
      <div className="flex h-screen w-full">
        {" "}
        {/* Tambahkan w-full */}
        <Sidebar />
        <div className="flex-1 flex flex-col w-full">
          {" "}
          {/* w-full untuk lebar penuh */}
          <Header />
          <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/menu" element={<MenuListPage />} />
              <Route
                path="/menu/:id"
                element={<MenuItemDetail menuItems={menuItems} />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
