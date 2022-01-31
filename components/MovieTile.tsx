import '../styles/Home.module.css'

//#region Types
interface MovieProps {
    id: number,
    poster_path: string,
    vote_average: number,
    title: string,
    overview?: string
}
//#endregion

export const MovieTile = (props: MovieProps) => {
    const {
        id,
        poster_path: imageSrc,
        vote_average: score,
        title,
        overview,
    } = props

    return (
        <div key={id} className="movie-tile bg-white border border-gray-500 rounded grid gap-1 overflow-hidden">
            <img src={`https://image.tmdb.org/t/p/original${imageSrc}`} />
            <div className="p-2 md:p-4 flex flex-col">
                <span className="movie-tile__title text-lg text-gray-800 font-semibold transition-colors">{title}</span>
                <span className="mb-3 md:mb-5">score: {score}</span>
                <p className="text-sm">{overview.substring(0, 200)}...</p>
            </div>
        </div>
    )
}