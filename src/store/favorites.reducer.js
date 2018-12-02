export const initialState = {
  ids: new Set(),
};

export const toggleFavorite = id => ({
  type: 'TOGGLE_FAVORITE',
  payload: { id },
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const isFavorite = state.ids.has(action.payload.id);
      const newIds = new Set(state.ids);

      if (isFavorite) {
        newIds.delete(action.payload.id);
      } else {
        newIds.add(action.payload.id);
      }

      return { ids: newIds };
    default:
      return state;
  }
};

export default reducer;
