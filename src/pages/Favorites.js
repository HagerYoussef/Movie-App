// pages/Favorites.js
import { useSelector } from 'react-redux';
import MyCard from '../components/MyCard';
import './MovieNotSelected.css';

function Favorites() {
    const favoriteMovies = useSelector((state) => state.favorites.favoriteMovies || []);

    return (
        <div>
            {favoriteMovies.length > 0 && (
                <h1 className="text-white text-center mt-3">Favorites</h1>
            )}
            <div className="movie-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {favoriteMovies.length > 0 ? (
                    favoriteMovies.map((movie) => (
                        <MyCard
                            key={movie.id}
                            id={movie.id}
                            original_title={movie.original_title}
                            poster_path={movie.poster_path}
                            vote_average={movie.vote_average}
                            showDetailsButton={false}  // No details button in favorites page
                            isDetailsPage={false}      // Hide additional details in favorites page
                        />
                    ))
                ) : (
                    <div className="movie-not-selected-container">
                        <h1>No Favorite Movies</h1>
                        <p>No favorite movies added yet</p>
                    </div>
                )}
            </div>
        </div>
    );
}



export default Favorites;
