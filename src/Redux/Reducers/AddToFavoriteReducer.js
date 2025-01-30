const INITIAL_STATE = {
    favoriteMovies: [],  
};


export default function addToFavoriteReducer(state = INITIAL_STATE, action) {
    console.log("Action received in reducer:", action);
    switch (action.type) {
        case "TOGGLE_FAVORITE":
            const movieIndex = state.favoriteMovies.findIndex(
                (movie) => movie.id === action.payload.id
            );

            if (movieIndex >= 0) {
                return {
                    ...state,
                    favoriteMovies: state.favoriteMovies.filter(
                        (movie) => movie.id !== action.payload.id
                    ),
                };
            } else {
                return {
                    ...state,
                    favoriteMovies: [...state.favoriteMovies, action.payload],
                };
            }
        default:
            return state;
    }
}
