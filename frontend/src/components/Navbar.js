import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "./lash-01.svg";

const Navbar = ({ click }) => {
const cart = useSelector((state) => state.cart);
const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="#" className="Book">
            Book Now
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>

        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
