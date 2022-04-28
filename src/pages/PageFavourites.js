import { useEffect } from 'react';
import { appTitle } from '../globals/globals';

function PageFavourites() {

    useEffect(() => {
        document.title = `${appTitle} - Favourites`;
    }, []);

    return (
        <h1>Hi</h1>
    )
}
export default PageFavourites