import React from 'react';
import HeartFilled from './heart-filled.png';
import Heart from './heart.png';
import './Gif.css';

const Gif = ({ info, onFavorite, favoriteIds }) => {
  const title = info.title;
  const imageUrl = info.images.original.url;
  const isFavorite = favoriteIds.indexOf(info.id) > -1;
  return (
    <div className="image-section" onClick={() => onFavorite(info)}>
      <div className="favorite-icon">
        <img src={isFavorite ? HeartFilled : Heart} alt="Heart" />
      </div>
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default Gif;
