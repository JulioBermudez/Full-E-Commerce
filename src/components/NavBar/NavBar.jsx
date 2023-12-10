import { useState } from "react"
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png"

const NavBar = () => {
    const [menuToogle, setMenuToggle]= useState(false);
    const [socialToggle, setSocialToggle]= useState(false);
    const [headerFixed, setHeaderFixed]= useState(false);

    //add event listener
    window.addEventListener("scroll", ()=>{
        if (window.scrollY > 200) {
            setHeaderFixed(true)
        }else{
            setHeaderFixed(false)
        }
    })
  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp":""}`}>
        {/*HEADER TOP START*/}
        <div className={`header-top  ${socialToggle ? "open" : ""}`}>
            <div className="container">
                <div className="header-top-area">
                    <Link to="/signup" className="lab-btn me-3"><span>Create Account</span></Link>
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
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavBar