import moment from "moment";

export const MovieInfo = ({ movie }) => {


    return (
        <div className="grid grid-cols-2">
            <div className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-3">
                    <span>Runtime:  {movie.runtime === 0 ? "unknown" : `${movie.runtime} minutes`} </span>
                    <span>Likes: {movie.like_count}</span>
                    <span>Downloads: {movie.download_count}</span>
                    <span>Uploaded {moment(movie.date_uploaded).fromNow()}</span>
                </div>
                {
                    movie.cast ?
                        <div className="flex flex-col space-y-3">
                            <div className="text-xl font-medium">Casts</div>
                            {movie.data.cast.map((person) =>
                                <div className="flex flex-row items-center space-x-3">
                                    <img src={person.url_small_image} className="w-10 h-10 rounded-full object-cover" />
                                    <span><a className="font-semibold" href={`https://www.imdb.com/name/nm${person.imdb_code}`} target="_blank">{person.name}</a> as {person.character_name}</span>
                                </div>
                            )}
                        </div>
                        : ''
                }

                <a href={movie.url} target="_blank" className="text-accent pt-5">View on original site</a>

            </div>
            <div className="space-y-5">
                <div className="text-xl font-medium">Description</div>
                <div className="text-sm">{movie.description_full}</div>
            </div>
        </div>

    );
}