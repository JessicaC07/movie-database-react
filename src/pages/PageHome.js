import MovieCard from "../components/MovieCard";
import { useEffect, useState } from 'react';
import {API_KEY } from '../globals/globals';

function PageHome() {

    const [moviesToDisplay, setMoviesToDisplay] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            
            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)

            if(res.ok) {
                const data = await res.json();
                const first12Movies = data.results.splice(0,12)
                setMoviesToDisplay(first12Movies);
            } else {
                alert('Could not load data');
            }
        }

        fetchMovies();
    }, [])
    console.log(moviesToDisplay)

    return (
        <div>
            <div>
                {/* (moviesToDisplay !== false) && > no need as start with [] */}
                {
                    moviesToDisplay.map(movieFromArray => <MovieCard key={movieFromArray.id} movie={movieFromArray} />)
                }
            </div>
        </div>
    )
}
export default PageHome