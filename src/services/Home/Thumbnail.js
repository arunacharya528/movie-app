import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { DrawerContext } from "../../context/DrawerContext";
import { MoviePreview } from "../movie";
import { MovieDetail } from "../movie/MovieDetail";

export const Thumbnail = ({ movie, size }) => {
    const [showDetail, setShowDetail] = useState(true)
    const { setSideBarContent } = useContext(DrawerContext);
    const { hidden, setHidden } = useState(false)

    const setSideBarData = () => {
        // setSideBarContent(<></>)
        setSideBarContent(<MoviePreview id={movie.id} />)
    }

    // console.log(movie.id)
    return (
        <div className={hidden ? "hidden" : ''}>
            <div class="relative w-max block mx-auto" >
                {/* {
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

                } */}


                <label className="absolute top-0 left-0 w-full h-full flex flex-col space-y-5" for="drawer" onClick={e => setSideBarData()}>
                    {/* <span className="text-2xl font-bold">{movie.rating}/10</span> */}
                    {/* <div className="flex flex-row space-x-2 flex-wrap text-xl justify-center font-semibold">
                        {movie.genres.map((genre, index) =>
                            <span key={index}>{genre}</span>
                        )}
                    </div> */}
                    {/* <span className="btn btn-primary">View</span> */}
                    <div className="absolute bottom-0 w-full p-5 bg-gradient-to-t rounded-b-box from-slate-900/80 via-slate-900/90 to-transparent">
                        <div className="flex flex-row justify-between w-full">
                            <div className="flex flex-col w-full">
                                <Link className="font-semibold text-lg" to={"/movie/" + movie.id}>{movie.title_english}</Link>
                                <div className="stars" style={{ '--percent': (movie.rating * 10) + "%" }}></div>
                            </div>

                            <div className="flex flex-col text-right justify-between">
                                <div>{movie.year}</div>
                                <span className="btn btn-ghost btn-sm">View</span>
                            </div>
                        </div>
                    </div>
                </label>
                <img src={movie.medium_cover_image} className={"rounded-box h-" + (size === 'small' ? 64 : '')} onError={() => setHidden(true)} />
            </div>
            {/* <div className="flex flex-col text-center">

            </div> */}
        </div>
    );
}