import React, { useState, useEffect } from 'react';

const FavoriteButton = ({ petId }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorited(favorites.includes(petId));
  }, [petId]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites.includes(petId)) {
      const newFavorites = favorites.filter(id => id !== petId);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setIsFavorited(false);
    } else {
      favorites.push(petId);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorited(true);
    }
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorited ? 'Unfavorite' : 'Favorite'}
    </button>
  );
};

export default FavoriteButton;
