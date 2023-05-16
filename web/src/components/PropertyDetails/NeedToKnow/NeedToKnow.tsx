import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Card, CardBody, Flex, Text } from "@chakra-ui/react";
import { MdAccessTime } from "react-icons/md";

const NeedToKnow = ({ data }) => {
  return (
    <>
      <Card border="0" bg="white" h="100%" shadow="none">
        <CardBody>
          <Box fontSize="16" color="gray.900" fontWeight="600" pb="5">
            <InfoOutlineIcon />{" "}
            <Box as="span" ml="3">
              {" "}
              Need to Know
            </Box>
          </Box>
          <Box
            fontSize="16"
            color="gray.900"
            fontWeight="600"
            pb="4"
            mb="4"
            borderBottom="2px solid"
            borderBottomColor="gray.300"
          >
            Property Type :{" "}
            <Box as="span" ml="3">
              {" "}
              Rent
            </Box>
          </Box>
          <Box
            fontSize="16"
            color="gray.900"
            fontWeight="600"
            pb="4"
            mb="4"
            borderBottom="2px solid"
            borderBottomColor="gray.300"
          >
            Pricing Options :{" "}
            <Box as="span" ml="3">
              AED {data?.price} / Year
            </Box>
          </Box>
          <Box
            pb="4"
            mb="4"
            borderBottom="2px solid"
            borderBottomColor="gray.300"
          >
            <Text pb="4" fontSize="16" color="gray.900" fontWeight="600">
              Description
            </Text>
            <Text noOfLines="9" fontSize="sm" color="gray.500">
              {data?.propertyDescription}
            </Text>
          </Box>
          <Flex alignItems="center" pb="4" color="gray.500">
            <MdAccessTime />{" "}
            <Box as="span" fontSize="16" w="50%" ml="2">
              {" "}
              Mon - Thu
            </Box>
            <Box as="span" fontSize="16" w="50%">
              8:00 AM - 4:00 PM
            </Box>
          </Flex>
          <Flex alignItems="center" pb="4" color="gray.500">
            <MdAccessTime />{" "}
            <Box as="span" fontSize="16" w="50%" ml="2">
              {" "}
              Fri
            </Box>
            <Box as="span" fontSize="16" w="50%">
              12:30 PM
            </Box>
          </Flex>
          <Flex alignItems="center" pb="4" color="gray.500">
            <MdAccessTime />{" "}
            <Box as="span" fontSize="16" w="50%" ml="2">
              {" "}
              Sat - Sun
            </Box>
            <Box as="span" fontSize="16" w="50%">
              Closed
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default NeedToKnow;
