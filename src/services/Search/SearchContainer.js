import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { getMovieList, Thumbnail } from "../Home";
import { Pagination } from "./Pagination";
import { SearchContext } from "./SearchContext";

export const SearchContainer = () => {
    const { quality, genre, rating, orderBy, sortBy, query, page } = useContext(SearchContext)
    const initialData = { loading: true, data: [] }
    const [movies, setMovies] = useState(initialData);
    const [movieCount, setMovieCount] = useState(0);
    // const [page, setPage] = useState(1);

    useEffect(() => {
        // setMovies(initialData)
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
                setMovieCount(count)
                if (count > 0) {
                    setMovies({ loading: false, data: response.data.data.movies })
                } else {
                    setMovies({ loading: false, data: [] })
                }
            })
            .catch((error) => console.log(error))
    }, [quality, genre, rating, orderBy, sortBy, page, query])

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
            <Pagination maxValue={movieCount} perPage={20}  />
        </>

    );
}