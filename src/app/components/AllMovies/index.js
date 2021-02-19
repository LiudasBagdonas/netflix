import content from '../../../content';
import auth from '../../../auth';

import { useRef } from "react";
import { connect } from "react-redux";

import MovieCard from "../MovieCard";
import "./index.css";
import useFetch from '../../hooks/useFetch';

function AllMovies({
  loading,
  movies,
  token,
  error,
  onSuccess,
  onFailure,
  onStart,
  favorites,
  toggleFavorite
}) {
  const fetchOptions = useRef({ headers: { authorization: token }});

  useFetch({
    url: token ? 
    "https://academy-video-api.herokuapp.com/content/items" : 
    "https://academy-video-api.herokuapp.com/content/free-items",
    fetchOptions: fetchOptions.current,
    onSuccess,
    onFailure,
    onStart,
  });

  return (
    <div className="movies-content">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {movies.map(({ title, image, description, id, free, video }) => (

        <MovieCard toggle={toggleFavorite} fav={favorites} key={id} id={id} image={image} title={title} description={description} free={free} video={video} />
      ))}
    </div>
  );

}

function mapState(state) {
  return {
    favorites: content.selectors.favorites(state),
    movies: content.selectors.allMovies(state),
    loading: content.selectors.isLoading(state),
    token: auth.selectors.login(state),
    error: content.selectors.error(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onStart: () => {
      dispatch({ type: content.types.GET_MOVIES });
    },
    onSuccess: (json) => {
      dispatch({ type: content.types.GET_MOVIES_SUCCESS, payload: json });
    },
    onFailure: (error) => {
      dispatch({ type: content.types.GET_MOVIES_FAILURE, payload: error });
    },
    toggleFavorite: (id) => {
      dispatch({type: content.types.TOGGLE_FAVORITE, payload: id})
    }
  };
}

export default connect(mapState, mapDispatchToProps)(AllMovies);
