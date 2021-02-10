import './index.css';
import { useLocation, useParams } from "react-router-dom";
import { useState} from 'react';

function SingleMovie() {

    const params = useParams()
    const source = 'https://academy-video-api.herokuapp.com/content/items/'+params.id;
    const [movie, setMovie] = useState([])

    const getMovie = () => (
        fetch(source)
        .then(res => res.json())
        .then(data => console.log(data))
    )
    getMovie()

// useEffect(() => {
//             const getData = async () => {
//                 const response = await fetch(giphyQuery);
//                 const data = await response.json()
//                 setGifs(data.data)
//             }
//             getData()
        
//     }, [])

    return (
       <main>
          duck
       </main>
    );
}

export default SingleMovie;