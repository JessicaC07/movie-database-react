import tmdbLogo from '../media/tmdb.logo.png';


function PageAbout() {

    return (
        <div className="about-content">
                <h1>Welcome to Film Festival</h1>
                <p>The Film Festival movie database is a website where visitors can browse popular, top rated, now playing and upcoming movie listings, as well as their ratings.</p>
                <p>Add selected movies to your favourites, you can also remove them anytime.</p>
                <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
                <img className = "tmdb-logo" src={tmdbLogo} alt="" />

        </div>
    )
}
export default PageAbout