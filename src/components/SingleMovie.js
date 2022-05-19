import noPoster from '../media/no-movie-poster.jpg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addFav, deleteFav } from '../features/favs/favsSlice';
import isFav from '../utilities/isFav';
import FavButton from '../components/FavButton';


function SingleMovie({ movie }) {

  const favs = useSelector((state) => state.favs.items);

  const dispatch = useDispatch();

  function handleFavClick(addToFav, obj){
      if(addToFav === true){
          dispatch(addFav(obj));
      }else{
          dispatch(deleteFav(obj));
      }   
  }

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
                <div className="favourite">
                  {
                    isFav(favs, null, movie.id) ? 
                        <FavButton movie={movie} remove={true} handleFavClick={handleFavClick} /> : 
                        <FavButton movie={movie} handleFavClick={handleFavClick} />
                  } 
                </div>
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <p>Genres:{movie.genres.map(genre => <span key={genre.id}> {genre.name} </span>)}</p>
            </div>
            <div className='single-movie-poster'>
                {
                    movie.poster_path === null ?
                        <img src={noPoster} alt="no poster available"/> :
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/> 
                }
            </div>
        </div>
      </>
  )
}

export default SingleMovie