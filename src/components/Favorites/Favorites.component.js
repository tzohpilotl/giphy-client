import React from 'react';
import { connect } from 'react-redux';
import { getFavoriteIds, getFavoritesById } from '../../store/selectors';
import Gif from '../Gif';
import './Favorites.css';

const Favorites = ({ ids, favorites }) => (
  <div className="favorite-section">
    {ids.map(id => {
      const gif = favorites[id];
      return <Gif key={id} id={id} gif={gif} />;
    })}
  </div>
);

const mapStateToProps = state => ({
  ids: getFavoriteIds(state),
  favorites: getFavoritesById(state),
});

export default connect(mapStateToProps)(Favorites);
