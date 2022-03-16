import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Slider({ movie }){
  const background = `https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`
  const date = new Date(movie.first_air_date)
  return (
    <Flex
      w="100%"
      h="90vh"
      bgColor="red"
      boxShadow="inset 30rem -20px 100px 30px black"
      bgImage={movie.backdrop_path ? background : undefined}
      bgSize="cover"
      bgPos="cente"
      flexDir="column"
      pos="absolute"
    >
      <Box m="10rem 3rem 0 3rem">
        <Heading size="2xl">{movie.name}</Heading>
        <HStack mt="2rem" spacing=".5rem">
          <Text color="green.500" fontWeight="bold">
            {movie.vote_average * 10} pontos
          </Text>
          <Text color="white" fontWeight="bold">
            {date.getFullYear()}
          </Text>
        </HStack>
        <Text w="35rem" color="#ffffff90">{String(movie.overview).substring(0, 400)}</Text>
        <HStack mt="1rem" spacing="1rem">
          <Button bgColor="white" color="black" leftIcon={<FontAwesomeIcon icon={faPlay} />} _hover={{}}>
            Assistir
          </Button>
          <Button leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Minha lista
          </Button>
        </HStack>
      </Box>
    </Flex>
  )
}