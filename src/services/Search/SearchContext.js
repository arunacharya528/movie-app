import { useState } from "react";
import { createContext } from "react";

export const SearchContext = createContext({
    quality: String,
    rating: String,
    genre: String,
    sortBy: String,
    orderBy: String,
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


    return <SearchContext.Provider value={{
        quality,
        rating,
        genre,
        sortBy,
        orderBy,
        setQuality,
        setRating,
        setGenre,
        setSortBy,
        setOrderBy
    }}>{children}</SearchContext.Provider>
}