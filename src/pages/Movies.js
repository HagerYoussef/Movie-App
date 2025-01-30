import axios from 'axios';
import { useEffect, useState } from 'react';
import MyCard from '../components/MyCard';
import '../components/MyCard.css';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);  // To track loading state
    const [error, setError] = useState(null);     // To track error state
    const [searchQuery, setSearchQuery] = useState(''); // Track search query
    const [filteredMovies, setFilteredMovies] = useState([]); // Track filtered movies
    const [currentPage, setCurrentPage] = useState(1); // Track current page
    const [totalPages, setTotalPages] = useState(0);  // Track total pages

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=1c61f7854caf371b34a23ef611f0efed&page=${currentPage}`)
            .then((response) => {
                setMovies(response.data.results);
                setFilteredMovies(response.data.results); // Initialize filteredMovies
                setTotalPages(response.data.total_pages);
                setLoading(false);
            })
            .catch((error) => {
                setError('Failed to load movies. Please try again later.');
                setLoading(false);
            });
    }, [currentPage]); // Fetch new movies whenever currentPage changes

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page); // Update current page state
        }
    };

    useEffect(() => {
        // Filter movies based on the search query
        const filtered = movies.filter((movie) =>
            movie.original_title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredMovies(filtered);
    }, [searchQuery, movies]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    if (loading) return <p className="text-white text-center">Loading movies...</p>;
    if (error) return <p className="text-danger text-center">{error}</p>;

    return (
        <>
            <h1 className="text-white text-center mt-3">Movies</h1>
            <div className="search-container text-center mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search movies by title..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    style={{ width: '300px', margin: '0 auto' }}
                />
            </div>

            <div className="movie-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie) => (
                        <MyCard
                            key={movie.id}
                            id={movie.id}
                            original_title={movie.original_title}
                            poster_path={movie.poster_path}
                            vote_average={movie.vote_average}  // Pass vote_average for rating only
                            showDetailsButton={true}  // Show button on movie list
                            isDetailsPage={false}     // Hide additional details in list view
                        />
                    ))
                ) : (
                    <p className="text-white text-center">Not Found</p>
                )}
            </div>

            {/* Render pagination only if there are movies found */}
            {filteredMovies.length > 0 && (
                <div className="pagination-controls text-center">
                    <button
                        className="btn btn-light text-secondary"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}  // Disable previous button on first page
                    >
                        Previous
                    </button>
                    <span className="mx-2">{`Page ${currentPage} of ${totalPages}`}</span>
                    <button
                        className="btn btn-light text-secondary"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}  // Disable next button on last page
                    >
                        Next
                    </button>
                </div>
            )}
            <div style={{ height: '20px' }}></div>
        </>
    );
}

export default Movies;
