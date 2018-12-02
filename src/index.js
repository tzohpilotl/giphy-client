import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import Random from './components/Random';
import Trending from './components/Trending';
import Favorites from './components/Favorites';
import { Router } from '@reach/router';
import Header from './components/Header';

const Routes = () => (
  <Router>
    <Trending path="/" />
    <Random path="/random" />
    <Favorites path="/favorites" />
  </Router>
);

const App = () => (
  <div>
    <Header />
    <Routes />
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
