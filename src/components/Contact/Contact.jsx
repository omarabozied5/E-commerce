import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16"
      id="contact"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center text-white">
          <span className="text-xl md:text-2xl font-semibold mb-8 block">
            BE IN TOUCH WITH US:
          </span>

          <div className="flex flex-col sm:flex-row max-w-md mx-auto mb-8 gap-4">
            <input
              type="text"
              placeholder="Enter your e-mail..."
              className="flex-1 px-6 py-4 rounded-full border-0 focus:ring-4 focus:ring-white/20 focus:outline-none text-gray-900 placeholder-gray-500"
            />
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              JOIN US
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <Link
              className="text-white/80 hover:text-pink-300 transition-colors duration-300 transform hover:scale-110"
              to="https://www.instagram.com/oddies.eg/?hl=en"
              target="_blank"
            >
              <InstagramIcon sx={{ fontSize: 28 }} />
            </Link>
            <Link
              className="text-white/80 hover:text-blue-300 transition-colors duration-300 transform hover:scale-110"
              to="https://www.facebook.com/oddies.eg"
              target="_blank"
            >
              <FacebookIcon sx={{ fontSize: 28 }} />
            </Link>
            <div className="text-white/80 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110 cursor-pointer">
              <XIcon sx={{ fontSize: 28 }} />
            </div>
            <div className="text-white/80 hover:text-green-400 transition-colors duration-300 transform hover:scale-110 cursor-pointer">
              <GoogleIcon sx={{ fontSize: 28 }} />
            </div>
            <div className="text-white/80 hover:text-red-400 transition-colors duration-300 transform hover:scale-110 cursor-pointer">
              <PinterestIcon sx={{ fontSize: 28 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
