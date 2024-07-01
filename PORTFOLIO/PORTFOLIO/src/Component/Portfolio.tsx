import React from "react";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import PortfolioCard from "./PortfolioCard"; // Make sure the path is correct

const Portofolio: React.FC = () => {
  return (
    <Container maxW="7xl" mt="8">
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%" h="10">
          <PortfolioCard
            title="Tokopedia"
            description="ini deskripsi tokopedia"
            image="https://w7.pngwing.com/pngs/636/874/png-transparent-anime-drawing-manga-anime-girl-cg-artwork-black-hair-cartoon-thumbnail.png"
          />
        </GridItem>
        <GridItem w="100%" h="10">
          <PortfolioCard
            title="Shopee"
            description="ini deskripsi shopee"
            image="https://w7.pngwing.com/pngs/636/874/png-transparent-anime-drawing-manga-anime-girl-cg-artwork-black-hair-cartoon-thumbnail.png"
          />
        </GridItem>
        <GridItem w="100%" h="10">
          <PortfolioCard
            title="Carousell"
            description="ini deskripsi carousell"
            image="https://w7.pngwing.com/pngs/636/874/png-transparent-anime-drawing-manga-anime-girl-cg-artwork-black-hair-cartoon-thumbnail.png"
          />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Portofolio;
