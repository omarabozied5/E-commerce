import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import "./Contact.scss";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US: </span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <Link  className="link" to="https://www.instagram.com/oddies.eg/?hl=en" target="_blank">
            <InstagramIcon />
          </Link>
          <Link  className="link" to="https://www.facebook.com/oddies.eg" target="_blank">
            <FacebookIcon />
          </Link>
          <XIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;
