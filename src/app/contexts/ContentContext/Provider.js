import { useState, useEffect, useContext } from "react";
import Context from "./context";

import AuthContext from "../AuthContext";


function Provider({ children }) {

    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [selected, setSelected] = useState([]);
    const [movie, setMovie] = useState([]);

    const { loginState } = useContext(AuthContext.context);

    useEffect(async () => {

        setIsLoading(true);
        try {
            const loginStatus = localStorage.getItem("token") ?
                'https://academy-video-api.herokuapp.com/content/items'
                : 'https://academy-video-api.herokuapp.com/content/free-items/';

            const response = await fetch(loginStatus, {
                headers: {
                    authorization: localStorage.getItem("token") ? localStorage.getItem("token") : ''
                }
            })
            const json = await response.json();

            if (!response.ok) {
                const error =
                    { 404: "The thing you're looking for is not there 🤷‍♂️" }[
                    response.status
                    ] || "Something went wrong! 😭";

                throw new Error(error);
            }
            setMovies(json);
        }
        catch (e) {
            setError(e.message);
        }
        finally {
            setIsLoading(false);
        }
    }, [loginState])

    useEffect(async () => {

        if (selected.length > 0) {
            setIsLoading(true);
            try {
                const url = `https://academy-video-api.herokuapp.com/content/items/${selected}`;

                const response = await fetch(url, {
                    headers: {
                        authorization: localStorage.getItem("token") ? localStorage.getItem("token") : ''
                    }
                })
                const json = await response.json();

                if (!response.ok) {
                    const error =
                        { 404: "The thing you're looking for is not there 🤷‍♂️" }[
                        response.status
                        ] || "Something went wrong! 😭";

                    throw new Error(error);
                }
                setMovie(json);
            }
            catch (e) {
                setError(e.message);
            }
            finally {
                setIsLoading(false);
            }
        }
    }, [selected])

    const toggleFavorites = (id) => {
        if (favorites.includes(id)) {
            const newFavorites = favorites.filter(favorite => favorite !== id)
            setFavorites(newFavorites);
        } else {
            setFavorites(favorites.concat(id))
        }
    }

    const isFavorite = (id) => {
        if (favorites.includes(id)) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <Context.Provider value={{ movies, movie, favorites, error, isLoading, toggleFavorites, isFavorite, setSelected, selected }}>
            {children}
        </Context.Provider>
    );
}

export default Provider;
