import './index.css';
import Button from '../Button';
import {useContext} from 'react';
import ContentContext from "../../contexts/ContentContext";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Redirect,
    Link,
    // NavLink
  } from "react-router-dom";

function MovieCard({ title, image, description, free, video, fav, toggle, id, movie }) {

    const {setSelected} = useContext(ContentContext.context);
    const btnText = fav ? 'Remove ' : 'Add';

    return (
        <div className="movie-card">
            <Link id={id} to={`/movies/${id}`}>
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