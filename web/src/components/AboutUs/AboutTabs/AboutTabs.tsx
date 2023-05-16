import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

const AboutTabs = () => {
  return (
    <>
      <Box
        borderY="1px solid"
        borderColor={"gray.100"}
        bg={useColorModeValue("whiteAlpha.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.400")}
      >
        <Container maxW={"6xl"} px={{ sm: "5", md: "5", lg: "0" }} py={4}>
          <Box>
            <SimpleGrid spacing="6" columns={{ sm: 1, md: 2, lg: 3 }}>
              <Box>
                <Link _hover={{ textDecoration: "none" }} href="#missionSlide">
                  <Flex justifyContent={"center"}>
                    <Box
                      as="span"
                      _hover={{
                        boxShadow: "0 2px 18px rgb(0 0 0 / 50%)",
                        borderRadius: "0",
                      }}
                      className="abouttab"
                      display="inline-flex"
                      alignItems={"center"}
                    >
                      <Image
                        alt="img"
                        src="/images/our-mission.png"
                        _hover={{ borderRadius: "0" }}
                        width="61px"
                        height="57px"
                      />
                      <Box
                        as="span"
                        px="4"
                        fontSize={"18px"}
                        fontWeight={600}
                      >
                        Our Mission
                      </Box>
                    </Box>
                  </Flex>
                </Link>
              </Box>
              <Box>
                <Link _hover={{ textDecoration: "none" }} href="#valueSlide">
                  <Flex justifyContent={"center"}>
                    <Box
                      as="span"
                      _hover={{
                        boxShadow: "0 2px 18px rgb(0 0 0 / 50%)",
                        borderRadius: "0",
                      }}
                      className="abouttab"
                      display="inline-flex"
                      alignItems={"center"}
                    >
                      <Image
                        alt="img"
                        src="/images/our-value.png"
                        width="61px"
                        height="57px"
                      />
                      <Box
                        px="4"
                        as="span"
                        fontSize={"18px"}
                        fontWeight={600}
                      >
                        Our Values
                      </Box>
                    </Box>
                  </Flex>
                </Link>
              </Box>
              <Box>
                <Link _hover={{ textDecoration: "none" }} href="#visionSlide">
                  <Flex justifyContent={"center"}>
                    <Box
                      as="span"
                      _hover={{
                        boxShadow: "0 2px 18px rgb(0 0 0 / 50%)",
                        borderRadius: "0",
                      }}
                      className="abouttab"
                      display="inline-flex"
                      alignItems={"center"}
                    >
                      <Image
                        alt="img"
                        _hover={{ borderRadius: "0" }}
                        src="/images/our-vision.png"
                        width="61px"
                        height="57px"
                      />
                      <Box
                        as="span"
                        px="4"
                        fontSize={"18px"}
                        fontWeight={600}
                      >
                        Our Vision
                      </Box>
                    </Box>
                  </Flex>
                </Link>
              </Box>
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default AboutTabs;
