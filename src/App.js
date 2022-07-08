import logo from './logo.svg';
import './App.css';
import MovieList from './components/movie-list';

function App() {
  return (
    <div>
      <br></br>
      <h1 style={{ textAlign:"center" }}>Movies from Beyond</h1>
      <MovieList />
    </div>
  );
}

export default App;
