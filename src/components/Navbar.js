import React, { useState } from 'react';
import { Link } from 'gatsby';
import { HiMenuAlt2 } from 'react-icons/hi';

import logo from '../assets/french79-logo.png';

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <h5>Coding things ...</h5>
          </Link>
          <button className='nav-btn' onClick={() => setShow(!show)}>
            {/* <HiMenuAlt2 /> */}
            <img src={logo} alt='French79' />
          </button>
        </div>

        <div className={show ? 'nav-links show-links' : 'nav-links'}>
          <Link
            to='/about'
            className='nav-link'
            activeClassName='active-link'
            onClick={() => setShow(false)}
          >
            about
          </Link>
          <Link
            to='/projects'
            className='nav-link'
            activeClassName='active-link'
            onClick={() => setShow(false)}
          >
            projects
          </Link>

          <div className='nav-link contact-link'>
            <Link to='/' className='btn' onClick={() => setShow(false)}>
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
