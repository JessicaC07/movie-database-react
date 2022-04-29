import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import likeIcon from '../media/like-icon.png';

function PageFavourites() {

    useEffect(() => {
        document.title = `${appTitle} - Favourites`;
    }, []);

    return (
        <div className="favourite-content">
            <h1>You don't have any movies in your favourites.</h1>
            <p>To add movies to your favourites, click <img src={likeIcon} alt="like icon with a heart shape"/> on the movie cards.</p>
        </div>
    )
}
export default PageFavourites