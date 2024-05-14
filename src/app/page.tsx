import { Box, Heading, Image, Text } from "@chakra-ui/react";
import imgHero from "../assets/image-hero.jpeg"

export default function HomePage() {

  return (
    <Box
      position={'relative'}
      maxW={'1200px'}
      px={2}
      mt={'4rem'}
      marginX={'auto'}
    >
      <Image
        src={imgHero.src}
        width={'100%'}
        rounded={30}
        filter={'brightness(70%)'}
      />
      <Box
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%, -50%)'}
        color={'white'}
        textAlign={'center'}
      >
        <Heading>
          Bienvenidos a nuestra iglesia
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        </Text>
      </Box>

    </Box >
  );
}
