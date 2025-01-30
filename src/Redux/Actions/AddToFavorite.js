export const toggleFavoriteAction = (movie) => {
    return {
        type: "TOGGLE_FAVORITE",
        payload: movie,
    };
};
