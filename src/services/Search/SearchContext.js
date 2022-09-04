import { useState } from "react";
import { createContext } from "react";

export const SearchContext = createContext({
    quality: String,
    rating: String,
    genre: String,
    sortBy: String,
    orderBy: String,
    query: String,
    page: String,
    setPage: Function,
    setQuery: Function,
    setQuality: Function,
    setRating: Function,
    setGenre: Function,
    setSortBy: Function,
    setOrderBy: Function
});

export const SearchProvider = ({ children }) => {
    const [quality, setQuality] = useState(undefined)
    const [rating, setRating] = useState(undefined)
    const [genre, setGenre] = useState(undefined)
    const [sortBy, setSortBy] = useState(undefined)
    const [orderBy, setOrderBy] = useState(undefined)
    const [query, setQuery] = useState(undefined)
    const [page, setPage] = useState(1)

    return <SearchContext.Provider value={{
        quality,
        rating,
        genre,
        sortBy,
        orderBy,
        query,
        page,
        setPage,
        setQuery,
        setQuality,
        setRating,
        setGenre,
        setSortBy,
        setOrderBy
    }}>{children}</SearchContext.Provider>
}