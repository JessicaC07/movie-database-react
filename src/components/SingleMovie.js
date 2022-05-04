import noPoster from '../media/no-movie-poster.jpg';
import { Link } from 'react-router-dom';


function SingleMovie({ movie }) {

  return (
      <>
        <div className="single-movie-backdrop"
            style={{
                backgroundImage: movie.backdrop_path !== null && `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
            }}></div>   
        
        <div className="single-movie-info-container">
            <div className="single-movie-info">
                <div className="info-top">
                    <button><Link to={`/`}>X</Link></button>
                    <p className="rating">{movie.vote_average}/10</p>
                </div>
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <p>{movie.genres.map(genre => <span key={genre.id}>Genres: {genre.name} </span>)}</p>
            </div>
            <div className='single-movie-poster'>
                {movie.poster_path === null ?
                            <img src={noPoster} alt="no poster available"/> :
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/> }
            </div>
        </div>
      </>
  )
}

export default SingleMovie