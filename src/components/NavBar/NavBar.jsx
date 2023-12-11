import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import { GrStatusInfo } from "react-icons/gr";

const NavBar = () => {
  const [menuToogle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  //add event listener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });
  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/*HEADER TOP START*/}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>
      {/*HEADER BOTTOM*/}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/*LOGO*/}
            <div className="logo-search-acte">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            {/*MENU AREA*/}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToogle ? "active" : ""}`}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              {/*SIGN IN & LOGIN*/}
              <Link to="sign-up" className="lab-btn me-3 d-none d-md-block">
                Create Account
              </Link>
              <Link to="login" className="d-none d-md-block">
                Log In
              </Link>

              {/*MENU TOGGLER*/}
              <div
                onClick={() => setMenuToggle(!menuToogle)}
                className={`header-bar d-lg-none ${menuToogle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/*SOCIAL TOGGLER*/}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <GrStatusInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
