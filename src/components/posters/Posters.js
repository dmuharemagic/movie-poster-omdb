import React, { useContext, useEffect } from 'react';
import PosterItem from './PosterItem';
import Spinner from '../layout/Spinner';

import PostersContext from '../../context/posters/postersContext';
import AlertContext from '../../context/alert/alertContext';

const Posters = () => {
  const postersContext = useContext(PostersContext);
  const alertContext = useContext(AlertContext);

  const { loading, posters, error } = postersContext;

  useEffect(() => {
    if (error) {
      alertContext.setAlert(
        'No movies or series were matched with the entered keyword. Please try to broaden your input.',
        'warning'
      );
    }
  }, [error]); // eslint-disable-line

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className='section'>
      <div className='container'>
        <div className='columns is-mobile is-multiline is-centered'>
          {posters &&
            posters.map(item => (
              <div className='column is-narrow' key={item.imdbID}>
                <PosterItem poster={item} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Posters;
