import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DrawerContext } from "../../context/DrawerContext";
import { MovieDetail } from "../movie/MovieDetail";

export const Thumbnail = ({ movie, size }) => {
    const [showDetail, setShowDetail] = useState(false)
    const { setSideBarContent } = useContext(DrawerContext);

    const setSideBarData = () => {
        setSideBarContent(<MovieDetail id={movie.id} isShort={true} />)
    }

    // console.log(movie.id)
    return (
        <div>
            <div class="relative w-max block mx-auto" onMouseEnter={e => setShowDetail(true)} onMouseLeave={e => setShowDetail(false)}>
                {
                    showDetail ?
                        <label className="absolute top-0 left-0 w-full h-full bg-base-100/60 flex flex-col justify-center items-center space-y-5" for="drawer" onClick={e => setSideBarData()}>
                            <span className="text-2xl font-bold">{movie.rating}/10</span>
                            <div className="flex flex-row space-x-2 flex-wrap text-xl justify-center font-semibold">
                                {movie.genres.map((genre, index) =>
                                    <span key={index}>{genre}</span>
                                )}
                            </div>
                            <span className="btn btn-primary">View</span>
                        </label>
                        : ''

                }

                <img src={movie.medium_cover_image} className={"rounded-box h-" + (size === 'small' ? 64 : '')} />
            </div>
            <div className="flex flex-col text-center">
                <Link className="font-semibold text-lg" to={"/movie/" + movie.id}>{movie.title_english}</Link>
                <span>{movie.year}</span>
            </div>
        </div>
    );
}