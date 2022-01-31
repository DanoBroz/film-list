import axios from "axios";
import { useEffect, useState } from "react"

export const useMovieData = ({ data }) => {
    const [movieData, setMovieData] = useState([])

    const sortBest = _ => {
        setMovieData([...movieData.sort((a, b) => b.vote_average - a.vote_average)])
    }

    const sortWorst = _ => {
        setMovieData([...movieData.sort((a, b) => a.vote_average - b.vote_average)])
    }

    const sortNameDown = _ => {
        setMovieData([...movieData.sort((a, b) => a.title.localeCompare(b.title))])
    }

    const sortNameUp = _ => {
        setMovieData([...movieData.sort((a, b) => b.title.localeCompare(a.title))])
    }

    useEffect(() => { setMovieData(data.results) }, [])

    return { movieData, sortBest, sortWorst, sortNameDown, sortNameUp }
}