import axios, { AxiosResponse } from "axios";
import Head from 'next/head'
import { Button, MovieTile } from "../components";
import { useMovieData } from "../hooks";

export const getStaticProps = async () => {
  const apiKey = '97ecd2c6aa765b0bd30e0f2b67c63e5b'
  const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`);
  const { data } = await res;
  return { props: { data }}
}

export default function Home({ data }: AxiosResponse) {
  const {
    movieData,
    sortBest,
    sortWorst,
    sortNameDown,
    sortNameUp
  } = useMovieData({ data })

  return (
    <div className="m-4">
      <Head>
        <title>Film sorting app</title>
      </Head>
      <h1 className="text-center uppercase text-lg font-semibold mb-3 md:text-2xl md:mb-4">Simple movie sorting app</h1>
      <div className="flex gap-1 mb-3 md:mb-5 justify-start sm:justify-center flex-wrap">
        <Button sortingType={sortNameDown}>a-z</Button>
        <Button sortingType={sortNameUp}>z-a</Button>
        <Button sortingType={sortBest}>best</Button>
        <Button sortingType={sortWorst}>worst</Button>
      </div>
      <div className="max-w-5xl grid md:grid-cols-2 mx-auto gap-3 md:gap-5">
        {movieData.map(movie => <MovieTile key={movie.id} {...movie} /> )}
      </div>
    </div>
  )
}