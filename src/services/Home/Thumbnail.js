import moment from "moment";
import { useContext, useState } from "react";
import { DrawerContext } from "../../context/DrawerContext";

export const Thumbnail = ({ movie }) => {
    const [showDetail, setShowDetail] = useState(false)
    const { setSideBarContent } = useContext(DrawerContext);

    const setSideBarData = () => {
        setSideBarContent(
            <>
                <img src={movie.background_image} className="object-cover h-52 w-full rounded-t-xl" />
                <div className="-mt-32 relative">
                    <img src={movie.large_cover_image} className="mx-auto rounded-xl h-64" />

                    <div className="absolute bottom-0 right-0 bg-base-100/60">
                        <button className="btn btn-ghost">View</button>
                    </div>
                </div>
                <div className="space-y-5">
                    <div className="text-center text-2xl font-semibold mt-5">{movie.title_english}</div>
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
            </>
        )
    }
    return (
        <div>
            <div class="relative" onMouseEnter={e => setShowDetail(true)} onMouseLeave={e => setShowDetail(false)}>
                {
                    showDetail ?
                        <label className="absolute top-0 left-0 w-full h-full bg-base-100/60 flex flex-col justify-center items-center space-y-5" for="drawer" onClick={e => setSideBarData()}>
                            <span className="text-4xl font-bold">{movie.rating}/10</span>
                            <div className="flex flex-col space-y-2 text-2xl text-center font-semibold">
                                {movie.genres.map((genre, index) =>
                                    <span key={index}>{genre}</span>
                                )}
                            </div>
                            <div className="btn btn-primary">View</div>
                        </label>
                        : ''

                }

                <img src={movie.medium_cover_image} className="w-full rounded-box h-96" />
            </div>
            <div className="flex flex-col text-center">
                <span className="font-semibold text-lg">{movie.title_english}</span>
                <span>{movie.year}</span>
            </div>
        </div>
    );
}