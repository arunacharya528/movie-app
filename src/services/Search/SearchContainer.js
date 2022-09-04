import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { getMovieList, Thumbnail } from "../Home";
import { Pagination } from "./Pagination";
import { SearchContext } from "./SearchContext";

export const SearchContainer = () => {
    const { quality, genre, rating, orderBy, sortBy } = useContext(SearchContext)
    const initialData = { loading: true, data: [] }
    const [movies, setMovies] = useState(initialData);
    const [movieCount, setMovieCount] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setMovies(initialData)
        const determineQuery = () => {
            var query = [];
            query = quality ? [...query, ...[`quality=${quality}`]] : query
            query = rating ? [...query, ...[`minimum_rating=${rating}`]] : query
            query = orderBy ? [...query, ...[`order_by=${orderBy}`]] : query
            query = sortBy ? [...query, ...[`sort_by=${sortBy}`]] : query
            query = genre ? [...query, ...[`genre=${genre}`]] : query
            query = [...query, ...[`page=${page}`]]
            return query.join("&");
        }
        getMovieList(determineQuery())
            .then((response) => {
                setMovieCount(response.data.data.movie_count)
                setMovies({ loading: false, data: response.data.data.movies })
            })
            .catch((error) => console.log(error))
    }, [quality, genre, rating, orderBy, sortBy, page])

    return (
        <>
            <div className="grid grid-cols-4">
                {
                    movies.loading ?
                        "Loading"
                        :
                        movies.data.map((movie, index) =>
                            <Thumbnail key={index} movie={movie} />
                        )
                }
            </div>
            <Pagination maxValue={movieCount} perPage={20} onChange={(data) => setPage(data)} />
        </>

    );
}