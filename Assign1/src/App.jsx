import './App.css'
import NavBar from './NavBar'
import Movies from "./Movies.json"
import MovieList from './MovieList'

function App() {
  return (
    <>
      <NavBar/>
      <MovieList movies={Movies.movies}/>
    </>
  )
}

export default App
