import './App.css';
import AddUser from './LoginPage';
import Navbar from './NavBar';
import NotFound from './NotFound';
import RegisterUser from './RegisterPage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'; // Added Redirect
import Movies from './pages/Movies';
import MovieDetails from './pages/MoviesDetails';
import MovieNotSelected from './pages/MovieNotSelected';
import Favorites from './pages/Favorites';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          {/* Redirect to login when user visits the root */}
          <Route path="/" exact component={AddUser} />
          <Route path="/login" exact component={AddUser} />
          <Route path="/register" exact component={RegisterUser} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/favorites" exact component={Favorites} />          
          {/* Handle when there's no movie ID */}
          <Route
            path="/movie"
            exact
            render={() => <Redirect to="/movie-not-selected" />} // Redirect to custom page
          />
          
          {/* Handle movie details when ID is provided */}
          <Route path="/movie/:id" component={MovieDetails} />
          {/* Movie not selected */}
          <Route path="/movie-not-selected" component={MovieNotSelected} />

          {/* Handle not found */}
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
