import { Box, Heading, Text } from "@chakra-ui/react";
import AboutImgComp from "./AboutImgComp/AboutImgComp";

const AboutMission = () => {

  const data = [
    {
      icon: "/images/Amenities.png",
    },
    {
      icon: "/images/Amenities.png",
    },
    {
      icon: "/images/Amenities.png",
    },
    {
      icon: "/images/Amenities.png",
    },
  ];

  return (
    <>
      <Box id="missionSlide">
        <Heading
          as="h1"
          textAlign="center"
          fontSize="36px"
          fontWeight="600"
          lineHeight="41px"
          mb="10"
        >
          Our Mission
        </Heading>
        <Text textAlign="center" fontSize="20px" fontWeight="400" mb="4">
          At RealCube, our mission is to revolutionize the property and
          facilities management industry through our cutting-edge, cloud-based
          technology.
        </Text>
        <Text textAlign="center" fontSize="20px" fontWeight="400" mb="4">
          We believe in the power of modern solutions to transform the way
          people manage communities, properties and facilities, making it
          easier, more efficient and more sustainable. We are committed to our
          customers and to making a positive impact in the world.
        </Text>
      </Box>
      <Box py="10">
        <AboutImgComp/>
      </Box>
    </>
  );
};
export default AboutMission;
