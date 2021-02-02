import React from 'react';
import MovieCard from "../MovieCard";
import "./index.css";
import { withRouter } from "react-router-dom";

class AllMovies extends React.Component {
  constructor(movie) {

    super();
    this.state = {
      isLoading: false,
      error: null,
      movies: [],
      favorites: []
    }
  }

//   componentDidMount() {
//     this.setState({ isLoading: true });

//     fetch("https://academy-video-api.herokuapp.com/content/items")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Something went wrong! 😭");
//         }

//         return response.json();
//       })
//       .then((json) => {
//         this.setState({ movies: json });
//       })
//       .catch((e) => {
//         this.setState({ error: e.message });
//       })
//       .finally(() => {
//         this.setState({ isLoading: false });
//       });
//   }

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const loginStatus = localStorage.getItem("token") ? 
      'https://academy-video-api.herokuapp.com/content/items' 
      : 'https://academy-video-api.herokuapp.com/content/free-items/';

      const response = await fetch(loginStatus,{
        headers: {
          authorization: localStorage.getItem("token") ? localStorage.getItem("token") : ''
          }})
      const json = await response.json();
      
      
      if (!response.ok) {
        const error =
          { 404: "The thing you're looking for is not there 🤷‍♂️" }[
            response.status
          ] || "Something went wrong! 😭";

        throw new Error(error);
      }

      this.setState({ movies: json });
    } catch (e) {
      this.setState({ error: e.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  toggleFavorites=(id)=> {
    if (this.state.favorites.includes(id)) {
      const newFavorites = this.state.favorites.filter(favorite => favorite !== id )
      this.setState({favorites: newFavorites});
    } else {
      this.setState({favorites: this.state.favorites.concat(id)})
    }
  }

  isFavorite(id) {
    if (this.state.favorites.includes(id)) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { isLoading, error, movies} = this.state;
    console.log(this.props)

    return (
      <div className="movies-content">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {movies.map(({ title, image, description, id, free, video }) => (
          
          <MovieCard movie={this.props.movie} toggle={this.toggleFavorites} fav={this.isFavorite(id)} key={id} id={id} image={image} title={title} description={description} free={free} video={video}/>
        ))}
      </div>
    );
  }
}

export default withRouter(AllMovies);
