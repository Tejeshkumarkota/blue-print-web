import { Box, Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";

const RetailRentLocation = () => {
  return (
    <>
      <Card border="0" bg="white" h="100%" shadow="none">
        <CardBody>
          <Flex alignItems="center">
            <Image
              alt="img"
              src="/images/icon-location.png"
              width={25}
              className="loc-icn"
              height={8}
            />
            <Box as="span" ml="15px" fontSize="16" w="75%">
              <Text mb="10px" fontSize="sm" color="gray.900" fontWeight="600">
                Type 3
              </Text>
              <Text fontSize="sm" color="gray.400">
                0204 | Marina Gate M3|
              </Text>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default RetailRentLocation;
