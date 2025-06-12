// Category.jsx

import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div
      className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white"
      id="category"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-6">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg h-64 lg:h-72">
              <img
                src="/img/EKS_0176.png"
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <button className="absolute bottom-6 left-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Link className="text-white no-underline" to="/products/1">
                  Sale
                </Link>
              </button>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg h-64 lg:h-72">
              <img
                src="/img/EKS_0339.png"
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <button className="absolute bottom-6 left-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Link className="text-white no-underline" to="/products/1">
                  Women
                </Link>
              </button>
            </div>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-4">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg h-64 lg:h-full">
              <img
                src="/img/EKS_0236.png"
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <button className="absolute bottom-6 left-6 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Link className="text-white no-underline" to="/products/1">
                  Accessories
                </Link>
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-64 lg:h-72">
              <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/img/new.png"
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <button className="absolute bottom-4 left-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Link className="text-white no-underline" to="/products/1">
                    NEW SEASON
                  </Link>
                </button>
              </div>

              <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/img/EKS_9689.png"
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <button className="absolute bottom-4 left-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Link className="text-white no-underline" to="/products/1">
                    MEN
                  </Link>
                </button>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg h-64 lg:h-72">
              <img
                src="/img/EKS_9866.png"
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <button className="absolute bottom-6 left-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Link className="text-white no-underline" to="/products/1">
                  SHOES
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
