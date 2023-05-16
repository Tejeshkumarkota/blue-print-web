import { Box, Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";

const SaferRealcube = () => {
  return (
    <>
      <Card border="0" bg="white" shadow="none">
        <CardBody>
          <Flex alignItems="center" justifyContent="space-between" mb="4">
            <Box as="span" mr="15px" fontSize="16" w="75%">
              <Text mb="5px" fontSize="12px" color="gray.400">
                Safety Information
              </Text>
              <Text fontSize="20px" color="gray.800" fontWeight="600">
                Safer With Realcube
              </Text>
            </Box>
            <Image
              alt="img"
              src="/images/SaferIcon.png"
              textAlign="right"
              width="50px"
              className="loc-icn"
              height="50px"
            />
          </Flex>
          <Box>
            <Text mb="5px" fontSize="12px" color="gray.400">
              RealCube offers a secure and streamlined process for renting your
              new home. Our team helps simplify the booking, contract signing,
              and payment process, while also protecting you from scams and
              potential financial loss. With RealCube, you can rest assured that
              your rental experience will be safe and hassle-free.
            </Text>
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

export default SaferRealcube;
