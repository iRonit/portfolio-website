import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import ScrollToTop from './functional/ScrollToTop';
import useGaTracker from './GATracker';
import Contact from './pages/Contact';
import Home from './pages/Home';

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
