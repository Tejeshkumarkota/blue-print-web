import {
  Box,
  Card,
  Flex,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Spacer,
  Text,
  Wrap,
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const SimilarProp = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <SimpleGrid spacing="5" columns={{ sm: 2, md: 2, lg: 2 }}>
        <Box>
          <Card
            borderRadius="10px"
            boxShadow="rgba(0, 0, 0, 0.15) 0px 0.3rem 0.3rem !important"
          >
            <Box borderWidth="1px" borderRadius="10px" overflow="hidden">
              <Box position="relative">
                <Icon
                  position="absolute"
                  zIndex="99"
                  top="10px"
                  right="10px"
                  as={MdOutlineFavoriteBorder}
                  width="22px"
                  height={6}
                  color="white"
                  cursor="pointer"
                />
              </Box>
              <Box>
                <Link
                  key={data?.id}
                  href={`/propery-details/${data?.id}`}
                  passhref="true"
                >
                  <Image
                    className="propImg"
                    src={
                      data?.coverImage
                        ? data?.coverImage
                        : "/images/news-two.png"
                    }
                    alt={data?.coverImage ? data?.coverImage : data.imageAlt}
                    objectFit="cover"
                    height={300}
                    width={370}
                  />
                </Link>
              </Box>
              <Box p="4">
                <Box>
                  <Box
                    as="span"
                    color="gray.700"
                    fontSize="sm"
                    fontWeight="600"
                  >
                    AED{" "}
                  </Box>
                  <Box
                    as="span"
                    color="gray.900"
                    fontSize="sm"
                    fontWeight="600"
                  >
                    {data?.price}
                  </Box>
                  <Box
                    as="span"
                    color="gray.700"
                    fontSize="sm"
                    fontWeight="600"
                  >
                    / Year
                  </Box>
                </Box>
                <Box
                  mt="1"
                  mb="3"
                  fontWeight="500"
                  as="h4"
                  fontSize="sm"
                  noOfLines={1}
                >
                  {data?.propretyName}
                </Box>
                <Flex mb="3">
                  <Wrap>
                    {/*  <Badge
                                                                borderRadius="full"
                                                                px="2"
                                                                colorScheme="teal"
                                                            >
                                                                {t(
                                                                    "common:New"
                                                                )}
                                                            </Badge>*/}
                    <Box fontSize="xs" color="gray.900" className="prop-icon">
                      <Image
                        alt="img"
                        src="/images/icon-bed.png"
                        width={4}
                        height={4}
                      />{" "}
                      {data?.bedrooms} {t("common:beds")}{" "}
                    </Box>
                    <Spacer />
                    <Box fontSize="xs" color="gray.900" className="prop-icon">
                      <Image
                        alt="img"
                        src="/images/icon-bath.png"
                        width={4}
                        height={4}
                      />
                      {data?.bathrooms} {t("common:baths")}{" "}
                    </Box>
                    <Spacer />
                    <Box fontSize="xs" color="gray.900" className="prop-icon">
                      <Image
                        alt="img"
                        src="/images/icon-area.png"
                        width={4}
                        height={4}
                      />
                      1400 sqft
                    </Box>
                    <Spacer />
                    <Box fontSize="xs" color="gray.900" className="prop-icon">
                      <Image
                        alt="img"
                        src="/images/icon-parking.png"
                        width={4}
                        height={4}
                      />
                      Yes
                    </Box>
                  </Wrap>
                </Flex>
                <Flex>
                  <Box className="prop-icon">
                    <Image
                      alt="img"
                      src="/images/icon-location.png"
                      width="13"
                      height="18"
                      className="loc-icn"
                    />
                    <Text fontSize="xs" color="gray.900">
                      TyTexte 3 | Ground Floor, ira Oasis 3
                    </Text>
                  </Box>
                </Flex>
                {/* <Box
                                                            display="flex"
                                                            mt="2"
                                                            alignItems="center"
                                                            >
                                                                {Array(5)
                                                                    .fill("")
                                                                    .map((_, i) => (
                                                                        <StarIcon
                                                                            key={i}
                                                                            color={
                                                                                i <
                                                                                property.rating
                                                                                    ? "teal.500"
                                                                                    : "gray.300"
                                                                            }
                                                                        />
                                                                    ))}
                                                                <Box as="span"
                                                                    ml="2"
                                                                    color="gray.600"
                                                                    fontSize="sm">
                                                                    {property.reviewCount}{" "}
                                                                    {intl.formatMessage({
                                                                        id: "reviews",
                                                                    })}
                                                                </Box>
                                                            </Box> */}
              </Box>
            </Box>
          </Card>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default SimilarProp;
