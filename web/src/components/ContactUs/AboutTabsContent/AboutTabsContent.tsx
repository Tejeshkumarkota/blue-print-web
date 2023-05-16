import {
  Box,
  Container,
  Flex,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import AboutMission from "./AboutMission/AboutMission";
import AboutValue from "./AboutValue/AboutValue";
import AboutVision from "./AboutVision/AboutVision";
import AboutExalogic from "./AboutExalogic/AboutExalogic";

const AboutTabsContent = () => {
  return (
    <>
      <Box
         pt={10}
        bg={useColorModeValue("whiteAlpha.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.400")}
      >
        <Container maxW={"6xl"} px={{ sm: "5", md: "5", lg: "0" }} py={5}>
          <Box>
            <AboutMission/>
          </Box>
          <Box>
            <AboutValue/>
          </Box>
          <Box>
            <AboutVision/>
          </Box>
          <Box>
            <AboutExalogic/>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default AboutTabsContent;
