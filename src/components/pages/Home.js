import React, { Fragment } from 'react';

import Posters from '../posters/Posters';
import Search from '../posters/Search';
import Alert from '../layout/Alert';
import Hero from '../layout/Hero';

const Home = () => (
  <Fragment>
    <Hero
      title='Search your favorite movie posters!'
      subtitle='Just type in a movie or a series name and click the search button.'
    />
    <div className='container'>
      <Alert />
      <Search />
      <Posters />
    </div>
  </Fragment>
);

export default Home;
