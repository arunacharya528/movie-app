import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import { Loading } from "../components/Loading";
import { Thumbnail } from "../services/Home/Thumbnail";
import { getMovieDetail, getRelatedMovie } from "../services/movie";
import { MovieDetail } from "../services/movie/MovieDetail";

export const Movie = () => {

    const [movieDetail, setMovieDetail] = useState({ loading: true, data: {} })
    const [suggestedMovies, setSuggestedMovies] = useState({ loading: true, data: [] })
    const location = useLocation();

    const movieId = location.pathname.split("/")[2]
    useEffect(() => {
        getMovieDetail(movieId)
            .then(response => {
                setMovieDetail({ loading: false, data: response.data.data.movie })
            })

        setSuggestedMovies({ loading: true, data: [] })
        getRelatedMovie(movieId)
            .then(response => {
                setSuggestedMovies({ loading: false, data: response.data.data.movies })
            })
    }, [location])

    return (
        <div className="grid lg:grid-cols-2 gap-5">
            {movieDetail.loading ? <Loading /> : <MovieDetail />}
            <div>
                <div className="text-xl font-bold py-5 text-center">Suggested Movies</div>

                {suggestedMovies.loading ? <Loading /> :
                    <div className="grid md:grid-cols-2 items-start gap-5 ">
                        {suggestedMovies.data.map((movie, index) => <Thumbnail movie={movie} key={index} />)}
                    </div>
                }
            </div>

        </div>
    );
}