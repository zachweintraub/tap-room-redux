import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import '../App.css';
import { connect } from 'react-redux';


function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Route exact path='/' component={Home}/>
      </BrowserRouter>
    </div>
  );
}

export default connect()(App);
