import { useRef } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import content from '../../../content';
import auth from '../../../auth';

import useFetch from "../../hooks/useFetch";

import { Card } from "../../components";

function Content({
  // loading,
  // movies,
  // token,
  onSuccess,
  onFailure,
  onStart,
  // favorites,
  toggleFavorite,
}) {
console.log('DUCK')
  const favorites = useSelector(content.selectors.favorites)
  const movies = useSelector(content.selectors.allMovies)
  const loading = useSelector(content.selectors.isLoading)
  const token = useSelector(auth.selectors.login)

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

// function mapState({ content, auth }) {
//   return {
//     favorites: content.favorites,
//     movies: content.movies.data,
//     loading: content.movies.isLoading,
//     token: auth.token
//   };
// }

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

export default connect(null, mapDispatchToProps)(Content);