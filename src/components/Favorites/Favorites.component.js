import React, { Component } from 'react';
import Gif from '../Gif';
import './Favorites.css';

class Favorites extends Component {
  render() {
    return (
      <div className="favorite-section">
        {this.props.favorites.map(gif => (
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
