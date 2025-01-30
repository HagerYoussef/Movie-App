import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MyCard from '../components/MyCard';
import './MoviesDetails.css';  // Import the CSS file for centering

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);  // To track loading state
    const [error, setError] = useState(null);      // To track error state

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}?api_key=1c61f7854caf371b34a23ef611f0efed`)
            .then((response) => {
                setMovie(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError('Failed to load movie details. Please try again later.');
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className="text-white text-center">Loading movie details...</p>;
    if (error) return <p className="text-danger text-center">{error}</p>;

    return (
        <>
            <h1 className="text-white text-center mt-4uu">Movie Details</h1>
            <div className="details-page">
            {movie ? (
                <MyCard
                    id={movie.id}
                    original_title={movie.original_title}
                    poster_path={movie.poster_path}
                    overview={movie.overview}           // Show detailed overview
                    popularity={movie.popularity}       // Show popularity
                    release_date={movie.release_date}   // Show release date
                    vote_average={movie.vote_average}   // Show vote average
                    genres={movie.genres}               // Show genres
                    showDetailsButton={false}           // Hide button on details page
                    isDetailsPage={true}                // Show all details in movie details page
                />
            ) : (
                <p className="text-danger">Movie not found.</p>
            )}
        </div>
        </>
    );
}

export default MovieDetails;
