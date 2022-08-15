import { useState } from "react";

export const Thumbnail = ({ movie }) => {
    const [showDetail, setShowDetail] = useState(false)
    return (
        <div>
            <div class="relative" onMouseEnter={e => setShowDetail(true)} onMouseLeave={e => setShowDetail(false)}>
                {
                    showDetail ?
                        <div className="absolute top-0 left-0 w-full h-full bg-base-100/60 flex flex-col justify-center items-center space-y-5">
                            <span className="text-4xl font-bold">{movie.rating}/10</span>
                            <div className="flex flex-col space-y-2 text-2xl text-center font-semibold">
                                {movie.genres.map((genre, index) =>
                                    <span key={index}>{genre}</span>
                                )}
                            </div>
                            <div className="btn btn-primary">View</div>
                        </div>
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