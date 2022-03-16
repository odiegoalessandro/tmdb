import { Flex, Image as ChakraImage } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar({ currentColor }){
  return (
    <Flex 
      w="full"
      h="3.5rem"
      zIndex="9"
      pos="fixed"
      bgColor={currentColor}
      px="2rem"
      justify="space-between"
      transition="linear .3s"
    >
      <Link href="/" passHref>
        <Image src="/netflix-logo.svg" width="120px" height="50px" alt="netflix logo" />
      </Link>
      <ChakraImage alignSelf="center" src="/user-icon.png" w="30px" h="30px" />
    </Flex>
  )
}