import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { toggleFavoriteAction } from './Redux/Actions/AddToFavorite'; // Correct path
import { LanguageContext } from './context/languageContext';
import { ThemeContext } from './context/ThemeContext';
import translations from './translations';

function Navbar() {
    const favoriteMovies = useSelector((state) => state.favorites.favoriteMovies || []);
    const favoriteCount = favoriteMovies.length;  // Count of favorite movies
    const history = useHistory();
    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const { language, setLanguage } = useContext(LanguageContext);
    const { theme, setTheme } = useContext(ThemeContext);
    const t = translations[language]; 

    const handleMovieClick = (movieId) => {
        if (movieId) {
            history.push(`/movie/${movieId}`);
        } else {
            history.push('/movie-not-selected');
        }
    };

    const buttonStyle = {
        padding: "10px 20px",
        fontSize: "16px",
        border: "none",
        borderRadius: "5px",
        marginRight: "10px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        backgroundColor: theme === "dark" ? "white" : "#343a40",
        color: theme === "dark" ? "#343a40" : "white",
    };

    return (
        <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">Movie App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">{t.login}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">{t.register}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/movies">{t.home}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/movie">{t.movieDetails}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/favorites">{t.favorites} {favoriteCount}</Link>
                        </li>
                    </ul>
                    <button
                            style={buttonStyle}
                            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                        >
                            {language === 'en' ? 'عربي' : 'English'}
                        </button>

                        <button
                            style={buttonStyle}
                            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        >
                            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                        </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
