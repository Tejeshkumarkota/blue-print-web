import {
  Box,
  Card,
  Flex,
  Grid,
  GridItem,
  Spacer,
  Text,
  Wrap
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const MapCarousel = () => {
  function SampleNextArrow(props: any) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
  }

  function SamplePrevArrow(props: any) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
  }

  var settings = {
    centerPadding: "10px",
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerPadding: "10px",
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerPadding: "40px",
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const items = [
    {
      id: 1,
      propImage:
        "https://res.cloudinary.com/ictapp/image/upload/v1682344313/ICT_Super_Admin/Property_unit/cover_image/ixcalnstl1bf8v5uxgjh.jpg",
      propertyTitle: "3 Bedroom Apartment For Rent in Luluat Al Raha",
      propertyPrice: "165,000",
      propertyLocation: "TyTexte 3 | Ground Floor, ira Oasis 3",
      propertyBed: "3",
      propertyBath: "2",
      propertySqmt: "163",
      propertyParking: "Yes",
    },
    {
      id: 2,
      propImage:
        "https://res.cloudinary.com/ictapp/image/upload/v1682344313/ICT_Super_Admin/Property_unit/cover_image/ixcalnstl1bf8v5uxgjh.jpg",
      propertyTitle: "3 Bedroom Apartment For Rent in Luluat Al Raha",
      propertyPrice: "115,000",
      propertyLocation: "TyTexte 3 | Ground Floor, ira Oasis 3",
      propertyBed: "4",
      propertyBath: "3",
      propertySqmt: "164",
      propertyParking: "Yes",
    },
    {
      id: 3,
      propImage:
        "https://res.cloudinary.com/ictapp/image/upload/v1682344313/ICT_Super_Admin/Property_unit/cover_image/ixcalnstl1bf8v5uxgjh.jpg",
      propertyTitle: "3 Bedroom Apartment For Rent in Luluat Al Raha",
      propertyPrice: "182,000",
      propertyLocation: "TyTexte 3 | Ground Floor, ira Oasis 3",
      propertyBed: "2",
      propertyBath: "1",
      propertySqmt: "219",
      propertyParking: "No",
    },
    {
      id: 3,
      propImage:
        "https://res.cloudinary.com/ictapp/image/upload/v1682344313/ICT_Super_Admin/Property_unit/cover_image/ixcalnstl1bf8v5uxgjh.jpg",
      propertyTitle: "3 Bedroom Apartment For Rent in Luluat Al Raha",
      propertyPrice: "198,000",
      propertyLocation: "TyTexte 3 | Ground Floor, ira Oasis 3",
      propertyBed: "3",
      propertyBath: "2",
      propertySqmt: "123",
      propertyParking: "Yes",
    },
  ];

  return (
    <>
      <Box className="map-carousel">
        <Box>
          <Slider {...settings}>
            {items.map((item) => (
              <div key={item.id}>
                <Card
                  borderRadius="10px"
                  px={3}
                  boxShadow="rgba(0, 0, 0, 0.15) 0px 0.3rem 0.3rem !important"
                >
                  <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                    <GridItem colSpan={1}>
                      <Box py={3}>
                        <Link href="">
                          <Image
                            className="propImg"
                            src={item.propImage}
                            alt="Property Image"
                            objectFit="cover"
                            height={95}
                            width={200}
                          />
                        </Link>
                      </Box>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Box py={3}>
                        <Box
                          mt="0"
                          mb="1"
                          fontWeight="500"
                          as="h4"
                          fontSize="sm"
                          noOfLines={1}
                        >
                          {item.propertyTitle}
                        </Box>
                        <Box mb="1">
                          <Box
                            as="span"
                            color="gray.700"
                            fontSize="9px"
                            fontWeight="600"
                          >
                            AED{" "}
                          </Box>
                          <Box
                            as="span"
                            color="gray.900"
                            fontSize="13px"
                            fontWeight="900"
                          >
                            {item.propertyPrice}
                          </Box>
                          <Box
                            as="span"
                            color="gray.700"
                            fontSize="9px"
                            fontWeight="600"
                          >
                            / Year
                          </Box>
                        </Box>
                        <Flex>
                          <Box className="prop-icon" mb="2">
                            <Image
                              alt="img"
                              src="/images/icon-location.png"
                              width="10"
                              className="loc-icn"
                              height="11"
                            />
                            <Text fontSize="11px" color="gray.400">
                              {item.propertyLocation}
                            </Text>
                          </Box>
                        </Flex>
                        <Flex mb="3">
                          <Wrap>
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
                              {item.propertyBed}
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
                                width={13}
                                height={5}
                              />
                              {item.propertyBath}
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
                                width={13}
                                height={5}
                              />
                              {item.propertySqmt} Sqmt
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
                                width={13}
                                height={5}
                              />
                              {item.propertyParking}
                            </Box>
                          </Wrap>
                        </Flex>
                      </Box>
                    </GridItem>
                  </Grid>
                </Card>
              </div>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default MapCarousel;
