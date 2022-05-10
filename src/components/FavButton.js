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
            <img onClick={handleAddFav} className='like-icon' src={likeIcon} alt="like icon with heart shape" /> : 
            <img onClick={handleRemoveFav} className='like-icon' src={favouriteIcon} alt="favourite icon with heart shape" />}
        </>
    );
    
}

FavButton.defaultProps = {
    remove: false
}

export default FavButton;
