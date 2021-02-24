import './index.css';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import content from '../../../content';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Redirect,
    Link,
    // NavLink
} from "react-router-dom";

function MovieCard({ title, image, description, free, video, fav, id, movie }) {

    const dispatch = useDispatch();
    const toggleFavorite = () => dispatch(content.actions.toggleFavorite(id))

    const btnText = fav.includes(id) ? 'Remove ' : 'Add';
    return (
        <div className="movie-card">
            <Link to={`/movies/${id}`}>
                <div className="movie-img-box">
                    <img src={'image'} alt="movie img" />
                </div>
            </Link>
            <div className="movie-card-text-box">
                <h3>{title}</h3>
                <p className="movie-description">{description}</p>
                <Button fav={fav} event={toggleFavorite} id={id}>{btnText}</Button>
            </div>
        </div>
    );
}

export default MovieCard;