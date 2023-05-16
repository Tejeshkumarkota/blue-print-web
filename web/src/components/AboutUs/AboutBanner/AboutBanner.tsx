import { Box, Container, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import AboutBannerImg from "./AboutBannerImg/AboutBannerImg";
import BannerContent from "./BannerContent/BannerContent";

const AboutBanner = () => {
  return (
    <>
     <Box
      bg={useColorModeValue("whiteAlpha.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.400")}
    >
    <Container maxW={"6xl"} px={{ sm: "5", md: "5", lg: "0" }} pb="10">
      
     <SimpleGrid
            columns={{ md: "1", lg: "2" }}
            spacing={6}
            w="100%"
            alignItems="center"
            pb="5"
          >
            <Box>
              <BannerContent />
            </Box>
            <Box>
              <AboutBannerImg />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default AboutBanner;
