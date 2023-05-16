import { Box, Heading, Text, Image } from "@chakra-ui/react";

const AboutExalogic = () => {

  return (
    <>
      <Box>
        <Heading
          as="h1"
          textAlign="center"
          fontSize="36px"
          fontWeight="600"
          lineHeight="41px"
          mb="10"
        >
          About Exalogic
        </Heading>
        <Text textAlign="center" fontSize="20px" fontWeight="400" mb="4">
        RealCube is a proprietary solution developed by Exalogic Consulting. With close to two decades of expertise in ERP consulting, IT product development and integration, we have grown to become a globally recognized IT consulting firm with presence in America, the Middle East, Europe, and Asia. Our close-knit team of business consultants, engineers and developers has uniquely empowered us to be at the forefront of the exciting new developments in digital technology that promises to revolutionize IT. Our pedigree includes conceptualizing, implementing, and managing the third wave turnkey solutions for some of the largest property management firms in the world.
        </Text>
      </Box>
      <Box py="10">
      <Image
        ml="auto"
        alt="img"
        src="/images/about-exalogic.png"
        width="100%"
        borderRadius={10}
        height={450}
        boxShadow="0 2px 18px rgb(0 0 0 / 50%)"
        objectFit={"cover"}
      />
      </Box>
    </>
  );
};
export default AboutExalogic;
