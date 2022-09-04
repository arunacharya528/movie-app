import moment from "moment";
import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom'
import magnetImage from "../../assets/image/magnet.png"
import { Loading } from "../../components/Loading";
import { getMovieDetail } from "./data";
export const MovieDetail = ({ id, isShort = false }) => {

    const location = useLocation();
    const initialData = { loading: true, data: {} }
    const [movie, setMovie] = useState(initialData)
    const movieId = location.pathname.split("/")[2]
    useEffect(() => {
        if (id) {
            setMovie(initialData)
            getMovieDetail(id)
                .then(response => {
                    setMovie({ loading: false, data: response.data.data.movie })
                })
        }
    }, [id])

    useEffect(() => {
        if (movieId) {
            setMovie(initialData)
            getMovieDetail(movieId)
                .then(response => {
                    setMovie({ loading: false, data: response.data.data.movie })
                })
        }
    }, [movieId])

    return (

        <>

            {movie.loading ?
                <Loading/>
                :
                <div>
                    <img src={movie.data.background_image} className="object-cover h-52 rounded-t-xl w-full" />
                    <div className="-mt-32 relative">
                        <img src={movie.data.large_cover_image} className="mx-auto rounded-xl h-64" />
                        {
                            isShort ?
                                <div className="absolute bottom-0 right-0 bg-base-100/60">
                                    <Link className="btn btn-ghost" to={"/movie/" + movie.data.id}>View Detail</Link>
                                </div>
                                : ''
                        }

                    </div>
                    <div className="space-y-5 p-5">
                        <Link className="text-center text-2xl font-semibold mt-5 block mx-auto" to={"/movie/" + movie.data.id}>{movie.data.title_english}</Link>
                        <div className=" flex flex-col md:flex-row md:justify-between">
                            <span>Uploaded {moment(movie.data.date_uploaded).fromNow()}</span>
                            <div className="md:space-x-5 flex flex-col md:flex-row">
                                <span>Rating: {movie.data.rating === 0 ? "unknown" : `${movie.data.rating}/10`}</span>
                                <span>Runtime:  {movie.data.runtime === 0 ? "unknown" : `${movie.data.runtime} minutes`} </span>
                                <span>Year: {movie.data.year}</span>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between">
                            <div></div>
                            <div className="md:space-x-5 flex flex-col md:flex-row">
                                <span>Likes: {movie.data.like_count}</span>
                                <span>Downloads: {movie.data.download_count}</span>
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
                        {
                            !isShort ?
                                <div className="flex flex-col divide-y">
                                    {movie.data.torrents ?
                                        movie.data.torrents.map((torrent) =>
                                            <div className="grid lg:grid-cols-3  items-center">
                                                <div className="flex flex-col">
                                                    <span>{torrent.quality}</span>
                                                    <span className="uppercase">{torrent.type}</span>
                                                    <span>Size {torrent.size}</span>
                                                </div>

                                                <div className="space-x-2">
                                                    <span>Peers: {torrent.peers}</span>
                                                    <span>Seeders: {torrent.seeds}</span>
                                                </div>

                                                <div className="flex flex-row lg:flex-col w-full">
                                                    <a className="btn btn-ghost gap-3" href={`magnet:?xt=urn:btih:${torrent.hash}&dn=Url+Encoded+Movie+Name&tr=http://track.one:1234/announce&tr=udp://track.two:80`}>
                                                        <img src={magnetImage} className="h-5 w-5" />
                                                        Magnet
                                                    </a>
                                                    <a className="btn btn-ghost" href={torrent.url}>Download</a>
                                                </div>

                                            </div>
                                        )
                                        : ''
                                    }
                                </div>
                                : ''
                        }



                        <div className="flex flex-col space-y-5">

                            {movie.data.yt_trailer_code === '' ?
                                ''
                                : <iframe className="block mx-auto w-full h-64"
                                    src={`https://www.youtube.com/embed/${movie.data.yt_trailer_code}`}>
                                </iframe>
                            }

                            <div class="carousel rounded-box w-full">

                                {
                                    !isShort ?
                                        <>
                                            <div class="carousel-item h-80 w-auto">
                                                <img src={movie.data.large_screenshot_image1} alt="Screenshot 1" />
                                            </div>
                                            <div class="carousel-item  h-80 w-auto">
                                                <img src={movie.data.large_screenshot_image2} alt="Screenshot 2" />
                                            </div>
                                            <div class="carousel-item  h-80 w-auto">
                                                <img src={movie.data.large_screenshot_image3} alt="Screenshot 3" />
                                            </div>
                                        </>
                                        : ''
                                }

                            </div>
                        </div>





                        <div>{movie.data.description_full}</div>



                        {
                            !isShort && movie.data.cast ?
                                <div className="flex flex-col space-y-3">
                                    <div className="text-2xl font-bold">Casts</div>

                                    {
                                        movie.data.cast.map((person) =>
                                            <div className="flex flex-row items-center space-x-3">
                                                <img src={person.url_small_image} className="w-10 h-10 rounded-full object-cover" />
                                                <span><a className="font-semibold" href={`https://www.imdb.com/name/nm${person.imdb_code}`} target="_blank">{person.name}</a> as {person.character_name}</span>
                                            </div>
                                        )
                                    }

                                </div>
                                : ''
                        }
                        <a href={movie.data.url} target="_blank" className="text-accent pt-5">View on original site</a>
                    </div>
                </div>
            }
        </>

    );
}