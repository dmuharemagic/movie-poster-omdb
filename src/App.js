import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PostersState from './context/posters/PostersState';
import AlertState from './context/alert/AlertState';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Poster from './components/posters/Poster';

import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import './App.sass';

const App = () => {
  return (
    <PostersState>
      <AlertState>
        <Router>
          <main>
            <Navbar title='MoviePoster' />

            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/posters/:id' component={Poster} /> />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </AlertState>
    </PostersState>
  );
};

export default App;
