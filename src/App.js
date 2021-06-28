import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';

import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';

import useGaTracker from './GATracker';

function App() {

  //Google Analytics 
  useGaTracker();

  return (
    <>
      <ScrollToTop>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/contact' exact component={Contact} />
            {/* Redirect other paths to home */}
            <Redirect to='/' />
          </Switch>
        </AnimatePresence>
      </ScrollToTop>
    </>
  );
}

export default App;
