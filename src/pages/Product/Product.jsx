import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useParams } from "react-router-dom";
import useFetch from "../../components/hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const dispatch = useDispatch();

  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {loading ?
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600"></div>
          <p className="ml-4 text-gray-600">Loading...</p>
        </div>
      : <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
              <img
                src={
                  process.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              <img
                src={
                  process.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 cursor-pointer object-cover transition-colors ${
                  selectedImg === "img" ? "border-indigo-600" : (
                    "border-gray-200"
                  )
                }`}
              />
              <img
                src={
                  process.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 cursor-pointer object-cover transition-colors ${
                  selectedImg === "img2" ? "border-indigo-600" : (
                    "border-gray-200"
                  )
                }`}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {data?.attributes?.title}
              </h1>
              <span className="text-4xl font-bold text-indigo-600">
                ${data?.attributes?.price}
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {data?.attributes?.desc}
            </p>

            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-900">
                Quantity:
              </span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <button
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-8 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-colors"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: data.id,
                      title: data.attributes.title,
                      desc: data.attributes.desc,
                      price: data.attributes.price,
                      img: data.attributes.img.data.attributes.url,
                      quantity,
                    })
                  )
                }
              >
                <AddShoppingCartIcon />
                <span>ADD TO CART</span>
              </button>

              <div className="flex space-x-4">
                <div className="flex-1 border border-gray-300 hover:border-gray-400 py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer">
                  <FavoriteBorderIcon />
                  <span>ADD TO WISH LIST</span>
                </div>
                <div className="flex-1 border border-gray-300 hover:border-gray-400 py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer">
                  <BalanceIcon />
                  <span>ADD TO COMPARE</span>
                </div>
              </div>
            </div>

            <div className="border-t pt-6 space-y-2">
              <span className="block text-sm text-gray-600">
                <span className="font-medium">Vendor:</span> Polo
              </span>
              <span className="block text-sm text-gray-600">
                <span className="font-medium">Product Type:</span> T-Shirt
              </span>
              <span className="block text-sm text-gray-600">
                <span className="font-medium">Tag:</span> T-Shirt, Women, Top
              </span>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-4">
              <span className="block text-sm font-medium text-gray-900 cursor-pointer hover:text-indigo-600 transition-colors">
                DESCRIPTION
              </span>
              <hr className="border-gray-200" />
              <span className="block text-sm font-medium text-gray-900 cursor-pointer hover:text-indigo-600 transition-colors">
                ADDITIONAL INFORMATION
              </span>
              <hr className="border-gray-200" />
              <span className="block text-sm font-medium text-gray-900 cursor-pointer hover:text-indigo-600 transition-colors">
                FAQ
              </span>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Product;
