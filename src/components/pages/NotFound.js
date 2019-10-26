import React from 'react';

const NotFound = () => {
  return (
    <div className='container'>
      <div className='notification is-warning has-margin-top-2'>
        <p>
          <strong>Not found</strong>
        </p>
        <p>The page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
