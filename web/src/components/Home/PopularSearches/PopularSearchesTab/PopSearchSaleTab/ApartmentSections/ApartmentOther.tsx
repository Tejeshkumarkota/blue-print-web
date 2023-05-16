import { Box, Heading, Text } from "@chakra-ui/react";

const ApartmentOther = () => {
  return (
    <>
      <Box color="white">
        <Heading as="h6" fontSize="md" mb="6" textDecoration="underline">
          Apartments in other Emirates
        </Heading>
        <Text fontSize="sm" mb="6">
          Sharjah
        </Text>
        <Text fontSize="sm" mb="6">
          Ajman
        </Text>
        <Text fontSize="sm" mb="6">
          Ras Al Khaimah
        </Text>
        <Text fontSize="sm" mb="6">
          Al Sawan
        </Text>
        <Text fontSize="sm">Al Nahda (Sharjah)</Text>
      </Box>
    </>
  );
};

export default ApartmentOther;
