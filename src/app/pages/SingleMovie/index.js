import './index.css';
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import AuthContext from "../../contexts/AuthContext";
import ContentContext from "../../contexts/ContentContext";
import Button from '../../components/Button';


function SingleMovie() {

    // const [movie, setMovie] = useState([]);
    const [modalVisibility, setModalVisibility] = useState(false);
    const {selected, favorites, isFavorite, toggleFavorites, movie} = useContext(ContentContext.context);

    console.log(movie)

    const btnText = favorites.includes(movie.id) ? 'Remove ' : 'Add';
    return (
        <main className='single-movie-main'>
        {modalVisibility ?
            <div className='single-movie-modal' onClick={() => setModalVisibility(false)}>
                <iframe id='selectedIframe' className='single-movie-iframe' src={movie.video} alt={movie.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title={movie.title} allowFullScreen></iframe>
            </div>
            : ''}
        <div className='single-movie-box'>
            <div className='single-movie-img-box'>
                <img className='single-movie-img' src={movie.image}></img>
            </div>
            <div className='single-movie-text-box'>
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                <div className='single-movie-buttons-box'>
                    <Button watch={setModalVisibility}>Watch</Button>
                    <Button fav={isFavorite(movie.id)} event={toggleFavorites} id={movie.id}>{btnText}</Button>
                </div>
            </div>
        </div>
    </main>
    );
}

export default SingleMovie;