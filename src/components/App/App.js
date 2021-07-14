import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Header/Header';
import './App.css';

const App = () => {
  return (
    <main>
      <Header />
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/:drinkId' />
        <Route path='/search' />
        <Route path='/profile' />
      </Switch>
    </main>
  );
};

export default App;
