import moment from "moment";
import { Link } from 'react-router-dom'
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
                        <span>Rating: {movie.rating === 0 ? "unknown" : `${movie.rating}`}</span>
                        <span>Runtime:  {movie.runtime === 0 ? "unknown" : `${movie.runtime} minutes`} </span>
                        <span>Year: {movie.year}</span>
                    </div>
                </div>
                <div className="flex space-x-2">
                    {movie.genres.map((genre, index) =>
                        <span key={index} className="badge badge-primary">{genre}</span>
                    )}
                </div>

                <div>
                    {movie.summary}
                </div>

                <a href={movie.url} target="_blank" className="text-accent pt-5">View on original site</a>
            </div>
        </div>
    );
}