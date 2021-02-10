import './index.css';
import Button from '../Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Redirect,
    Link,
    // NavLink
  } from "react-router-dom";

function MovieCard({ title, image, description, free, video, fav, toggle, id, movie }) {

    const btnText = fav.includes(id) ? 'Remove ' : 'Add';
    return (
        <div className="movie-card">
            <Link to={`/movies/:${id}`}>
                <div className="movie-img-box">
                    <img src={'image'} alt="movie img" />
                </div>
            </Link>
            <div className="movie-card-text-box">
                <h3>{title}</h3>
                <p className="movie-description">{description}</p>
                <Button fav={fav} event={toggle} id={id}>{btnText}</Button>
            </div>
        </div>
    );
}

export default MovieCard;