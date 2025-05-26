function Movie({name, year, rating}){
    return(
        <>
            <h3>Movie: {name}</h3>
            <h3>Year released: {year}</h3>
            <h3>Rating: {rating}</h3>
        </>
    )
}

export default Movie