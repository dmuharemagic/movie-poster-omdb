import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='content has-text-centered'>
        <p>
          <strong>MoviePoster</strong> &copy; 2019
        </p>
        Made with
        <span className='icon is-medium'>
          <i className='fas fa-heart has-text-dark' />
        </span>
        &{' '}
        <span className='icon is-medium'>
          <i className='fa fa-coffee has-text-dark' />
        </span>{' '}
        in Zagreb, Croatia
      </div>
    </footer>
  );
};

export default Footer;
