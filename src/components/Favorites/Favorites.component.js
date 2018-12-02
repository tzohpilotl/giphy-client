import React, { Component } from 'react';
import Gif from '../Gif';
import './Favorites.css';

class Favorites extends Component {
  render() {
    return (
      <div className="Favorite-section">
        {this.props.Favorites.map(gif => (
          <Gif
            key={gif.id}
            info={gif}
            onFavorite={this.props.onFavorite}
            favoriteIds={this.props.favoriteIds}
          />
        ))}
      </div>
    );
  }
}

export default Favorites;
