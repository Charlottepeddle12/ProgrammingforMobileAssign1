import Movie from "./Movie"

function MovieList({movies}){
    return(
        <>
        {
            movies.map((movieData)=>{
                return <Movie name={movieData.name} year={movieData.year} rating={movieData.rating}/>
            })
        }
        </>
    )
}

export default MovieList