import { useContext, useEffect, useState } from "react";
import { getMovieList, Thumbnail } from "../services/Home";
import { SearchBar, SearchContainer, SearchContext, SearchProvider } from "../services/Search";

export const Search = () => {
    return (
        <>
            <SearchProvider>
                <SearchBar />
                <SearchContainer/>

            </SearchProvider>
        </>
    );
}