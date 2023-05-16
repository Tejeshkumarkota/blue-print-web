import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import PropertyDetailModal from "../PropertyDetailModal";

const ImageGallery = () => {
  const [isPropertyDetailModalOpen, IsetisPropertyDetailModalOpen] =
    useState(false);
  let handlePropertyDetailModalOpen = () =>
    IsetisPropertyDetailModalOpen(!isPropertyDetailModalOpen);

  return (
    <>
      <SimpleGrid spacing="5" columns={{ sm: 1, md: 2, lg: 3 }}>
        <Box onClick={handlePropertyDetailModalOpen}>
          <Image
            cursor="pointer"
            src="https://exalogic-store.s3.us-east-2.amazonaws.com/realcube-property/property/1.jpg"
            width="100%"
            height="80px"
            borderRadius="8"
          />
        </Box>
        <Box onClick={handlePropertyDetailModalOpen}>
          <Image
            cursor="pointer"
            src="https://exalogic-store.s3.us-east-2.amazonaws.com/realcube-property/property/2.jpg"
            width="100%"
            height="80px"
            borderRadius="8"
          />
        </Box>
        <Box onClick={handlePropertyDetailModalOpen}>
          <Image
            cursor="pointer"
            src="https://exalogic-store.s3.us-east-2.amazonaws.com/realcube-property/property/3.jpg"
            width="100%"
            height="80px"
            borderRadius="8"
          />
        </Box>
        <Box onClick={handlePropertyDetailModalOpen}>
          <Image
            cursor="pointer"
            src="https://exalogic-store.s3.us-east-2.amazonaws.com/realcube-property/property/4.jpg"
            width="100%"
            height="80px"
            borderRadius="8"
          />
        </Box>
        <Box onClick={handlePropertyDetailModalOpen}>
          <Image
            cursor="pointer"
            src="https://exalogic-store.s3.us-east-2.amazonaws.com/realcube-property/property/5.jpg"
            width="100%"
            height="80px"
            borderRadius="8"
          />
        </Box>
        <Box onClick={handlePropertyDetailModalOpen}>
          <Image
            cursor="pointer"
            src="https://exalogic-store.s3.us-east-2.amazonaws.com/realcube-property/property/property-img-3.png"
            width="100%"
            height="80px"
            borderRadius="8"
          />
        </Box>
      </SimpleGrid>
      <PropertyDetailModal
        isPropertyDetailModalOpen={isPropertyDetailModalOpen}
        isPropertyDetailModalOpenFun={handlePropertyDetailModalOpen}
      />
    </>
  );
};

export default ImageGallery;
