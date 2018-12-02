export const isFavorite = (state, id) => state.favorites.ids.has(id);
export const getFavoritesById = state => state.favorites.favoritesById;
export const getFavoriteIds = state => Array.from(state.favorites.ids);
export const getRandom = state => state.favorites.random;
export const getTrending = state => state.favorites.trending;
