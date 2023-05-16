import { Text } from "@chakra-ui/react";

const Description = ({ data }) => {
  return (
    <>
      <Text fontSize="lg" marginBottom="2" fontWeight="bold">
        Description
      </Text>
      <Text lineHeight="2" color="gray.600">
        {data?.propertyDescription}
      </Text>
    </>
  );
};

export default Description;
