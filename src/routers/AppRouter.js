import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageAbout from '../pages/PageAbout';
import PageFavourites from '../pages/PageFavourites';
import PageHome from '../pages/PageHome';
import PageNotFound from '../pages/PageNotFound';
import PageIndividual from '../pages/PageIndividual';

function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<PageHome />} />
                    <Route path="/about" element={<PageAbout />} />
                    <Route path="/favourites" element={<PageFavourites />} />
                    <Route path="/movie/:id" element={<PageIndividual />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRouter;