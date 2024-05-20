import { Box, Button, Heading, Text } from "@chakra-ui/react";
import imgHero from "../assets/image-hero.jpeg"
import Image from "next/image";

export default function HomePage() {

  return (
    <Box>
      <Box
        as={Image}
        src={imgHero}
        maxWidth={'100%'}
        width={'100%'}
        height={{ base:'600px', md:'auto' }}
        objectFit={'cover'}
        filter={'brightness(60%)'}
      />
      <Box
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%, -50%)'}
        color={'white'}
        textAlign={'center'}
        maxW={'90%'}
        width={'100%'}
        zIndex={50}
      >
        <Heading
          as={'h2'}
          fontSize={{ base: '4xl', md: '6xl', lg: '8xl' }}
          textShadow={'xl'}
          py={2}
        >
          Bienvenidos a nuestra iglesia
        </Heading>
        <Text
          textShadow={'xl'}
          maxW={'60%'}
          width={'100%'}
          marginX={'auto'}
          py={2}
        >
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        </Text>
        <Button
          my={2}
          colorScheme="yellow"
        >
          Ver Más
        </Button>
      </Box>
    </Box >
  );
}
