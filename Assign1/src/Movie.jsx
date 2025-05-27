function Movie({name, year, rating}){
    return(
        <>
            <h3>Movie: {name}</h3>
            <p>Year released: {year}</p>
            <p>Rating: {rating}</p>
        </>
    )
}

export default Movie