import React, { useState } from 'react';
import './Navbar.css'
import {Social} from '../Social/Social'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className='social-container'>
        {/* <Social/> */}
        </div>
        <ul className={menuOpen ? "menu-open" : ""}>
          <li>
            <a href="#showroom" >
             Showroom
            </a>
          </li>
          <li>
            <a href="#contact" >
              Contact
            </a>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;