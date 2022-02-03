import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/medicall.png';

function Navbar() {
  return (
    <nav className='navbar sticky-top navbar-expand bg-light '>
      <div className='container '>
        <div className='col-1 mb-1 mt-1'>
          <Link to='/' alt='' className='navbar-brand'>
            <img
              src={logo}
              alt='logo'
              class='d-inline-block align-text-top navbar-logo'
            />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
        </div>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto mb-3 mb-lg-0 '>
            <li className='nav-item'>
              <NavLink
                to='/'
                alt=''
                className={(n) =>
                  n.isActive ? 'nav-link nav-item-active' : 'nav-link'
                }
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/about'
                alt=''
                className={(n) =>
                  n.isActive ? 'nav-link nav-item-active' : 'nav-link'
                }
              >
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/contact'
                alt=''
                className={(n) =>
                  n.isActive ? 'nav-link nav-item-active' : 'nav-link'
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/compliance'
                alt=''
                className={(n) =>
                  n.isActive ? 'nav-link nav-item-active' : 'nav-link'
                }
              >
                Compliance
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
