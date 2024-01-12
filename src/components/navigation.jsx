import React , {useState} from 'react';
import { FaSearch } from "react-icons/fa";
import "../navigation.css";

function Navigation() {
  // icon animation
 const [active, setActive] = useState("nav__menu");
 const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const navToggle = () => {
    setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
    //togglerIcon

    toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon("nav__toggler");
  };
  return (
   <>
   <div className='me'>
   <nav className="nav">
    <a href="#" id="" className="nav__brand"><img src="./public/Screenshot 2024-01-11 101041.png" alt="" className='ai' /></a>

    <ul className={active}>
     <li className="nav__item"><a href="#" className='nav__link'>Home</a></li> 
     <li className="nav__item"><a href="#" className='nav__link'>About Us </a></li>
     <li className="nav__item"><a href="#" className='nav__link'>Collection </a></li>
     <li className="nav__item"><a href="#" className='nav__link'>visit Us</a></li>
     <li className="nav__item"><a href="#" className='nav__link'>Support Us</a></li>
     <button className="" id="me"><a href="#" className=''>Log in</a></button>

    </ul>

    <div className={toggleIcon} onClick={navToggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
  </nav>
   </div>
  <div className='ae'>
  
    <h1>
Wisdom Library space to 
read, learn, grow and connect.
     </h1>
    
<p className='ae2'>Open every day 9:00 am - 10:00 pm</p>
<input type="text"  placeholder='Search a book' className='ae1'/><button> <FaSearch /></button>
  </div>
  </>
  );
}

export default Navigation; 