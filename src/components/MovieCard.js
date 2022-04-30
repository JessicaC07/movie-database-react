// import placeholder from '../media/placeholder-movie.jpeg';
import noPoster from '../media/no-movie-poster.jpg';
import likeIcon from '../media/like-icon.png';
import { Link } from 'react-router-dom';

function MovieCard({movie}) {

    const numberCharacter = 180;

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
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />}

            
            <div className="info">

                <div className="top-text-container">
                    <div className="top-card">
                        <img className='like-icon' src={likeIcon} alt="like icon with hear shape" />
                        <p className="rating">{movie.vote_average}/10</p>
                    </div>
                    
                    <div className="text">
                        <p>{new Date(movie.release_date).toDateString()}</p>
                        <h1>{movie.title}</h1>
                        <p>{movieOverview(movie.overview)}</p>
                    </div>
                </div>

                <div className="button-container">
                    <button className="button"><Link to={'/'}>Learn More</Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default MovieCard;