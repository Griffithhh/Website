import React from 'react';
import {Link} from "react-scroll";
import './Header.css'
import header_logo from '../../assets/header_logo.png'
import { IoIosArrowDown } from "react-icons/io";
const Header = () => {
  return (
      <nav className="container">
          <img src={header_logo} alt="" className="logo"/>


          <ul>
              <li><Link to='main' smooth={true} offset={0} duration={500}>Main</Link></li>
              <li><Link to='features' smooth={true} offset={-150} duration={500}>Features</Link></li>
              <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
              <li><Link to='notes' smooth={true} offset={-190} duration={500}>Notes</Link></li>
              <li><Link to='opinions' smooth={true} offset={-210} duration={500}>Opinions</Link></li>
              <li>
                 <Link to='contact' smooth={true} offset={0} duration={500} className='btn'> Leave a review <IoIosArrowDown className='icon'/></Link></li>
          </ul>
      </nav>
  );
};

export default Header;