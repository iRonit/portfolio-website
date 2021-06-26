import React from 'react';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <>
      <Router basename="/portfolio-website">
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
      </Router>
    </>
  );
}

export default App;
