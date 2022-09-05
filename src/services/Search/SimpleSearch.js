import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CloseIcon } from "../../assets/icons";
import { ErrorText, Loading } from "../../components";
import { getMovieList } from "../Home";

export const SimpleSearch = () => {

    const [title, setTitle] = useState('');
    const [isDataShown, showData] = useState(false);
    const initialData = { loading: true, data: [] }
    const [movies, setMovies] = useState(initialData);

    useEffect(() => {
        setMovies(initialData)
        if (title !== '') {
            getMovieList(`query_term=${title}&limit=9&sort_by=rating`)
                .then(response => {
                    const count = response.data.data.movie_count
                    const movies = response.data.data.movies
                    if (count > 0 && movies) {
                        setMovies({ loading: false, data: response.data.data.movies })
                    }
                    if (count === 0) {
                        setMovies({ loading: false, data: [] })
                    }
                    showData(true)
                })
                .catch(error => console.log(error))
        } else {
            showData(false)
            setMovies({ loading: false, data: [] })
        }

    }, [title])

    const handleSearchClose = () => {
        setTitle('')
        showData(false)
        setMovies(initialData)
    }

    return (
        <div className="relative">
            <div class={`flex items-center w-full bg-base-200 px-3 ` + (isDataShown ? "rounded-t-lg rounded-b-lg" : 'rounded-lg')}>
                <input type="text" placeholder="Name of movie" class="input grow bg-transparent focus:outline-none focus:border-collapse" onChange={e => setTitle(e.target.value)} value={title} />
                <div className="btn btn-ghost btn-circle btn-sm" onClick={handleSearchClose}><CloseIcon /></div>
            </div>
            {
                isDataShown ?
                    <div className="absolute bg-base-200 z-20 w-full rounded-b-lg  divide-y divide-slate-500">
                        {
                            movies.loading ?
                                <Loading />
                                :
                                movies.data.length === 0 ?
                                    <ErrorText message="No movie found. Try writing full name with spaces." />
                                    :
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 p-5 max-h-96 lg:max-h-max overflow-auto">
                                        {
                                            movies.data.map((movie, index) =>
                                                <Link to={"/movie/" + movie.id} onClick={handleSearchClose} key={index} className="flex flex-row items-center space-x-5 hover:bg-base-300 p-3 rounded-lg" >
                                                    <img src={movie.medium_cover_image} className="h-24 rounded-md" />
                                                    <div>
                                                        <div className="text-lg font-bold">{movie.title_english}</div>
                                                        <div>{movie.year}</div>
                                                        <div className="text-sm">{movie.genres.join(", ")}</div>
                                                        <span className="stars" style={{ "--percent": `${movie.rating * 10}%` }}></span>

                                                    </div>
                                                </Link>
                                            )}
                                    </div>
                        }
                        < div className="flex justify-end p-3">
                            <Link className="" to={"/search?name=" + title} onClick={handleSearchClose}>View More</Link>
                        </div>
                    </div>
                    : ''
            }
        </div >
    );
}