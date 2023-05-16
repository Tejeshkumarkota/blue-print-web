import { Box, Heading, Text } from "@chakra-ui/react";
import AboutImgComp from "./AboutImgComp/AboutImgComp";

const AboutValue = () => {
  return (
    <>
      <Box id="valueSlide">
        <Heading
          as="h1"
          textAlign="center"
          fontSize="36px"
          fontWeight="600"
          lineHeight="41px"
          mb="6"
        >
          Our Values
        </Heading>

        <Text textAlign="center" fontSize="20px" fontWeight="400" mb="4">
          Integrity, innovation, and excellence are the core values that drive
          everything we do at RealCube. We believe in honesty, transparency and
          ethical business practices, and we always strive to do the right
          thing, even when no one is looking. We are dedicated to pushing the
          boundaries of technology and delivering innovative solutions that
          change the world for the better.
        </Text>
      </Box>
      <Box py="10">
        <AboutImgComp/>
      </Box>
    </>
  );
};
export default AboutValue;
