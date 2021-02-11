import './index.css';
import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import { useLocation, useParams } from "react-router-dom";
import Button from '../../components/Button';

function SingleMovie({
    token,
    favorites,
    onSuccess,
    onFailure,
    onStart,
    toggleFavorites,
    movie
}) {
    const [modalVisibility, setModalVisibility] = useState(false)
    const movieId = useParams();
    const url = `https://academy-video-api.herokuapp.com/content/items/${movieId.id}`;
    const fetchOptions = useRef({
        headers: { authorization: token },
    });

    useFetch({
        url: url,
        fetchOptions: fetchOptions.current,
        onSuccess,
        onFailure,
        onStart,
    });


    console.log(modalVisibility)
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
                        <Button fav={favorites} event={toggleFavorites} id={movieId.id}>{btnText}</Button>
                    </div>
                </div>
            </div>
        </main>
    );
}

function mapState({ content, auth }) {
    return {
        movie: content.movies.selected,
        isLoading: content.movies.isLoading,
        error: content.movies.error,
        favorites: content.favorites,
        token: auth.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onStart: () => {
            dispatch({ type: 'GET_SINGLE_MOVIE' });
        },
        onSuccess: (json) => {
            dispatch({ type: 'GET_SINGLE_MOVIE_SUCCESS', payload: json });
        },
        onFailure: (error) => {
            dispatch({ type: 'GET_SINGLE_MOVIE_FAIL', payload: error });
        },
        toggleFavorites: (id) => {
            dispatch({ type: 'TOGGLE_FAVORITE', payload: id });
        },
    };
};

export default connect(mapState, mapDispatchToProps)(SingleMovie);