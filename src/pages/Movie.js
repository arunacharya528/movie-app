import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import { getMovieDetail } from "../services/movie";
import { MovieDetail } from "../services/movie/MovieDetail";

export const Movie = () => {

    const [movieDetail, setMovieDetail] = useState({ loading: true, data: {} })
    const location = useLocation();

    const movieId = location.pathname.split("/")[2]
    useEffect(() => {
        getMovieDetail(movieId)
            .then(response => {
                console.log(response)
                setMovieDetail({ loading: false, data: response.data.data.movie })
            })
    },[])

    return (
        <>
            {movieDetail.loading ? "Loading" : <MovieDetail movie={movieDetail.data} />}

        </>
    );
}