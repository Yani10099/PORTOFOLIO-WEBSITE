// Jumbotron.tsx

import React from "react";
import {
  Container,
  SimpleGrid,
  Flex,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";

interface JumbotronProps {}

const Jumbotron: React.FC<JumbotronProps> = () => {
  return (
    <Container maxW="7xl" mt="4">
      <SimpleGrid columns={2}>
        <Flex flexDir="column" justifyContent="center">
          <Text fontSize="5xl">Hai!</Text>
          <Text fontSize="3xl">Welcome to Yanca's Page</Text>
        </Flex>
        <Box>
          <Image
            src="https://w7.pngwing.com/pngs/636/874/png-transparent-anime-drawing-manga-anime-girl-cg-artwork-black-hair-cartoon-thumbnail.png"
            alt="anime"
          />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Jumbotron;
