import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar is-dark' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/'>
          <span className='icon'>
            <i className='fas fa-film'></i>
          </span>
          <h1>{title}</h1>
        </Link>
      </div>

      <div className='navbar-menu'>
        <div className='navbar-end'>
          <Link to='/' className='navbar-item'>
            Home
          </Link>
          <Link to='/about' className='navbar-item'>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
