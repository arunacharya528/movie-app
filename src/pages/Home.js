import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
// import { Loading } from "../components/loading";
import { getMovieList, Thumbnail } from "../services/Home";

export const Home = () => {

    const [movies, setMovies] = useState({ loading: true, data: [] });
    useEffect(() => {
        getMovieList()
            .then(response => {
                setMovies({ loading: false, data: response.data.data.movies })
            })
    }, [])
    return (
        <>
            {
                movies.loading ?
                    <Loading />
                    :
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 p-5 w-full">

                        {movies.data.map((movie, index) =>
                            <Thumbnail key={index} movie={movie} />
                        )
                        }
                    </div>


            }
        </>
    );
}