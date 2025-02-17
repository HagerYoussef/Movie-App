import { createStore, combineReducers } from 'redux';
import addToFavoriteReducer from './Reducers/AddToFavoriteReducer'; // Ensure the path is correct
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    favorites: addToFavoriteReducer,
});

const store = createStore(rootReducer,composeWithDevTools());

export default store;

