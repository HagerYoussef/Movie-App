import React from 'react';
import './MovieNotSelected.css'; // Import the CSS file

function MovieNotSelected() {
    return (
        <div className="movie-not-selected-container">
        <h1 className="text-danger">Please Select a Movie</h1>
        <p>To view movie details, please go back and select a movie from the list.</p>
        <a href="/movies">Go back to Movie List</a> 
        </div>
    );
}

export default MovieNotSelected;
