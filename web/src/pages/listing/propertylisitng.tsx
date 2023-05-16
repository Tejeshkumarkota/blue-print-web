import CommonBreadcrumb from "@/components/CommonBreadcrumb/CommonBreadcrumb";
import PropertyFloorPlanView from "@/components/PropertyFloorPlanView/PropertyFloorPlanView";
import SortByModal from "@/components/PropertyListing/SortByModal";
import PropertyMapView from "@/components/PropertyMapView/PropertyMapView";
import {
  HamburgerIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  Wrap,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";

export async function getStaticProps() {
  // const properties = await getPropertyFilterListAll().then((resp) => {
  //     console.log(
  //         "%cMyProject%cline:28%cresp",
  //         "color:#fff;background:#ee6f57;padding:3px;border-radius:2px",
  //         "color:#fff;background:#1f3c88;padding:3px;border-radius:2px",
  //         "color:#fff;background:rgb(237, 222, 139);padding:3px;border-radius:2px",
  //         resp
  //     );
  //     return resp?.data;
  //     // if (resp?.data?.errorCode != 1 && resp.status === 200) {
  //     //     return resp?.data;
  //     // }
  // });
  // console.log(
  //     "%cMyProject%cline:28%cproperties",
  //     "color:#fff;background:#ee6f57;padding:3px;border-radius:2px",
  //     "color:#fff;background:#1f3c88;padding:3px;border-radius:2px",
  //     "color:#fff;background:rgb(248, 214, 110);padding:3px;border-radius:2px",
  //     properties
  // );

  // return {
  //     props: {
  //         properties: properties,
  //     },
  // };
  const res = await axios.post("https://webappapi.ict.ae/api/propertyFilter");

  // const stringRes = await JSON.stringify(res);
  const stringRes = res?.data;
  return {
    props: {
      properties: stringRes,
    },
  };
}

const Propertylisitng = (props: any) => {
  const { t } = useTranslation();
  const [isSortByOpen, IsetisSortByOpen] = useState(false);
  let handleSortByOpen = () => IsetisSortByOpen(!isSortByOpen);
  const [activeView, setActiveView] = useState("list"); // List = list, Map = map, Floor plan = floorplan
  let openView = (val: any) => {
    setActiveView(val);
  };

  return (
    <>
      {/* <Box
                bg={useColorModeValue('white', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.400')}>
                <Container as={Stack} maxW={'6xl'} py={10}>
                    <SimpleGrid
                        templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
                        spacing={8}>
                        {intl.formatMessage({ id: 'TRANSLATOR.SELECT' })}
                    </SimpleGrid>
                </Container>
            </Box> */}
      <Box
        bg={useColorModeValue("whiteAlpha.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.400")}
      >
        <SimpleGrid spacing="24px">
          <Container
            as={Stack}
            maxW={"6xl"}
            pt={"80px"}
            pb="10"
            px={{ sm: "5", md: "5", lg: "0" }}
          >
            <CommonBreadcrumb />

            <Box
              gap={5}
              display={{ sm: "flex", md: "flex", lg: "flex" }}
              justifyContent="end"
            >
              {activeView !== "floorplan" && (
                <Box>
                  <Button
                    className="prop_lstbtn"
                    mb="3"
                    px="6"
                    py="3"
                    minW="full"
                    w={{ sm: "full", md: "fit-content" }}
                    height="46px"
                    variant="outline"
                    onClick={() => openView("floorplan")}
                  >
                    <Box as="span" fontWeight="600" fontSize="sm">
                      Floor Plan View
                    </Box>
                  </Button>
                </Box>
              )}
              {activeView !== "list" && (
                <Box>
                  <Button
                    className="prop_lstbtn"
                    mb="3"
                    px="6"
                    py="3"
                    minW="full"
                    w={{ sm: "full", md: "fit-content" }}
                    height="46px"
                    variant="outline"
                    onClick={() => openView("list")}
                  >
                    <Box as="span">
                      <HamburgerIcon />
                    </Box>
                    <Box as="span" ml="3" fontWeight="600" fontSize="sm">
                      List View
                    </Box>
                  </Button>
                </Box>
              )}
              {activeView !== "map" && (
                <Box>
                  <Button
                    className="prop_lstbtn"
                    mb="3"
                    px="6"
                    py="3"
                    minW="full"
                    w={{ sm: "full", md: "fit-content" }}
                    height="46px"
                    variant="outline"
                    onClick={() => openView("map")}
                  >
                    <Box as="span">
                      <Image
                        alt="img"
                        src="/images/map-filter-icon.svg"
                        width={20}
                        height={5}
                      />
                    </Box>
                    <Box as="span" ml="3" fontWeight="600" fontSize="sm">
                      Map View
                    </Box>
                  </Button>
                </Box>
              )}
              <Box>
                <Button
                  onClick={handleSortByOpen}
                  className="prop_lstbtn"
                  mb="3"
                  px="6"
                  py="3"
                  minW="full"
                  w={{ sm: "full", md: "fit-content" }}
                  height="46px"
                  variant="outline"
                >
                  <Box as="span" mr="3" fontWeight="600" fontSize="sm">
                    Sort By
                  </Box>
                  <Box
                    as="span"
                    display="inline-flex"
                    flexDirection="column"
                    fontSize="10"
                  >
                    <TriangleUpIcon />
                    <TriangleDownIcon />
                  </Box>
                </Button>
              </Box>
            </Box>
            {activeView === "floorplan" ? (
              <>
                <PropertyFloorPlanView openView={openView} />
              </>
            ) : activeView === "map" ? (
              <>
                <PropertyMapView openView={openView} />
              </>
            ) : (
              <>
                <Box gap={5} display={{ sm: "block", md: "flex" }}>
                  <SimpleGrid spacing="5" columns={{ sm: 2, md: 2, lg: 3 }}>
                    {props?.properties?.data?.map(
                      (property: any, index: any) => {
                        return (
                          <Box key={index}>
                            <Card
                              borderRadius="10px"
                              boxShadow="rgba(0, 0, 0, 0.15) 0px 0.3rem 0.3rem !important"
                            >
                              <Box
                                borderWidth="1px"
                                borderRadius="10px"
                                overflow="hidden"
                              >
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
                                    key={property?.id}
                                    href={`/propery-details/${property?.id}`}
                                    passhref="true"
                                  >
                                    <Image
                                      className="propImg"
                                      src={
                                        property?.coverImage
                                          ? property?.coverImage
                                          : "/images/news-two.png"
                                      }
                                      alt={
                                        property?.coverImage
                                          ? property?.coverImage
                                          : property.imageAlt
                                      }
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
                                      {property?.price}
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
                                    {property?.propretyName}
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
                                      <Box
                                        fontSize="xs"
                                        color="gray.900"
                                        className="prop-icon"
                                      >
                                        <Image
                                          alt="img"
                                          src="/images/icon-bed.png"
                                          width={15}
                                          height={5}
                                        />{" "}
                                        {property?.bedrooms} {t("common:beds")}{" "}
                                      </Box>
                                      <Spacer />
                                      <Box
                                        fontSize="xs"
                                        color="gray.900"
                                        className="prop-icon"
                                      >
                                        <Image
                                          alt="img"
                                          src="/images/icon-bath.png"
                                          width={15}
                                          height={5}
                                        />
                                        {property?.bathrooms}{" "}
                                        {t("common:baths")}{" "}
                                      </Box>
                                      <Spacer />
                                      <Box
                                        fontSize="xs"
                                        color="gray.900"
                                        className="prop-icon"
                                      >
                                        <Image
                                          alt="img"
                                          src="/images/icon-area.png"
                                          width={15}
                                          height={5}
                                        />
                                        1400 sqft
                                      </Box>
                                      <Spacer />
                                      <Box
                                        fontSize="xs"
                                        color="gray.900"
                                        className="prop-icon"
                                      >
                                        <Image
                                          alt="img"
                                          src="/images/icon-parking.png"
                                          width={15}
                                          height={5}
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
                                        className="loc-icn"
                                        height="18"
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
                        );
                      }
                    )}
                  </SimpleGrid>
                </Box>
              </>
            )}
          </Container>
        </SimpleGrid>
      </Box>
      <SortByModal
        isSortByOpen={isSortByOpen}
        isSortByOpenFun={handleSortByOpen}
      />
    </>
  );
};

export default Propertylisitng;
