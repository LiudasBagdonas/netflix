import * as types from './actionTypes';

export const getMovies = (token) => async (dispatch) => {
  // type: types.GET_MOVIES,
  try {
    dispatch({ type: types.GET_MOVIES });

    const response = await fetch(token ? 
        "https://academy-video-api.herokuapp.com/content/items" : 
        "https://academy-video-api.herokuapp.com/content/free-items",
        { headers: { authorization: token }}
        );
    const json = await response.json();

    if (!response.ok) {
      const error =
        { 404: "The thing you're looking for is not there 🤷‍♂️" }[
          response.status
        ] || "Something went wrong! 😭";

      throw new Error(error);
    }

    dispatch({ type: types.GET_MOVIES_SUCCESS, payload: json });
  } catch (e) {
    dispatch({ type: types.GET_MOVIES_FAILURE });
  }
};

export const getSingleMovie = (id, token) => async (dispatch) => {
  const movieId = id;
  try {
    dispatch({ type: types.GET_SINGLE_MOVIE });

    const response = await fetch(`https://academy-video-api.herokuapp.com/content/items/${movieId.id}`,
        { headers: { authorization: token }}
        );
    const json = await response.json();

    if (!response.ok) {
      const error =
        { 404: "The thing you're looking for is not there 🤷‍♂️" }[
          response.status
        ] || "Something went wrong! 😭";

      throw new Error(error);
    }

    dispatch({ type: types.GET_SINGLE_MOVIE_SUCCESS, payload: json });
  } catch (e) {
    dispatch({ type: types.GET_SINGLE_MOVIE_FAILURE });
  }
};

export const toggleFavorite = (id) => async (dispatch) => {
  dispatch({type: types.TOGGLE_FAVORITE, payload: id})
};