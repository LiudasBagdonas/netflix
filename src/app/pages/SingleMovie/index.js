import content from '../../../content';
import auth from '../../../auth';

import './index.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import Button from '../../components/Button';

function SingleMovie() {

    const favorites = useSelector(content.selectors.favorites)
    const movie = useSelector(content.selectors.selected)
    const token = useSelector(auth.selectors.login)
    
    const [modalVisibility, setModalVisibility] = useState(false)
    const movieId = useParams();
    const dispatch = useDispatch();

    const toggleFavorite = () => dispatch(content.actions.toggleFavorite(movieId.id));

    useEffect(() => {
        dispatch(content.actions.getSingleMovie(movieId, token))
    }, [dispatch])

    const btnText = favorites.includes(movieId.id) ? 'Remove ' : 'Add';
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
                        <Button fav={favorites} event={toggleFavorite} id={movieId.id}>{btnText}</Button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SingleMovie;