export const MovieDownloads = ({ movie }) => {


    return (
        <div className="grid grid-cols-3 gap-10">
            {movie.torrents ?
                movie.torrents.map((torrent) =>
                    <>
                        <div className="card shadow-xl bg-base-200">
                            <figure><img src={`https://yts.mx/assets/images/website/${torrent.quality}-quality.svg`} alt={`${torrent.quality} svg image`} className="pt-10" /></figure>
                            <div className="card-body items-center">
                                <div className="grow"></div>

                                <h2 className="card-title">
                                    <div className="uppercase">
                                        {torrent.type}
                                    </div>
                                    {torrent.quality}</h2>
                                <div className="space-x-2">
                                    <span>Peers: {torrent.peers}</span>
                                    <span>Seeders: {torrent.seeds}</span>
                                </div>
                                <div className="card-actions justify-center">
                                    <a className="btn btn-sm btn-primary gap-3" href={`magnet:?xt=urn:btih:${torrent.hash}&dn=Url+Encoded+Movie+Name&tr=http://track.one:1234/announce&tr=udp://track.two:80`}>
                                        Magnet
                                    </a>
                                    <a className="btn btn-sm btn-primary" href={torrent.url}>Download</a>
                                </div>
                            </div>
                        </div>
                    </>
                )
                : ''
            }
        </div>
    );
}