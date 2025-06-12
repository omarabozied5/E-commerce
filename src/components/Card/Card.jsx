import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Card = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    const cartItem = {
      id: item.id,
      title: item?.attributes?.title || item.title,
      price: item?.attributes?.price || item.price,
      img: item?.attributes?.img?.data?.attributes?.url || item.img,
      desc: item?.attributes?.desc || item.desc,
      quantity: 1,
    };
    dispatch(addToCart(cartItem));
  };

  const calculateDiscount = () => {
    const price = item?.attributes?.price || item.price;
    const oldPrice = item.oldPrice || price + 20;
    return Math.round(((oldPrice - price) / oldPrice) * 100);
  };

  return (
    <div
      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${item.id}`} className="block">
        <div className="relative overflow-hidden">
          {/* New Badge */}
          {item?.attributes?.isNew && (
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                New Season
              </span>
            </div>
          )}

          {/* Quick Actions */}
          <div
            className={`absolute top-4 right-4 z-10 flex flex-col space-y-2 transition-all duration-300 ${
              isHovered ?
                "opacity-100 translate-x-0"
              : "opacity-0 translate-x-4"
            }`}
          >
            <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 group/btn">
              <Heart className="w-4 h-4 text-gray-600 group-hover/btn:text-red-500 transition-colors" />
            </button>
            <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 group/btn">
              <Eye className="w-4 h-4 text-gray-600 group-hover/btn:text-purple-600 transition-colors" />
            </button>
          </div>

          {/* Image Container */}
          <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden">
            <img
              src={
                item?.attributes?.img?.data?.attributes?.url ?
                  `${process.env.VITE_REACT_APP_UPLOAD_URL}${item.attributes.img.data.attributes.url}`
                : "/img/placeholder.jpg"
              }
              alt={item?.attributes?.title || item.title}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                isHovered ? "opacity-0 scale-110" : "opacity-100 scale-100"
              }`}
              onError={(e) => {
                e.target.src = "/img/placeholder.jpg";
              }}
            />
            <img
              src={
                item?.attributes?.img2?.data?.attributes?.url ?
                  `${process.env.VITE_REACT_APP_UPLOAD_URL}${item.attributes.img2.data.attributes.url}`
                : item?.attributes?.img?.data?.attributes?.url ?
                  `${process.env.VITE_REACT_APP_UPLOAD_URL}${item.attributes.img.data.attributes.url}`
                : "/img/placeholder.jpg"
              }
              alt={item?.attributes?.title || item.title}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                isHovered ? "opacity-100 scale-100" : "opacity-0 scale-110"
              }`}
              onError={(e) => {
                e.target.src = "/img/placeholder.jpg";
              }}
            />

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* Quick Add to Cart */}
          <div
            className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
              isHovered ?
                "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
            }`}
          >
            <button
              onClick={handleQuickAdd}
              className="bg-white text-gray-900 px-6 py-2.5 rounded-full font-medium shadow-lg hover:bg-gray-900 hover:text-white transition-all duration-200 flex items-center space-x-2"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Quick Add</span>
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5 sm:p-6">
          <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-purple-600 transition-colors duration-200 line-clamp-2">
            {item?.attributes?.title || item.title}
          </h3>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-xl font-bold text-gray-900">
                ${item?.attributes?.price || item.price}
              </span>
              <span className="text-sm text-gray-400 line-through">
                ${item.oldPrice || (item?.attributes?.price || item.price) + 20}
              </span>
            </div>

            {/* Discount Badge */}
            <div className="bg-red-100 text-red-600 px-2 py-1 rounded-md text-xs font-semibold">
              -{calculateDiscount()}%
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center mt-3 space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500">(4.2)</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
