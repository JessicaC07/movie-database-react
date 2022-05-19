// import placeholder from '../media/placeholder-movie.jpeg';
import noPoster from '../media/no-movie-poster.jpg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFav, deleteFav } from '../features/favs/favsSlice';
import FavButton from '../components/FavButton';


function MovieCard({movie, isFav}) {

    const dispatch = useDispatch();

    const numberCharacter = 180;

    function handleFavClick(addToFav, obj){
        if(addToFav === true){
            dispatch(addFav(obj));
        }else{
            dispatch(deleteFav(obj));
        }   
    }

    function movieOverview(movieOverview){
        if (movieOverview.length > numberCharacter) {
            return movieOverview.substring(0,numberCharacter) + "...";
        } else {
            return movieOverview;
        }
    }

  return (
    <div className="card-container">
        <div className="movie-poster">
            {movie.poster_path === false ?
                <img src={noPoster} alt="empty movie poster" /> :
                <img className="movie-poster-image"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
            }

            
            <div className="info">

                <div className="top-text-container">
                    <div className="top-card">
                        {isFav ? 
                        <FavButton movie={movie} remove={true} handleFavClick={handleFavClick} /> : 
                        <FavButton movie={movie} handleFavClick={handleFavClick} />
                        }   
                        <p className="rating">{movie.vote_average}/10</p>
                    </div>
                    
                    <div className="text">
                        <p>{new Date(movie.release_date).toDateString()}</p>
                        <h1>{movie.title}</h1>
                        <p>{movieOverview(movie.overview)}</p>
                    </div>
                </div>

                <div className="button-container">
                    <button className="button"><Link to={`/movie/${movie.id}`}>Learn More</Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default MovieCard;