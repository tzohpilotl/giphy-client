import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isFavorite } from '../../store/selectors';
import { toggleFavorite } from '../../store/favorites.reducer';
import HeartFilled from './heart-filled.png';
import Heart from './heart.png';
import './Gif.css';

export const Gif = ({ id, isFavorite, gif, toggleFavorite }) => {
  const title = gif.title;
  const imageUrl = gif.images.original.url;

  return (
    <div className="image-section" onClick={() => toggleFavorite(id, gif)}>
      <div className="favorite-icon">
        <img src={isFavorite ? HeartFilled : Heart} alt="Heart" />
      </div>
      <img src={imageUrl} alt={title} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  isFavorite: isFavorite(state, ownProps.id),
});

const mapDispatchToProps = dispatch => ({
  toggleFavorite: bindActionCreators(toggleFavorite, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gif);
