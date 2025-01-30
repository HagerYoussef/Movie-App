import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { toggleFavoriteAction } from '../Redux/Actions/AddToFavorite';

function MyCard({
    id,
    original_title,
    poster_path,
    overview,
    vote_average,
    release_date,
    genres,
    showDetailsButton,
    isDetailsPage,
}) {
    const dispatch = useDispatch();
    const favoriteMovies = useSelector((state) => state.favorites.favoriteMovies || []);
    const isFavorite = favoriteMovies.some((movie) => movie.id === id);  // Check if the movie is in favorites

    const handleFavoriteToggle = () => {
        dispatch(toggleFavoriteAction({ id, original_title, poster_path, vote_average }));
    };

    return (
        <div className="card" style={{ width: '28rem', margin: '0.5rem' }}>
            <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                className="card-img-top"
                alt={original_title}
                style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
            />
            <div className="card-body">
                <h5 className="card-title">{original_title}</h5>
                <p className="card-text">{overview}</p>
                <p className="card-text">
                    <strong>Rating:</strong> {vote_average} / 10
                </p>

                {isDetailsPage && (
                    <>
                        <p className="card-text">
                            <strong>Release Date:</strong> {release_date}
                        </p>
                        <p className="card-text">
                            <strong>Genres:</strong> {genres?.map((genre) => genre.name).join(', ')}
                        </p>
                    </>
                )}

                {showDetailsButton && !isDetailsPage && (
                    <Link to={`/movie/${id}`}>
                        <button className="btn btn-light text-secondary">More Details</button>
                    </Link>
                )}
            </div>
            <div className="card-footer">
                <div onClick={handleFavoriteToggle}>
                    {isFavorite ? (
                        <FaHeart className="heart-icon" />
                    ) : (
                        <FaRegHeart className="heart-icon" />
                    )}
                </div>
            </div>
        </div>
    );
}

export default MyCard;
