import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Loading } from "../../components/Loading";
import { getMovieDetail } from "./data";

export const MoviePreview = ({ id }) => {
    useEffect(() => {
        if (id) {
            setMovie(initialData)
            getMovieDetail(id)
                .then(response => {
                    setMovie({ loading: false, data: response.data.data.movie })
                })
        }
    }, [id])

    const initialData = { loading: true, data: {} }
    const [movie, setMovie] = useState(initialData)


    return (

        <>

            {movie.loading ?
                <Loading />
                :
                <div>
                    <img src={movie.data.background_image} className="object-cover h-52 rounded-t-xl w-full" />
                    <div className="-mt-32 relative">
                        <img src={movie.data.large_cover_image} className="mx-auto rounded-xl h-64" />
                        <div className="absolute bottom-0 right-0 bg-base-100/60">
                            <Link className="btn btn-ghost" to={"/movie/" + movie.data.id}>View Detail</Link>
                        </div>
                    </div>
                    <div className="space-y-5 p-5">
                        <Link className="text-center text-2xl font-semibold mt-5 block mx-auto" to={"/movie/" + movie.data.id}>{movie.data.title_english}</Link>
                        <div className=" flex flex-col md:flex-row md:justify-between">
                            <span>Uploaded {moment(movie.data.date_uploaded).fromNow()}</span>
                            <div className="md:space-x-5 flex flex-col md:flex-row">
                                <span>Rating: {movie.data.rating === 0 ? "unknown" : `${movie.data.rating}/10`}</span>
                                <span>Year: {movie.data.year}</span>
                            </div>
                        </div>
                        <div className="flex space-x-2 flex-wrap">
                            {
                                movie.data.genres ?
                                    movie.data.genres.map((genre, index) =>
                                        <span key={index} className="badge badge-primary">{genre}</span>
                                    )
                                    : ''
                            }
                        </div>

                        <div className="flex flex-col space-y-5">

                            {movie.data.yt_trailer_code === '' ?
                                ''
                                : <iframe className="block mx-auto w-full h-64"
                                    src={`https://www.youtube.com/embed/${movie.data.yt_trailer_code}`}>
                                </iframe>
                            }
                        </div>

                        <div>{movie.data.description_full}</div>

                    </div>
                </div>
            }
        </>

    );

}