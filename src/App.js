import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/portfolio-website' exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
