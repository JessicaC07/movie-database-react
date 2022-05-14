import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import likeIcon from '../media/like-icon.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MovieCard from "../components/MovieCard";



function PageFavourites() {

    const favs = useSelector((state) => state.favs.items);

    useEffect(() => {
        document.title = `${appTitle} - Favourites`;
    }, []);

    return (
        <div className="favourite-content">
            {favs.length < 1 ?
                <>
                <h1 className="no-movies-title">You don't have any movies in your favourites.</h1>
                <p>To add movies to your favourites, click <img src={likeIcon} alt="like icon with a heart shape"/> on the movie cards.</p>
                <p className="browse-movies"><Link to="/">Browse Movies</Link></p> </> :

                <div className="grid">
                    {favs.map(movieFromArray => {
                        return <MovieCard key={movieFromArray.id}
                                      movie={movieFromArray}
                                      isFav={true} />
                    })}
                </div>}

        </div>
    )
}
export default PageFavourites