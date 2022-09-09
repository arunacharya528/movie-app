import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom'
import { Loading } from "../../components/Loading";
import { getMovieDetail } from "./data";
import { MovieDownloads } from "./MovieDownloads";
import { MovieInfo } from "./MovieInfo";
export const MovieDetail = () => {

    const location = useLocation();
    const initialData = { loading: true, data: {} }
    const [movie, setMovie] = useState(initialData)
    const movieId = location.pathname.split("/")[2]


    useEffect(() => {
        if (movieId) {
            setMovie(initialData)
            getMovieDetail(movieId)
                .then(response => {
                    setMovie({ loading: false, data: response.data.data.movie })
                })
        }
    }, [movieId])


    const [selectedTab, setSelectedTab] = useState(0)
    const tabs = ["Info", "Trailer", "Images", 'Downloads']
    const getSelectedContainer = () => {
        switch (selectedTab) {
            case 0:
                return <MovieInfo movie={movie.data} />
            case 1:
                return (
                    <div>
                        {movie.data.yt_trailer_code === '' ?
                            <div className="h-80 flex flex-col justify-center items-center space-x-5">
                                <span className="text-5xl font-semibold py-5">(･_･)</span>
                                <span>No trailer available</span>
                            </div>
                            : <iframe className="w-full h-96"
                                src={`https://www.youtube.com/embed/${movie.data.yt_trailer_code}`}>
                            </iframe>
                        }
                    </div>
                );
            case 2:
                return (
                    <div className="grid lg:grid-cols-2 gap-5">
                        <img src={movie.data.large_screenshot_image1} onClick={() => { window.open(movie.data.large_screenshot_image1, "_blank") }} alt="Screenshot 1" className="rounded-box" />
                        <img src={movie.data.large_screenshot_image2} onClick={() => { window.open(movie.data.large_screenshot_image2, "_blank") }} alt="Screenshot 2" className="rounded-box" />
                        <img src={movie.data.large_screenshot_image3} onClick={() => { window.open(movie.data.large_screenshot_image3, "_blank") }} alt="Screenshot 3" className="rounded-box" />
                    </div>
                );
            case 3:
                return <MovieDownloads movie={movie.data} />;
        }
    }
    return (

        <div className="pb-20">
            {movie.loading ?
                <Loading />
                :
                <div className="relative">

                    <div>
                        <div className="relative">
                            <img src={movie.data.background_image} className="object-cover h-96 md:h-64 rounded-t-box w-full" />
                            <div className="absolute top-0 w-full h-full bg-primary/70 rounded-t-box grid md:grid-cols-3 md:gap-16">
                                <div></div>
                                <div className="col-span-2 flex flex-col justify-end items-center md:items-start text-center md:text-left  space-y-3 py-5">
                                    
                                    <div className="w-40 p-3 md:hidden">
                                        <img src={movie.data.large_cover_image} className="rounded-box w-auto !h-full" />
                                    </div>
                                    <span className="text-4xl font-bold" to={"/movie/" + movie.data.id}>{movie.data.title_english}</span>

                                    <div className="text-lg">
                                        <span>{movie.data.year}</span>
                                        &nbsp;&#10242;
                                        {movie.data.genres.join(", ")}
                                    </div>

                                    <div className="space-x-5">
                                        <a href="#">IMDB</a>
                                        <div className="stars" style={{ '--percent': (movie.data.rating * 10) + "%" }}></div>
                                        <span>{movie.data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className=" grid md:grid-cols-3 gap-16">
                        <div className="space-y-8">
                            <div className="absolute top-0 w-1/4 hidden md:block">
                                <img src={movie.data.large_cover_image} className="rounded-box w-full m-10" />
                            </div>
                            
                        </div> 
                        <div className="col-span-2 flex flex-col space-y-5">

                            <div className="!mt-5">
                                <div>
                                    <div class="tabs tabs-boxed">
                                        {
                                            tabs.map((tab, index) =>
                                                <a class={"tab " + (selectedTab === index ? 'tab-active' : '')} onClick={e => setSelectedTab(index)}>{tab}</a>
                                            )
                                        }
                                    </div>
                                    <div className="p-5">
                                        {getSelectedContainer()}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>

    );
}