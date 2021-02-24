import content from '../../../content';
import auth from '../../../auth';

import { useRef, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";

import MovieCard from "../MovieCard";
import "./index.css";

function AllMovies() {
  
  const favorites = useSelector(content.selectors.favorites)
  const movies = useSelector(content.selectors.allMovies)
  const loading = useSelector(content.selectors.isLoading)
  const token = useSelector(auth.selectors.login)
  const error = useSelector(content.selectors.error)
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(content.actions.getMovies(token));
  }, [dispatch]);

  return (
    <div className="movies-content">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {movies.map(({ title, image, description, id, free, video }) => (

        <MovieCard fav={favorites} key={id} id={id} image={image} title={title} description={description} free={free} video={video} />
      ))}
    </div>
  );

}

export default AllMovies;

