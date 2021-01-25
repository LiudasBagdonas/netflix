import React from 'react';
import MovieCard from "../MovieCard";
import "./index.css";

class AllMovies extends React.Component {
  state = {
    isLoading: false,
    error: null,
    movies: []
  };

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

      const response = await fetch("https://academy-video-api.herokuapp.com/content/free-items/");
      const json = await response.json();
console.log(json)
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

  render() {
    const { isLoading, error, movies } = this.state;

    return (
      <div className="movies-content">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {movies.map(({ title, image, description, id, free, video }) => (
          <MovieCard key={id} image={image} title={title} description={description} />
        ))}
      </div>
    );
  }
}

export default AllMovies;
