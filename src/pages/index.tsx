import { Box, Flex, Spacer, VStack } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import { useEffect, useState } from "react"
import Navbar from "../components/navbar"
import Row from "../components/row"
import Slider from "../components/slider"
import TMDb from "../lib/TMDb"

export default function Home({
  originals,
  trending,
  movieTheater,
  horror,
  action,
  adventure,
  comedy,
  scienceFiction,
  drama,
  romance,
}) {
  const [sliderCurrentMovie, setSliderCurrentMovie] = useState<any>({})
  const [currentColor, setCurrentColor] = useState("transparent")

  
  useEffect(() => {
    function scrollEvent(){
      if(window.scrollY > 10){
        setCurrentColor("black")
      } else{
        setCurrentColor("transparent")
      }
    }

    function selectRandomMovie(){
      const randomIndex = Math.floor(Math.random() * originals.results.length)
      const chosenMovie = originals.results[randomIndex]
    
      return chosenMovie
    }
    
    window.addEventListener("scroll", scrollEvent)
    
    setSliderCurrentMovie(selectRandomMovie())

    return () => window.removeEventListener("scroll", scrollEvent)
  }, [originals])

  return (
    <Flex flexDirection="column">
      <Navbar currentColor={currentColor} />
      <div style={{height: "70vh"}} />
      <Slider movie={sliderCurrentMovie} />
      <VStack mb="3rem">
        <Row label="Originais da netflix" movies={originals.results} />
        <Row label="Em alta" movies={trending.results} />
        <Row label="Em cartaz" movies={movieTheater.results} />
        <Row label="Terror" movies={horror.results} />
        <Row label="Ação" movies={action.results} />
        <Row label="Aventura" movies={adventure.results} />
        <Row label="Comédia" movies={comedy.results} />
        <Row label="Ficção cientifica" movies={scienceFiction.results} />
        <Row label="Drama" movies={drama.results} />
        <Row label="Romance" movies={romance.results} />
      </VStack>
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: originals } = await TMDb.get(`discover/tv/?with_network=213&language=pt-BR&api_key=${process.env.TMDB_KEY}`)
  const { data: trending } = await TMDb.get(`trending/all/week?language=pt-BR&api_key=${process.env.TMDB_KEY}`)
  const { data: movieTheater } = await TMDb.get(`movie/now_playing?api_key=${process.env.TMDB_KEY}&language=pt-BR&page=1&region=br`)
  const { data: horror } = await TMDb.get(`discover/movie?with_genres=27&language=pt-BR&api_key=${process.env.TMDB_KEY}`)
  const { data: action } = await TMDb.get(`discover/movie?with_genres=28&language=pt-BR&api_key=${process.env.TMDB_KEY}`)
  const { data: adventure } = await TMDb.get(`discover/movie?with_genres=12&language=pt-BR&api_key=${process.env.TMDB_KEY}`)
  const { data: comedy } = await TMDb.get(`discover/movie?with_genres=35&language=pt-BR&api_key=${process.env.TMDB_KEY}`)
  const { data: scienceFiction } = await TMDb.get(`discover/movie?with_genres=878&language=pt-BR&api_key=${process.env.TMDB_KEY}`)
  const { data: drama } = await TMDb.get(`discover/movie?with_genres=18&language=pt-BR&api_key=${process.env.TMDB_KEY}`)
  const { data: romance } = await TMDb.get(`discover/movie?with_genres=10749&language=pt-BR&api_key=${process.env.TMDB_KEY}`)

  return {
    props: {
      originals,
      trending,
      movieTheater,
      horror,
      action,
      adventure,
      comedy,
      scienceFiction,
      drama,
      romance,
    }
  }
}