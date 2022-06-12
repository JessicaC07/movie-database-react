import MovieCard from "../components/MovieCard";
import { useEffect, useState } from 'react';
import {API_KEY } from '../globals/globals';
import { appTitle } from "../globals/globals";
import isFav from '../utilities/isFav';
import { useSelector } from 'react-redux';

function PageHome() {

	const favs = useSelector((state) => state.favs.items);

    useEffect(() => {
        document.title = `${appTitle} - Home`;
    }, []);


    const [moviesToDisplay, setMoviesToDisplay] = useState([]);
    const [filter, setFilter] = useState('popular');

    // load the movies
    useEffect(() => {
        const fetchMovies = async () => {
            
            fetch(`https://api.themoviedb.org/3/movie/${filter}?api_key=${API_KEY}&language=en-US&page=1`)

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
    }, [filter])
    

    function filterChange(e) {
        setFilter(e.target.value) // get the selected option value
    }

    return (
        <div>
            <div className="dropdown">
                <label htmlFor="display-by">Display by : </label>
                <select id="display-by" onChange={filterChange}>
                    <option value="popular">Popular</option>
                    <option value="top_rated">Top Rated</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="now_playing">Now Playing</option>
                </select>
            </div>
            <div className="grid">
                {/* (moviesToDisplay !== false) && > no need as start with [] */}
                {
                    moviesToDisplay.map(movieFromArray => <MovieCard key={movieFromArray.id} movie={movieFromArray} 
                        isFav={isFav(favs, null, movieFromArray.id)} />)
                }
            </div>
        </div>
    )
}
export default PageHome

