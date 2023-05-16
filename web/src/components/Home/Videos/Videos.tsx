import { Box, Container, Flex, Image,
  Card,
  Heading,
  SimpleGrid,
  Text, } from "@chakra-ui/react";
import VideosDescription from "./VideosDescription/VideosDescription";

const Videos = () => {
  return (
    <>
      <Box
        minH="400px"
        py={10}
      >
        <Container maxW={"6xl"} px={{sm:'5', md:'5', lg: '0'}} py={5}>
          <Box>
            <Heading as="h6" fontSize="18px" fontWeight="700" mb="5">
              Videos
            </Heading>
            <Heading as="h1" fontSize="32px" mb="8" fontWeight="700">
              Highlights from RealCube at Cityscape
            </Heading>
            {/* <Text fontSize="sm" color="gray.700">
              Our record-breaking deals and global reach has combined forces
              on a strong marketing and technology platform to create the most
              influential luxury real estate firm in the region is supported
              by the world's largest global realty brand.
            </Text> */}
          </Box>
            <Box>
                <VideosDescription />
              </Box>
        </Container>
      </Box>
    </>
  );
};

export default Videos;
