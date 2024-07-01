import { Box, Container, Text, Flex } from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Box bgColor="#E7F0DC" color="sage">
      <Container maxW="7xl">
        <Flex justify="space-between" p="4">
          <Text>Logo</Text>
          <Text display={{ base: "none", md: "block" }}>Profile</Text>
          <Box display={{ base: "block", md: "none" }}>
            <HiMenu size="20px" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
