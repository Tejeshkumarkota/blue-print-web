import {
  Box,
  Card,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TestimonialPropTour = () => {
  return (
    <>
      <Box>
        <Container maxW={"6xl"} pb="10" pt="5" px={{ sm: "5", md: "5", lg: "0" }}>
          <Card
            bg="#fff"
            my="5"
            backgroundImage="url('/images/view-360.png') "
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            alignItems="center"
            borderRadius={10}
          >
            <SimpleGrid
              columns={{ sm: "1", md: "1" }}
              spacing={7}
              alignItems="center"
              h="100%"
              w="100%"
              minH="250px"
            >
              <Box padding="30px">
                <Heading
                  as="h3"
                  fontSize="28px"
                  color="white"
                  mb="5"
                  fontWeight="600"
                >
                  Discover immersive 360 property tours
                </Heading>

                <Text fontSize="md" color="white" fontWeight="500">
                  Explore properties from the comfort of your home
                </Text>
              </Box>
            </SimpleGrid>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default TestimonialPropTour;
