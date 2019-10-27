import React from 'react';

import { Link } from 'react-router-dom';

const PosterItem = ({ poster: { Poster, imdbID } }) => {
  return (
    <Link to={`/posters/${imdbID}`}>
      <div className='card'>
        <div className='card-image'>
          <figure className='image'>
            <img src={Poster === 'N/A' ? '/images/placeholder.png' : Poster} alt='' />
          </figure>
        </div>
      </div>
    </Link>
  );
};

export default PosterItem;
