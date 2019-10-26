import React, { useState, useContext, Fragment } from 'react';

import PostersContext from '../../context/posters/postersContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const postersContext = useContext(PostersContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if (text === '') {
      alertContext.setAlert('Please enter a name of a movie or series.', 'warning');
    } else {
      postersContext.searchPosters(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <Fragment>
      <form className='field has-addons has-margin-top-2' onSubmit={onSubmit}>
        <div className='control is-expanded'>
          <input
            className='input'
            type='text'
            name='text'
            placeholder='Search posters...'
            value={text}
            onChange={onChange}
          />
        </div>
        <div className='control'>
          <button className='button is-dark'>Search</button>
        </div>
      </form>
      {postersContext.posters.length > 0 && (
        <button className='button is-warning is-light is-fullwidth' onClick={postersContext.clearPosters}>
          Clear
        </button>
      )}
    </Fragment>
  );
};

export default Search;
