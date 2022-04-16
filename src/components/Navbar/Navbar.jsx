import "./Navbar.css";
import { Link } from "react-router-dom";
import btnWishlist from "../../assets/icons/btn-heart2.svg";
import btnProfile from "../../assets/icons/btn-profile.svg";
import btnSearch from "../../assets/icons/btn-search.svg";
import btnCart from "../../assets/icons/btn-cart.svg";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar container-2">
        <div>
          <Link to="/">
            <span className="header-title">Furnbuy</span>
          </Link>
        </div>
        <ul className="navbar-left">
          <li>
            <Link to="/products">
              <span className="header-pills">Products</span>
            </Link>
          </li>
          <li className="search-bar">
            <button className="btn-search-bar">
              <img className="btn-icon-img" src={btnSearch} />
            </button>
            <input
              className="search-bar-input"
              type="text"
              placeholder="Search products..."
            />
          </li>
        </ul>
        <ul className="navbar-right">
          <li>
            <Link to="/wishlist">
              <div className="badge bd-sm">
                <img
                  className="badge-icon"
                  src={btnWishlist}
                  alt="heart icon"
                />
                <span className="bd-count">2</span>
              </div>
            </Link>
          </li>
          <li>
            <a href="/pages/Authentication/logout/logout.html">
              <div>
                <img
                  className="badge-icon"
                  src={btnProfile}
                  alt="profile icon"
                />
              </div>
            </a>
          </li>
          <li>
            <Link to="/cart">
              <div className="badge bd-sm">
                <img className="badge-icon" src={btnCart} alt="cart icon" />
                <span className="bd-count">3</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Navbar };
