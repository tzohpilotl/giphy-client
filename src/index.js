import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Random from './components/Random';
import Trending from './components/Trending';
import Favorites from './components/Favorites';
import { Router } from '@reach/router';
import Header from './components/Header';

const Routes = ({ onFavorite, favoriteIds, favoriteObjects }) => (
  <Router>
    <Trending path="/" onFavorite={onFavorite} favoriteIds={favoriteIds} />
    <Random path="/random" onFavorite={onFavorite} favoriteIds={favoriteIds} />
    <Favorites
      path="/Favorites"
      onFavorite={onFavorite}
      FavoriteIds={favoriteIds}
      Favorites={favoriteObjects}
    />
  </Router>
);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteObjects: [],
      favoriteIds: [],
    };
  }

  onFavorite = gif => {
    let favoriteIds = this.state.favoriteIds;
    let favoriteObjects = this.state.favoriteObjects;
    let index = favoriteIds.indexOf(gif.id);
    if (index === -1) {
      favoriteIds.push(gif.id);
      favoriteObjects.push(gif);
    } else {
      favoriteIds.splice(index, 1);
      favoriteObjects.splice(index, 1);
    }
    this.setState({
      favoriteIds,
      favoriteObjects,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Routes
          onFavorite={this.onFavorite}
          favoriteIds={this.state.favoriteIds}
          favoriteObjects={this.state.favoriteObjects}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
