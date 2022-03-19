import React, {useState} from 'react'
import './Navbar.css'
import { Link} from "react-router-dom";
import { Context } from '../../context/Context';
import { useContext } from "react";

const Navbar = () => {

  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false);
    }
}
  
window.addEventListener('scroll', changeBackground);


  return (
    <nav className={navbar ? 'Navbar active' : 'Navbar' }>
      <div className='Links'>
        <Link to="/" >
          <img
          className="headerLogo"
          src="https://assets.toothsi.in/logo_ba7eedb67a.svg?q=75&w=256"
          alt="Skinnsi-logo"
        />
        </Link>
        <Link to="/laserhair" style={{ textDecoration: 'none' }}>
          <div className="nav-links">
            <span className="laser-hair">laser hair removal</span>
          </div>
        </Link>
        <Link to="/dermafacial" style={{ textDecoration: 'none' }}>
          <div className="nav-links">
            <span className="dermafacial">dermafacial</span>
          </div>
        </Link>
      </div>
      <img  className='headPhone' src='https://assets.toothsi.in/headset_mic_684b6513b8.svg?q=75&w=32' alt='' />
      <div className='LoginN'>
        
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <div className="nav-links">
            <span className="loginN" onClick={handleLogout}>{user? "logout" : "login"}</span>
          </div>
        </Link>
        
      </div>
    </nav>
  )
}

export default Navbar