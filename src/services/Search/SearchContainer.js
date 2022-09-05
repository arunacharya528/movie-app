import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ErrorText } from "../../components";
import { Loading } from "../../components/Loading";
import { getMovieList, Thumbnail } from "../Home";
import { Pagination } from "./Pagination";
import { SearchContext } from "./SearchContext";

export const SearchContainer = () => {
    const { quality, genre, rating, orderBy, sortBy, query, page, setQuery } = useContext(SearchContext)
    const initialData = { loading: true, data: [] }
    const [movies, setMovies] = useState(initialData);
    const [movieCount, setMovieCount] = useState(0);
    const [loading, setLoading] = useState(true)

    const location = useLocation();
    const name = location.search.split("=")[1];


    useEffect(() => {
        // setMovies(initialData)
        setLoading(true)

        const determineQuery = () => {
            var queries = [];
            queries = quality ? [...queries, ...[`quality=${quality}`]] : queries
            queries = rating ? [...queries, ...[`minimum_rating=${rating}`]] : queries
            queries = orderBy ? [...queries, ...[`order_by=${orderBy}`]] : queries
            queries = sortBy ? [...queries, ...[`sort_by=${sortBy}`]] : queries
            queries = genre ? [...queries, ...[`genre=${genre}`]] : queries
            queries = query ? [...queries, ...[`query_term=${query}`]] : queries
            queries = [...queries, ...[`page=${page}`]]
            return queries.join("&");
        }
        getMovieList(determineQuery())
            .then((response) => {
                const count = response.data.data.movie_count
                const movies = response.data.data.movies
                setMovieCount(count)
                if (count > 0 && movies) {
                    setMovies({ loading: false, data: response.data.data.movies })
                } else {
                    setMovies({ loading: false, data: [] })
                }
                setLoading(false)
            })
            .catch((error) => console.log(error))

    }, [quality, genre, rating, orderBy, sortBy, page, query])

    useEffect(() => {
        setTimeout(() => {
            if (name) {
                setQuery(name)
            }
        }, 1000)
    }, [name])


    return (
        <>
            <Pagination maxValue={movieCount} perPage={20} />
            <div className="relative">

                {
                    movies.loading ? '' :
                        movies.data.length > 0 ?
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                                {movies.data.map((movie, index) =>
                                    <Thumbnail key={index} movie={movie} />
                                )}
                            </div>
                            :
                            <ErrorText message="No movie available" />
                }
                {
                    loading ?
                        <div className="absolute bg-base-300/70  max-h-max w-full top-0 rounded-box flex items-center">
                            <Loading />
                        </div>
                        : ''
                }

            </div>

            <Pagination maxValue={movieCount} perPage={20} showJump />
        </>

    );
}