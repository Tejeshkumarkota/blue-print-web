import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import PropertyDetailModal from "../PropertyDetailModal";

const ImageSlider = () => {
  const [isPropertyDetailModalOpen, IsetisPropertyDetailModalOpen] =
    useState(false);
  let handlePropertyDetailModalOpen = () =>
    IsetisPropertyDetailModalOpen(!isPropertyDetailModalOpen);

  return (
    <>
      <Box
        onClick={handlePropertyDetailModalOpen}
        position="relative"
        className="propDet_imgscroll"
      >
        <Image
          cursor="pointer"
          objectFit="cover"
          alt="img"
          borderRadius={8}
          src="https://exalogic-store.s3.us-east-2.amazonaws.com/realcube-property/property/4.jpg"
          width="100%"
          height={{ sm: "250px", md: "350px", lg: "600px" }}
        />
        <Box
          as="span"
          bg="black"
          color="white"
          pos="absolute"
          right="0"
          top="0"
          borderRadius="0 8px 0 8px"
          fontSize="xs"
          px="3"
          py="2"
        >
          Residential
        </Box>
      </Box>
      <PropertyDetailModal
        isPropertyDetailModalOpen={isPropertyDetailModalOpen}
        isPropertyDetailModalOpenFun={handlePropertyDetailModalOpen}
      />
    </>
  );
};

export default ImageSlider;
