import { useContext, useEffect, useState } from "react";
import { MainTitle } from "../components";
import { getMovieList, Thumbnail } from "../services/Home";
import { SearchBar, SearchContainer, SearchContext, SearchProvider } from "../services/Search";

export const Search = () => {
    return (
        <>
            <SearchProvider>
                <MainTitle text={"Search Movies"} />
                <SearchBar />
                <SearchContainer />
            </SearchProvider>
        </>
    );
}