import Amenities from "@/components/PropertyDetails/Amenities/Amenities";
import Breadcrumbs from "@/components/PropertyDetails/Breadcrumbs/Breadcrumbs";
import Description from "@/components/PropertyDetails/Description/Description";
import ImageGallery from "@/components/PropertyDetails/ImageGallery/ImageGallery";
import ImageSlider from "@/components/PropertyDetails/ImageSlider/ImageSlider";
import MakeAnOffer from "@/components/PropertyDetails/MakeAnOffer/MakeAnOffer";
import Map from "@/components/PropertyDetails/Map/Map";
import NeedToKnow from "@/components/PropertyDetails/NeedToKnow/NeedToKnow";
import RetailRentLocation from "@/components/PropertyDetails/RetailRent/RetailRentLocation";
import RetailRentService from "@/components/PropertyDetails/RetailRent/RetailRentService";
import SaferRealcube from "@/components/PropertyDetails/SaferRealcube/SaferRealcube";
import SimilarProp from "@/components/PropertyDetails/SimilarProp/SimilarProp";
import MetaTags from "@/constants/helpers/SeoMetaTags";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const PropertyDetails = ({ propertyDetails }: any) => {
  const { t } = useTranslation();
  const { data } = propertyDetails;

  const [isPropertyDetailModalOpen, IsetisPropertyDetailModalOpen] =
    useState(false);
  let handlePropertyDetailModalOpen = () =>
    IsetisPropertyDetailModalOpen(!isPropertyDetailModalOpen);

  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={data?.propertyDescription} />
        <MetaTags
          Meta
          title={data?.propretyName}
          description={data?.propertyDescription}
          image={data?.coverImage}
        ></MetaTags>
      </Head>
      <Box
        maxWidth="6xl"
        margin="auto"
        pt="90"
        px={{ sm: "5", md: "5", lg: "0" }}
        pb="10"
      >
        <Breadcrumbs data={data} />
        <Box gap={5} display={{ sm: "block", md: "flex" }}>
          <Box mb="5" width={{ sm: "100%", md: "50%", lg: "66.5%" }}>
            <ImageSlider />
          </Box>
          <Box mb="5" width={{ sm: "100%", md: "50%", lg: "33.5%" }}>
            <NeedToKnow data={data} />
          </Box>
        </Box>

        <Box gap={5} display={{ sm: "block", md: "flex" }}>
          <Box mb="5" width={{ sm: "100%", md: "50%", lg: "67%" }}>
            <ImageGallery />
          </Box>
          <Box mb="5" width={{ sm: "100%", md: "50%", lg: "34%" }}>
            <MakeAnOffer data={data} />
          </Box>
        </Box>

        <Box gap={5} display={{ sm: "block", md: "flex" }}>
          <Box mb="5" mt="2" width={{ sm: "100%", md: "50%", lg: "66.5%" }}>
            <Flex alignItems="center" mb="15px">
              <Text fontSize="lg" fontWeight="bold">
                {data?.propretyName}
              </Text>
              <Icon
                cursor="pointer"
                as={MdOutlineFavoriteBorder}
                ml="15px"
                width="22px"
                height={6}
                color="black"
              />
            </Flex>

            <Box gap={5} display={{ sm: "block", md: "flex" }} mb="25px">
              <Box mb="2" width={{ sm: "100%", md: "40%", lg: "45%" }}>
                <RetailRentLocation />
              </Box>
              <Box mb="2" width={{ sm: "100%", md: "60%", lg: "55%" }}>
                <RetailRentService data={data} />
              </Box>
            </Box>

            <Box mb="25px">
              <Description data={data} />
            </Box>
            <Box>
              <Amenities />
            </Box>

            <Box>
              <SimpleGrid mb="5">
                <Card border="0" bg="white" h="100%" shadow="none">
                  <CardBody>
                    <Text fontSize="lg" mb="4" fontWeight="bold">
                      Near By Locations
                    </Text>
                    <Map />
                  </CardBody>
                </Card>
              </SimpleGrid>
            </Box>
            <Box>
              <SimpleGrid mb="5">
                <Text fontSize="22px" mb="4" fontWeight="bold">
                  Our Similar Properties
                </Text>
                <SimilarProp data={data} />
              </SimpleGrid>
            </Box>
          </Box>
          <Box mb="5" width={{ sm: "100%", md: "50%", lg: "33.5%" }}>
            <SaferRealcube />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }: any) {
  const data: any = await axios.get(
    `https://webappapi.ict.ae/api/propertyDetails/${id}`
  );
  const stringRes = data?.data;
  return {
    props: {
      propertyDetails: stringRes,
    },
  };
}
