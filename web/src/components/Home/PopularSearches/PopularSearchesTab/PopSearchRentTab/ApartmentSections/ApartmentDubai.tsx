import { Box, Heading, Text } from "@chakra-ui/react";

const ApartmentDubai = () => {
  return (
    <>
      <Box color="white">
        <Heading as="h6" fontSize="md" mb="6" textDecoration="underline">
          Dubai Apartments
        </Heading>
        <Text fontSize="sm" mb="6">
          Dubai Marina
        </Text>
        <Text fontSize="sm" mb="6">
          Jumeirah Village Circle
        </Text>
        <Text fontSize="sm" mb="6">
          Jumeirah Lake Towers
        </Text>
        <Text fontSize="sm" mb="6">
          Downtown Dubai
        </Text>
        <Text fontSize="sm">Business Bay</Text>
      </Box>
    </>
  );
};

export default ApartmentDubai;
