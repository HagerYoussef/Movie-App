import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { toggleFavoriteAction } from './Redux/Actions/AddToFavorite'; // Correct path

function Navbar() {
    const favoriteMovies = useSelector((state) => state.favorites.favoriteMovies || []);
    const favoriteCount = favoriteMovies.length;  // Count of favorite movies
    const history = useHistory();
    const [selectedMovieId, setSelectedMovieId] = useState(null);

    const handleMovieClick = (movieId) => {
        if (movieId) {
            history.push(`/movie/${movieId}`);
        } else {
            history.push('/movie-not-selected');
        }
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">Movie App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/movies">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/movie">Movie Details</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/favorites">Favorites {favoriteCount}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
