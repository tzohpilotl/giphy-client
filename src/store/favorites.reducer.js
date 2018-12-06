export const initialState = {
  favoritesById: {},
  ids: new Set(), // The Set structure will hold unique elements only
};

// Action creator
// Remember, an action is just a plain object with at least a `type` property
export const toggleFavorite = (id, data) => ({
  type: 'TOGGLE_FAVORITE',
  payload: { id, data },
});

// Reducer
// A reducer is just a switch statement to choose what will be done to the state
// based on the action's type
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const isFavorite = state.ids.has(action.payload.id);
      // Make a copy of the mutable parts of your state
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
