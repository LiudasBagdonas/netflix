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
function mapState({ content, auth }) {
  return {
    favorites: content.favorites,
    movies: content.movies.data,
    loading: content.movies.isLoading,
    token: auth.token,
    error: content.movies.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onStart: () => {
      dispatch({ type: "GET_MOVIES" });
    },
    onSuccess: (json) => {
      dispatch({ type: "GET_MOVIES_SUCCESS", payload: json });
    },
    onFailure: (error) => {
      dispatch({ type: "GET_MOVIES_FAILURE", payload: error });
    },
    toggleFavorite: (id) => {
      dispatch({type: "TOGGLE_FAVORITE", payload: id})
    }
  };
}

export default connect(mapState, mapDispatchToProps)(AllMovies);
