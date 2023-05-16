import { Box, Button, Card, CardBody, Flex, Text } from "@chakra-ui/react";

const MakeAnOffer = ({ data }) => {
  return (
    <>
      <Card border="0" bg="white" h="100%" shadow="none">
        <CardBody>
          <Box>
            <Text fontWeight="500" fontSize="20px" mb="50px">
              AED{" "}
              <Box as="span" fontWeight="bold" fontSize="26px">
                {data?.price}
              </Box>{" "}
              / Year
            </Text>
          </Box>
          <Flex gap="5">
            <Box w="50%">
              <Button
                w="full"
                type="submit"
                py={2}
                fontSize={"14px"}
                variant="primary"
              >
                Make an Offer
              </Button>
            </Box>
            <Box w="50%">
              <Button
                w="full"
                type="submit"
                py={2}
                fontSize={"14px"}
                variant="outline"
              >
                Schedule a Visit
              </Button>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default MakeAnOffer;
