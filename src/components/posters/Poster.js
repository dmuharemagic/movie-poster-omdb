import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PostersContext from '../../context/posters/postersContext';

import Spinner from '../layout/Spinner';

const Poster = ({ match }) => {
  const postersContext = useContext(PostersContext);

  const { getPoster, loading, poster } = postersContext;

  useEffect(() => {
    getPoster(match.params.id);
  }, []); // eslint-disable-line

  const { Title, Released, Rated, Plot, Runtime, Genre, Director, Writer, Production, Poster } = poster;

  if (loading) return <Spinner />;

  return (
    <div className='container'>
      <Link to='/' className='button is-dark has-margin-bottom-2 has-margin-top-3'>
        <span className='icon is-large'>
          <i className='fas fa-arrow-left'></i>
        </span>
        <span>Back to search</span>
      </Link>

      <div className='box has-margin-bottom-3'>
        <article className='media'>
          <div className='media-left'>
            <figure className='image'>
              <img src={Poster} alt='' />
            </figure>
          </div>
          <div className='media-content has-margin-left-2'>
            <div className='content'>
              <div className='has-margin-top-1 has-margin-bottom-2'>
                <p class='title is-4 is-spaced'>{Title}</p>
                <strong>Rated: </strong>
                <span class='tag is-dark is-light'>{Rated}</span>
              </div>
              <div className='columns is-mobile is-multiline'>
                <div className='column is-narrow'>
                  <div>
                    <p class='subtitle is-6'>
                      <strong>Release date:</strong>{' '}
                    </p>
                    {Released}
                  </div>
                  <div className='has-margin-top-1'>
                    <p class='subtitle is-6'>
                      <strong>Runtime:</strong>{' '}
                    </p>
                    {Runtime}
                  </div>
                </div>
                <div className='column'>
                  <div>
                    <p class='subtitle is-6'>
                      <strong>Director:</strong>{' '}
                    </p>
                    {Director}
                  </div>
                  <div className='has-margin-top-1'>
                    <p class='subtitle is-6'>
                      <strong>Writer:</strong>{' '}
                    </p>
                    {Writer}
                  </div>
                </div>
              </div>

              <div className='has-margin-bottom-1'>
                <p class='subtitle is-6'>
                  <strong>Production:</strong>{' '}
                </p>{' '}
                {Production}
              </div>

              <div className='has-margin-bottom-2'>
                <p class='subtitle is-6'>
                  <strong>Genres:</strong>{' '}
                </p>{' '}
                <div className='tags'>
                  {Genre && Genre.split(', ').map(genre => <span class='tag is-light'>{genre}</span>)}
                </div>
              </div>

              <p className='has-margin-bottom-2'>{Plot}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Poster;
