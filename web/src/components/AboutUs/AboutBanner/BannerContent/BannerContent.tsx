import { Box, Heading, Text } from "@chakra-ui/react";

const BannerContent = () => {
  return (
    <>
      <Box>
        <Box width="100%" mb={10}>
          <Heading as="h1" fontSize="48px" mb="10" fontWeight={700} lineHeight={"72px"}>
            About Us
          </Heading>
          <Text fontSize="16px" mb="6">
            RealCube is the leading cloud-based intelligent solution provider
            for property management and facilities management industries.
          </Text>
          <Text fontSize="16px" mb="6">
            We believe in the power of technology to change the world for the
            better, and we are committed to creating products that empower
            people and businesses to achieve their goals.
          </Text>
          <Text fontSize="16px" mb="6">
            With a focus on innovation, excellence, and integrity, RealCube is
            dedicated to leading the way in the technology industry.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default BannerContent;
