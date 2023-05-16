import { Box, Heading, Text } from "@chakra-ui/react";
import AboutImgComp from "./AboutImgComp/AboutImgComp";

const AboutVision = () => {
  return (
    <>
    <Box id="visionSlide">
      <Heading
        as="h1"
        textAlign="center"
        fontSize="36px"
        fontWeight="600"
        lineHeight="41px"
        mb="6"
      >
        Our Vision
      </Heading>
      <Text textAlign="center" fontSize="20px" fontWeight="400" mb="4">
        Our vision is to become the world's leading provider of cutting-edge
        technology solutions for sustainable communities and cities. We aim to
        empower people and businesses with the tools they need to succeed in
        the digital age, and we will continue to push the limits of what's
        possible to make this vision a reality. With a focus on innovation and
        excellence, we will continue to create products that transform the
        world and make a positive impact on society.
      </Text>
    </Box>
      <Box py="10">
        <AboutImgComp/>
      </Box>
    </>
  );
};
export default AboutVision;
