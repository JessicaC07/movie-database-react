import tmdbLogo from '../media/tmdblogo.png';

function PageAbout() {

    return (
        <div className="about-blurb">
        <h1>Welcome to Film Festival</h1>

        <p>The Film Festival movie database is a website where visitors can browse popular, top rated, now playing and upcoming movie listings, as well as their ratings.</p>
        <p>Add selected movies to your favourites, you can also remove them anytime.</p>
        <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>

        <img src={tmdbLogo} alt="TMDB logo" />
        </div>

    )
}
export default PageAbout