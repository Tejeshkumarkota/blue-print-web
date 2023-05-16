import { Box, Card, CardBody, Flex, Image, Text, Wrap } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

const RetailRentLocation = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <Card border="0" bg="white" h="100%" shadow="none">
        <CardBody>
          <Flex w="100%" alignItems="center" h="100%">
            <Wrap w="100%" spacing="0">
              <Box fontSize="xs" color="gray.900" w="25%">
                <Image
                  alt="img"
                  src="/images/icon-bed.png"
                  width={22}
                  mx="auto"
                  mb="12px"
                  height="auto"
                />
                <Box fontSize="16">
                  <Text fontSize="sm" color="gray.600" textAlign="center">
                    {" "}
                    {data?.bedrooms} {t("common:beds")}{" "}
                  </Text>
                </Box>
              </Box>
              <Box
                fontSize="xs"
                color="gray.900"
                w="25%"
                borderLeft="1px"
                borderColor="gray.200"
              >
                <Image
                  alt="img"
                  src="/images/icon-bath.png"
                  width={22}
                  mx="auto"
                  mb="12px"
                  height="auto"
                />
                <Box fontSize="16">
                  <Text fontSize="sm" color="gray.600" textAlign="center">
                    {" "}
                    {data?.bathrooms} {t("common:baths")}{" "}
                  </Text>
                </Box>
              </Box>
              <Box
                fontSize="xs"
                color="gray.900"
                w="25%"
                borderLeft="1px"
                borderColor="gray.200"
              >
                <Image
                  alt="img"
                  src="/images/icon-area.png"
                  width={22}
                  mx="auto"
                  mb="12px"
                  height="auto"
                />
                <Box fontSize="16">
                  <Text fontSize="sm" color="gray.600" textAlign="center">
                    14 sqft
                  </Text>
                </Box>
              </Box>
              <Box
                fontSize="xs"
                color="gray.900"
                w="25%"
                borderLeft="1px"
                borderColor="gray.200"
              >
                <Image
                  alt="img"
                  src="/images/icon-parking.png"
                  width={22}
                  mx="auto"
                  mb="12px"
                  height="auto"
                />
                <Box fontSize="16">
                  <Text fontSize="sm" color="gray.600" textAlign="center">
                    Yes
                  </Text>
                </Box>
              </Box>
            </Wrap>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default RetailRentLocation;
