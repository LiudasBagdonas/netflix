const INITIAL_STATE = {
  movies: {
    data: [],
    isLoading: false,
    error: null,
    selected: []
  },
  favorites: [],
};

function reducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    // All movies
    case "GET_MOVIES":
      return { ...state, movies: { ...INITIAL_STATE.movies, isLoading: true } };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        movies: { ...INITIAL_STATE.movies, data: action.payload },
      };
    case "GET_MOVIES_FAILURE":
      return {
        ...state,
        movies: { ...INITIAL_STATE.movies, error: action.payload },
      };
      // Single movie
      case "GET_SINGLE_MOVIE":
        return { ...state, movies: { ...INITIAL_STATE.movies, isLoading: true } };
      case "GET_SINGLE_MOVIE_SUCCESS":
        return {
          ...state,
          movies: { ...INITIAL_STATE.movies, selected: action.payload },
        };
      case "GET_SINGLE_MOVIE_FAILURE":
        return {
          ...state,
          movies: { ...INITIAL_STATE.movies, error: action.payload },
        };

    case "TOGGLE_FAVORITE":
      const toggleFavorite = (id) => {
        if (state.favorites.includes(id)) {
          return state.favorites.filter((favorite) => favorite !== id);
        } else {
          return state.favorites.concat(id);
        }
      };
      return { ...state, favorites: toggleFavorite(action.payload) };

    default:
      return state;
  }
}

export default reducer;