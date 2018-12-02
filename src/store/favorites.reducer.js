export const initialState = {
  favoritesById: {},
  ids: new Set(),
};

export const toggleFavorite = (id, data) => ({
  type: 'TOGGLE_FAVORITE',
  payload: { id, data },
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const isFavorite = state.ids.has(action.payload.id);
      const newIds = new Set(state.ids);
      const newFavorites = { ...state.favoritesById };

      if (isFavorite) {
        delete newFavorites[action.payload.id];
        newIds.delete(action.payload.id);
      } else {
        newFavorites[action.payload.id] = action.payload.data;
        newIds.add(action.payload.id);
      }

      return { ...state, ids: newIds, favoritesById: newFavorites };
    default:
      return state;
  }
};

export default reducer;
