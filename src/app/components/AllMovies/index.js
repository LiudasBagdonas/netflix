import React, { useContext } from 'react';
import MovieCard from "../MovieCard";
import ContentContext from "../../contexts/ContentContext";
import "./index.css";
import { withRouter } from "react-router-dom";

function AllMovies() {

  const {movies, favorites, error, isLoading, toggleFavorites, isFavorite} = useContext(ContentContext.context);

  return (
    <div className="movies-content">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {movies.map(({ title, image, description, id, free, video }) => (
        <MovieCard toggle={toggleFavorites} fav={isFavorite(id)} key={id} id={id} image={image} title={title} description={description} free={free} video={video} />
      ))}
    </div>
  );

}

export default AllMovies;
