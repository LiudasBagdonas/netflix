import { useRef } from "react";
import { connect } from "react-redux";

import useFetch from "../../hooks/useFetch";

import { Card } from "../../components";

function Content({
  loading,
  movies,
  token,
  onSuccess,
  onFailure,
  onStart,
  favorites,
  toggleFavorite,
}) {
  const fetchOptions = useRef({
    headers: { authorization: token },
  });

  useFetch({
    url: "https://academy-video-api.herokuapp.com/content/items",
    fetchOptions: fetchOptions.current,
    onSuccess,
    onFailure,
    onStart,
  });

  return (
    <>
      <article className="content">
        <section className="content__wrapper">
          <div className="content__movies">
            {loading && <p>Loading...</p>}

            {movies.map((movie) => {
              return (
                <Card
                  key={movie.id}
                  image={movie.image}
                  title={movie.title}
                  description={movie.description}
                  id={movie.id}
                  toggleFavorite={toggleFavorite}
                  favorites={favorites}
                />
              );
            })}
          </div>
        </section>
      </article>
    </>
  );
}

function mapState({ content, auth }) {
  return {
    favorites: content.favorites,
    movies: content.movies.data,
    loading: content.movies.isLoading,
    token: auth.token
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

export default connect(mapState, mapDispatchToProps)(Content);