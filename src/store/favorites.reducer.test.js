import reducer, { initialState, toggleFavorite } from './favorites.reducer';

describe('Favorites reducer', () => {
  describe('when an unknown action is dispatched', () => {
    it('returns the current state', () => {
      expect(reducer(initialState, {})).toEqual(initialState);
    });
  });

  describe('when a TOGGLE_FAVORITE action is created', () => {
    const id = 2;
    const toggleAction = toggleFavorite(id);
    const populatedState = { ...initialState, ids: new Set(initialState.ids) };
    populatedState.ids.add(id);

    describe('when the favorite does not exist', () => {
      it('adds the favorite', () => {
        expect(reducer(initialState, toggleAction)).toEqual(populatedState);
      });
    });

    describe('when the favorite already exist', () => {
      it('removes the favorite', () => {
        expect(reducer(populatedState, toggleAction)).toEqual(initialState);
      });
    });
  });
});

describe('TOGGLE_FAVORITE action creator', () => {
  const id = 2;

  it('provides the correct action', () => {
    expect(toggleFavorite(2)).toEqual({
      type: 'TOGGLE_FAVORITE',
      payload: { id },
    });
  });
});
