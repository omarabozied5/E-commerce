import React, { useState , useEffect , useRef} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [ btnIsHighlited , setBtnIsHighlited ]=useState(false)
  const [open, setOpen] = useState(false);

  
  
  const products = useSelector(state=> state.cart.products)
  useEffect(()=>
  { 
    if (products.length === 0){
      return;
    }
    setBtnIsHighlited(true);

   const timer =  setTimeout(() => {
      setBtnIsHighlited(false)
    }, 300);

    return(()=>
    {
      clearTimeout(timer)
    })
  } , [products])


 

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            ODDIES STORE
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              HomePage
            </Link>
          </div>
          <div className="item" >
            <Link className="link" to={"/#about"}>
              About
            </Link>
            
           </div>
          <div className="item">
            <Link className="link" to={"/#contact"}>
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/#category"}>
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className= {`cartIcon ${btnIsHighlited ? 'bump' : ''}`} onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
