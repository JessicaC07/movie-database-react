import MovieCard from "../components/MovieCard";
import { useEffect, useState } from 'react';
import {API_KEY } from '../globals/globals';

function PageHome() {

    const [moviesToDisplay, setMoviesToDisplay] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)

            .then(response => response.json())
            .then(data => {
                const first12Movies = data.results.splice(0,12)
                setMoviesToDisplay(first12Movies);
            })
            .catch((error) => {
                alert('Error: ' + error);
            })
        }

        fetchMovies();
    }, [])
    console.log(moviesToDisplay)

    return (
        <div className="grid">
            {/* (moviesToDisplay !== false) && > no need as start with [] */}
            {
                moviesToDisplay.map(movieFromArray => <MovieCard key={movieFromArray.id} movie={movieFromArray} />)
            }
        </div>
    )
}
export default PageHome