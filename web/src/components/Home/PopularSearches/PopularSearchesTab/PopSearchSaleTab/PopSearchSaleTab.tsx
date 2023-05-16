import { Box, SimpleGrid } from "@chakra-ui/react";
import ApartmentAbuDhabi from "./ApartmentSections/ApartmentAbuDhabi";
import ApartmentDubai from "./ApartmentSections/ApartmentDubai";
import ApartmentOther from "./ApartmentSections/ApartmentOther";

const PopSearchSaleTab = () => {
  return (
    <>
      <SimpleGrid columns={{ md: "3", lg: "3" }} spacing={7}>
        <Box>
          <ApartmentDubai />
        </Box>
        <Box>
          <ApartmentAbuDhabi />
        </Box>
        <Box>
          <ApartmentOther />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default PopSearchSaleTab;
