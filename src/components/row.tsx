import { Box, Flex, Heading, IconButton, Image } from "@chakra-ui/react"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export default function Row({ movies, label }){
  const [scrollX, setScrollX] = useState(-400)

  function handleLeftArrow(){
    let x = scrollX + Math.round(window.innerWidth / 2)
    if(x > 0){
      x = 0
    }

    setScrollX(x)
  }

  function handleRightArrow(){
    let x = scrollX - Math.round(window.innerWidth / 2)
    let totalWidth = movies.length * 150
    if((window.innerWidth - totalWidth) > x){
      x = (window.innerWidth - totalWidth) - 5
    }

    setScrollX(x)
  }

  return (
    <Box w="100vw" h="280px" as="section">
      <Heading 
        mb="15px" 
        mt="20px" 
        ml="3rem" 
        as="h2" 
        size="md"
      >
        {label}
      </Heading>
      <IconButton 
        icon={<FontAwesomeIcon icon={faArrowLeft} />} 
        aria-label="mover para esquerda"
        left="0"
        h="230px"
        bgColor="#00000070"
        pos="absolute"
        zIndex={2}
        onClick={handleLeftArrow}
        borderRadius="none"
        _hover={{
          bgColor: "#00000090"
        }}
      />
      <IconButton 
        icon={<FontAwesomeIcon icon={faArrowRight} />} 
        aria-label="mover para direita"
        right="0"
        h="230px"
        bgColor="#00000070"
        pos="absolute"
        zIndex={2}
        onClick={handleRightArrow}
        borderRadius="none"
        _hover={{
          bgColor: "#00000090"
        }}
      />
      <Flex 
        pos="relative" 
        flexDir="row" 
        w={movies.length * 150} 
        marginLeft={scrollX} 
        flexShrink="unset"
        transition="ease-in-out .3s"
      >
        {movies.map(movie => { 
            const poster_path = "https://image.tmdb.org/t/p/w200" + movie.poster_path
            return (
              <Image 
                width="150px" 
                height="230px"
                m="0 5px"
                src={poster_path} 
                alt={movie.title}
                title={movie.title}
                key={movie.id}
                transition=".3s"
                _hover={{
                  transform: "scale(1.3)",
                  borderRadius: "sm"
                }}
              />
            )
          })
        }   
      </Flex>
    </Box>
  )
}