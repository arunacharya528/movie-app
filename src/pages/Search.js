import { useContext, useEffect, useState } from "react";
import { getMovieList, Thumbnail } from "../services/Home";
import { SearchBar, SearchContainer, SearchContext, SearchProvider } from "../services/Search";

export const Search = () => {
    return (
        <>
            <SearchProvider>
                <div className="text-3xl font-bold text-center py-5">Search movies</div>
                <SearchBar />
                <SearchContainer/>

            </SearchProvider>
        </>
    );
}