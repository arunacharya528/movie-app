import { useContext } from "react";
import { SearchContext } from "./SearchContext";

export const SearchBar = () => {
    const { setGenre, setOrderBy, setQuality, setRating, setSortBy, setQuery,setPage } = useContext(SearchContext)
    const clearAll = () => {
        setGenre(undefined)
        setOrderBy(undefined)
        setQuality(undefined)
        setSortBy(undefined)
        setQuery(undefined)
        setPage(1)
    }
    return (
        <div className="grid md:grid-cols-5 gap-5 p-5">
            <div className="form-control col-span-5 ">
                <label class="label">
                    <span class="label-text">Name of the movie</span>
                </label>
                <div className="flex space-x-5">
                    <input type="text" placeholder="Movie Title/IMDb Code, Actor Name/IMDb Code, Director Name/IMDb Code" class="input bg-base-200 rounded-full grow" onChange={e => setQuery(e.target.value)} />
                    <button className="btn rounded-full btn-primary" onClick={clearAll}>Clear all</button>
                </div>
            </div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">Quality</span>
                </label>
                <select class="select rounded-full bg-base-200" onChange={e => setQuality(e.target.value)}>
                    <option>All</option>
                    <option>720p</option>
                    <option>1080p</option>
                    <option>2160p</option>
                    <option>3D</option>
                </select>
            </div>

            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">Minimum Rating</span>
                </label>
                <select class="select bg-base-200 rounded-full" onChange={e => setRating(e.target.value)}>
                    {Array(10).fill({}).map((item, index) =>
                        <>
                            <option>{index === 0 ? "All" : index}</option>
                        </>
                    )}
                </select>
            </div>

            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">Genre</span>
                </label>
                <select class="select bg-base-200 rounded-full" onChange={e => setGenre(e.target.value)}>
                    <option>All</option>
                    {['comedy', 'sci-fi', 'horror', 'fantasy', 'romance', 'action', 'thriller', 'drama', 'mystery', 'crime', 'animation', 'adventure'].map((item, index) =>
                        <option key={index}>{item}</option>
                    )}
                </select>
            </div>

            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">Sort By</span>
                </label>
                <select class="select bg-base-200 rounded-full" onChange={e => setSortBy(e.target.value)}>
                    {['date_added', 'title', 'year', 'rating', 'peers', 'seeds', 'download_count', 'like_count'].map((item, index) =>
                        <option key={index}>{item}</option>
                    )}
                </select>
            </div>

            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">Order By</span>
                </label>
                <select class="select bg-base-200 rounded-full" onChange={e => setOrderBy(e.target.value)}>
                    {['desc', 'asc'].map((item, index) =>
                        <option key={index}>{item}</option>
                    )}
                </select>
            </div>

        </div>
    );
}