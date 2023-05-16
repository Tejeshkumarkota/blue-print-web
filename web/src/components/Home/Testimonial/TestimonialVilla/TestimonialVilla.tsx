import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TestimonialVilla = () => {
  return (
    <>
      <Box
        bg="#fff"
        background="rgba(0, 0, 0, .8) url('/images/privacy-banner.webp') "
        backgroundBlendMode="darken"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        minH="400px"
        py={10}
      >
        <Container maxW={"6xl"} py={5} px={{ sm: "5", md: "5", lg: "0" }}>
          {/* <SimpleGrid columns={1} spacing={30} pb={10}> */}
          <Box
            className="home_slide"
            px={{ sm: "20px", md: "20px", lg: "100px" }}
          >
            <Carousel showArrows={false} showThumbs={false} autoPlay={true}>
              <Box>
                <Flex>
                  <Box mb="20px">
                    <Text fontSize="40px" color="#f2c458">
                      <RiDoubleQuotesL />
                    </Text>

                    <Text
                      textAlign="left"
                      fontSize="32px"
                      color="white"
                      lineHeight="55px"
                      px={{ md: "40px", lg: "70px" }}
                    >
                      Smooth and Transparent Process. We are very much satisfied
                      with the service of Realcube. From the Tenent visit till
                      signing off.
                    </Text>
                  </Box>
                </Flex>
                <Flex
                  justifyContent="end"
                  pb="80px"
                  px={{ md: "40px", lg: "70px" }}
                >
                  <Box
                    w="auto"
                    className="myVilla"
                    borderTop="2px"
                    borderColor="#f2c458"
                    textAlign="end"
                  >
                    <Image
                      src="/images/myVilla.png"
                      height="100%"
                      borderRadius="5px"
                      maxW="183px"
                      h="64px"
                      py="10px"
                      objectFit="cover"
                    />
                  </Box>
                </Flex>
              </Box>
              <Box>
                <Flex>
                  <Box mb="20px">
                    <Text fontSize="40px" color="#f2c458">
                      <RiDoubleQuotesL />
                    </Text>

                    <Text
                      textAlign="left"
                      fontSize="32px"
                      color="white"
                      lineHeight="55px"
                      px={{ md: "40px", lg: "70px" }}
                    >
                      Smooth and Transparent Process. We are very much satisfied
                      with the service of Realcube. From the Tenent visit till
                      signing off.
                    </Text>
                  </Box>
                </Flex>
                <Flex
                  justifyContent="end"
                  pb="80px"
                  px={{ md: "40px", lg: "70px" }}
                >
                  <Box
                    w="auto"
                    className="myVilla"
                    borderTop="2px"
                    borderColor="#f2c458"
                    textAlign="end"
                  >
                    <Image
                      src="/images/myVilla.png"
                      height="100%"
                      borderRadius="5px"
                      maxW="183px"
                      h="64px"
                      py="10px"
                      objectFit="cover"
                    />
                  </Box>
                </Flex>
              </Box>
              <Box>
                <Flex>
                  <Box mb="20px">
                    <Text fontSize="40px" color="#f2c458">
                      <RiDoubleQuotesL />
                    </Text>

                    <Text
                      textAlign="left"
                      fontSize="32px"
                      color="white"
                      lineHeight="55px"
                      px={{ md: "40px", lg: "70px" }}
                    >
                      Smooth and Transparent Process. We are very much satisfied
                      with the service of Realcube. From the Tenent visit till
                      signing off.
                    </Text>
                  </Box>
                </Flex>
                <Flex
                  justifyContent="end"
                  pb="80px"
                  px={{ md: "40px", lg: "70px" }}
                >
                  <Box
                    w="auto"
                    className="myVilla"
                    borderTop="2px"
                    borderColor="#f2c458"
                    textAlign="end"
                  >
                    <Image
                      src="/images/myVilla.png"
                      height="100%"
                      borderRadius="5px"
                      maxW="183px"
                      h="64px"
                      py="10px"
                      objectFit="cover"
                    />
                  </Box>
                </Flex>
              </Box>
            </Carousel>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default TestimonialVilla;
