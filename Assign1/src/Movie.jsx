import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

function Movie({name, year, rating}){
    return(
        <>
        <div class="m-3">
            <h3>Movie: {name}</h3>
            <p>Year released: {year}</p>
            <p>Rating: {rating}</p>
        </div>
        </>
    )
}

export default Movie