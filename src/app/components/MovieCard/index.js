import './index.css';
import Button from '../Button';

function MovieCard({ title, image, description, free, video, fav, toggle, id}) {

const btnText = fav ? 'Remove ' : 'Add';

    return (
        <div className="movie-card">
            <div className="movie-img-box">
                <img src={'image'} alt="movie img" />
            </div>
            <div className="movie-card-text-box">
                <h3>{title}</h3>
                <p className="movie-description">{description}</p>
                <Button fav={fav} event={toggle} id={id}>{btnText}</Button>
            </div>
        </div>
    );
}

export default MovieCard;