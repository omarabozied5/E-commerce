import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Search,
  User,
  Heart,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = useSelector((state) => state.cart.products);

  useEffect(() => {
    if (products.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [products]);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        {/* Top Bar */}
        <div className="border-b border-gray-100 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-10 text-sm">
              <div className="hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-1 cursor-pointer hover:text-purple-600 transition-colors">
                  <img src="/img/en.png" alt="Language" className="w-4 h-3" />
                  <ChevronDown className="w-3 h-3" />
                </div>
                <div className="flex items-center space-x-1 cursor-pointer hover:text-purple-600 transition-colors">
                  <span>USD</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </div>
              <div className="text-xs text-gray-600">
                Free shipping on orders over $100
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ?
                <X className="w-6 h-6" />
              : <Menu className="w-6 h-6" />}
            </button>

            {/* Left Navigation - Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group"
                to="/products/1"
              >
                Women
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group"
                to="/products/2"
              >
                Men
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group"
                to="/products/3"
              >
                Children
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </Link>
            </div>

            {/* Logo */}
            <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
              <Link
                className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                to="/"
              >
                ODDIES STORE
              </Link>
            </div>

            {/* Right Navigation - Desktop */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                to="/#about"
              >
                About
              </Link>
              <Link
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                to="/#contact"
              >
                Contact
              </Link>
              <Link
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                to="/#category"
              >
                Stores
              </Link>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all">
                <Search className="w-5 h-5" />
              </button>
              <button className="hidden sm:block p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all">
                <User className="w-5 h-5" />
              </button>
              <button className="hidden sm:block p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all">
                <Heart className="w-5 h-5" />
              </button>
              <button
                className={`relative p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all ${
                  btnIsHighlighted ? "animate-pulse bg-purple-100" : ""
                }`}
                onClick={handleCartToggle}
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {products.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {products.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-6 space-y-4">
              <Link
                className="block text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"
                to="/products/1"
                onClick={closeMobileMenu}
              >
                Women
              </Link>
              <Link
                className="block text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"
                to="/products/2"
                onClick={closeMobileMenu}
              >
                Men
              </Link>
              <Link
                className="block text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"
                to="/products/3"
                onClick={closeMobileMenu}
              >
                Children
              </Link>
              <div className="border-t border-gray-100 pt-4 space-y-4">
                <Link
                  className="block text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"
                  to="/"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <Link
                  className="block text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"
                  to="/#about"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link
                  className="block text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"
                  to="/#contact"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
                <Link
                  className="block text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"
                  to="/#category"
                  onClick={closeMobileMenu}
                >
                  Stores
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Cart Overlay */}
      <Cart isOpen={isCartOpen} onClose={handleCartClose} />
    </>
  );
};

export default Navbar;
