import { Flex } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import Row from "../components/row"
import TMDb from "../lib/TMDb"

export default function Home({ 
  movieTheater,
  horror,
  action,
  adventure,
  comedy,
  scienceFiction,
  drama,
  romance,
  fantasy,
  documentary
}) {
  return (
    <Flex flexDirection="column"> 
      <Row label="Em cartaz" movies={movieTheater.results} />
      <Row label="Terror" movies={horror.results} />
      <Row label="Ação" movies={action.results} />
      <Row label="Aventura" movies={adventure.results} />
      <Row label="Comédia" movies={comedy.results} />
      <Row label="Ficção cientifica" movies={scienceFiction.results} />
      <Row label="Drama" movies={drama.results} />
      <Row label="Romance" movies={romance.results} />
      <Row label="Fantasia" movies={fantasy.results} />
      <Row label="Documentario" movies={documentary.results} />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: movieTheater } = await TMDb.get(`movie/now_playing?api_key=${process.env.TMDB_KEY}&language=pt-BR&page=1&region=br`)
  const { data: horror } = await TMDb.get(`discover/movie?with_genres=27&language=pt-BR&api_key=${process.env.TMDB_KEY}`)
  const { data: action } = await TMDb.get(`discover/movie?with_genres=28&language=pt-BR&api_key=${process.env.TMDB_KEY}`)
  const { data: adventure } = await TMDb.get(`discover/movie?with_genres=12&language=pt-BR&api_key=${process.env.TMDB_KEY}`)
  const { data: comedy } = await TMDb.get(`discover/movie?with_genres=35&language=pt-BR&api_key=${process.env.TMDB_KEY}`)
  const { data: scienceFiction } = await TMDb.get(`discover/movie?with_genres=878&language=pt-BR&api_key=${process.env.TMDB_KEY}`)
  const { data: drama } = await TMDb.get(`discover/movie?with_genres=18&language=pt-BR&api_key=${process.env.TMDB_KEY}`)
  const { data: romance } = await TMDb.get(`discover/movie?with_genres=10749&language=pt-BR&api_key=${process.env.TMDB_KEY}`)
  const { data: fantasy } = await TMDb.get(`discover/movie?with_genres=14&language=pt-BR&api_key=${process.env.TMDB_KEY}`)
  const { data: documentary } = await TMDb.get(`discover/movie?with_genres=99&language=pt-BR&api_key=${process.env.TMDB_KEY}`)

  return {
    props: {
      movieTheater,
      horror,
      action,
      adventure,
      comedy,
      scienceFiction,
      drama,
      romance,
      fantasy,
      documentary
    }
  }
}