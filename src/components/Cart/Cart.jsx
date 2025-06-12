import React from "react";
import { X, Trash2, Minus, Plus } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart, updateQuantity } from "../../redux/cartReducer";

const Cart = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const totalPrice = () => {
    return products
      .reduce((total, item) => total + item.quantity * item.price, 0)
      .toFixed(2);
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      dispatch(removeItem(id));
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleBackdropClick}
      />

      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-pink-50">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Shopping Cart</h2>
              <p className="text-sm text-gray-500 mt-1">
                {products.length} {products.length === 1 ? "item" : "items"} in
                your cart
              </p>
            </div>
            <button
              className="p-2 hover:bg-white rounded-full transition-colors"
              onClick={onClose}
              aria-label="Close cart"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {products.length === 0 ?
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5M7 13l-1.1 5m0 0h9.2"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Your cart is empty
                </h3>
                <p className="text-gray-500 mb-6">
                  Add some products to get started
                </p>
                <button
                  onClick={onClose}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all"
                >
                  Continue Shopping
                </button>
              </div>
            : <div className="space-y-4">
                {products.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={
                            item.img?.startsWith("http") ?
                              item.img
                            : `${process.env.VITE_REACT_APP_UPLOAD_URL}${item.img}`
                          }
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-xl"
                          onError={(e) => {
                            e.target.src = "/img/placeholder.jpg";
                          }}
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                          {item.desc?.substring(0, 80)}
                          {item.desc?.length > 80 ? "..." : ""}
                        </p>

                        {/* Quantity and Price */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center bg-white rounded-lg border border-gray-200">
                              <button
                                className="p-1.5 hover:bg-gray-50 rounded-l-lg transition-colors"
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity - 1
                                  )
                                }
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="w-3 h-3 text-gray-600" />
                              </button>
                              <span className="px-3 py-1.5 text-sm font-medium border-x border-gray-200">
                                {item.quantity}
                              </span>
                              <button
                                className="p-1.5 hover:bg-gray-50 rounded-r-lg transition-colors"
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity + 1
                                  )
                                }
                              >
                                <Plus className="w-3 h-3 text-gray-600" />
                              </button>
                            </div>
                            <span className="font-semibold text-gray-900">
                              ${(item.quantity * item.price).toFixed(2)}
                            </span>
                          </div>

                          <button
                            onClick={() => dispatch(removeItem(item.id))}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            }
          </div>

          {/* Footer */}
          {products.length > 0 && (
            <div className="p-6 border-t border-gray-200 bg-gray-50/50">
              {/* Subtotal */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-900">
                  Subtotal
                </span>
                <span className="text-2xl font-bold text-gray-900">
                  ${totalPrice()}
                </span>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-[1.02] transition-all">
                  Proceed to Checkout
                </button>

                <button
                  onClick={() => dispatch(resetCart())}
                  className="w-full text-red-600 hover:text-red-700 py-2 text-sm font-medium transition-colors"
                >
                  Clear Cart
                </button>
              </div>

              {/* Free Shipping Notice */}
              <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-green-700 text-center">
                  🚚 Free shipping on orders over $100
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
