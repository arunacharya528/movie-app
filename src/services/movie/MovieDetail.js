import moment from "moment";
import { Link } from 'react-router-dom'
import magnetImage from "../../assets/image/magnet.png"
export const MovieDetail = ({ movie, isShort = false }) => {
    return (
        <div>
            <img src={movie.background_image} className="object-cover h-52 w-full rounded-t-xl" />
            <div className="-mt-32 relative">
                <img src={movie.large_cover_image} className="mx-auto rounded-xl h-64" />
                {
                    isShort ?
                        <div className="absolute bottom-0 right-0 bg-base-100/60">
                            <Link className="btn btn-ghost" to={"/movie/" + movie.id}>View Detail</Link>
                        </div>
                        : ''
                }

            </div>
            <div className="space-y-5">
                <Link className="text-center text-2xl font-semibold mt-5 block mx-auto" to={"/movie/" + movie.id}>{movie.title_english}</Link>
                <div className=" flex justify-between">
                    <span>Uploaded {moment(movie.date_uploaded).fromNow()}</span>
                    <div className="space-x-5">
                        <span>Rating: {movie.rating === 0 ? "unknown" : `${movie.rating}/10`}</span>
                        <span>Runtime:  {movie.runtime === 0 ? "unknown" : `${movie.runtime} minutes`} </span>
                        <span>Year: {movie.year}</span>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div></div>
                    <div className="space-x-5">
                        <span>Likes: {movie.like_count}</span>
                        <span>Downloads: {movie.download_count}</span>
                    </div>
                </div>
                <div className="flex space-x-2">
                    {movie.genres.map((genre, index) =>
                        <span key={index} className="badge badge-primary">{genre}</span>
                    )}
                </div>
                {
                    !isShort ?
                        <div className="flex flex-col divide-y">
                            {
                                movie.torrents.map((torrent) =>
                                    <div className="grid lg:grid-cols-5  items-center">
                                        <span>{torrent.quality}</span>
                                        <span className="uppercase">{torrent.type}</span>

                                        <span>Size {torrent.size}</span>
                                        <div className="space-x-2">
                                            <span>Peers: {torrent.peers}</span>
                                            <span>Seeds: {torrent.seeds}</span>
                                        </div>

                                        <div className="flex flex-row">
                                            <a className="btn btn-ghost gap-3" href={`magnet:?xt=urn:btih:${torrent.hash}&dn=Url+Encoded+Movie+Name&tr=http://track.one:1234/announce&tr=udp://track.two:80`}>
                                                <img src={magnetImage} className="h-5 w-5" />
                                                Magnet
                                            </a>
                                            <a className="btn btn-ghost" href={torrent.url}>Download</a>
                                        </div>

                                    </div>
                                )
                            }
                        </div>
                        : ''
                }




                <div class="carousel rounded-box">
                    <div class="carousel-item h-80 w-1/2">
                        {movie.yt_trailer_code === '' ?
                            ''
                            : <iframe className="block mx-auto w-full"
                                src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}>
                            </iframe>
                        }
                    </div>
                    {
                        !isShort ?
                            <>
                                <div class="carousel-item h-80 w-auto">
                                    <img src={movie.large_screenshot_image1} alt="Screenshot 1" />
                                </div>
                                <div class="carousel-item  h-80 w-auto">
                                    <img src={movie.large_screenshot_image2} alt="Screenshot 2" />
                                </div>
                                <div class="carousel-item  h-80 w-auto">
                                    <img src={movie.large_screenshot_image3} alt="Screenshot 3" />
                                </div>
                            </>
                            : ''
                    }

                </div>



                {isShort ?
                    <div>{movie.summary}</div>
                    :
                    <div>{movie.description_full}</div>
                }


                {
                    !isShort ?
                        <div className="flex flex-col space-y-3">
                            <div className="text-2xl font-bold">Casts</div>

                            {
                                movie.cast.map((person) =>
                                    <div className="flex flex-row items-center space-x-3">
                                        <img src={person.url_small_image} className="w-10 h-10 rounded-full object-cover" />
                                        <span><a className="font-semibold" href={`https://www.imdb.com/name/nm${person.imdb_code}`} target="_blank">{person.name}</a> as {person.character_name}</span>
                                    </div>
                                )
                            }

                        </div>
                        : ''
                }
                <a href={movie.url} target="_blank" className="text-accent pt-5">View on original site</a>
            </div>
        </div>
    );
}