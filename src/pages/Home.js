import { useEffect, useState } from "react";
import { getMovieList, Thumbnail } from "../services/Home";

export const Home = () => {

    const [movies, setMovies] = useState({ loading: true, data: [] });
    useEffect(() => {
        getMovieList()
            .then(response => {
                console.log(response.data.data.movies)
                setMovies({ loading: false, data: response.data.data.movies })
            })
    }, [])
    return (
        <div className="grid grid-cols-5 gap-5">
            {
                movies.loading ?
                    "Loading"
                    :

                    movies.data.map((movie, index) =>
                        <Thumbnail key={index} movie={movie} />
                    )

            }
        </div>
    );
}