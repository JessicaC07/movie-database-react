// Fav Button
import likeIcon from '../media/like-icon.png';
import favouriteIcon from '../media/favourite-icon.png';

function FavButton({ movie, remove, handleFavClick }) {

    function handleAddFav(){
        handleFavClick(true, movie);
    }

    function handleRemoveFav(){
        handleFavClick(false, movie);
    }

    return (
        <>
            {remove === false ? 
            <button onClick={handleAddFav}><img className='like-icon' src={likeIcon} alt="like icon with heart shape" /></button> : 
            <button onClick={handleRemoveFav}><img className='like-icon' src={favouriteIcon} alt="favourite icon with heart shape" /></button>}
        </>
    );
    
}

FavButton.defaultProps = {
    remove: false
}

export default FavButton;
