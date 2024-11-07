import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, Search, Menu, User } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 lg:hidden" />
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
            >
              Nexa Shoes
            </Link>
          </div>

          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/men" className="text-gray-700 hover:text-gray-900">
              Men
            </Link>
            <Link to="/women" className="text-gray-700 hover:text-gray-900">
              Women
            </Link>
            <Link
              to="/collections"
              className="text-gray-700 hover:text-gray-900"
            >
              Collections
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Search className="h-6 w-6 text-gray-600 cursor-pointer" />
            <User className="h-6 w-6 text-gray-600 cursor-pointer" />
            <div
              className="relative cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <ShoppingBag className="h-6 w-6 text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
