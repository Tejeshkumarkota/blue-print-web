import {
    Box,
    Center,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from "@chakra-ui/react";
import PopSearchRentTab from "./PopSearchRentTab/PopSearchRentTab";
import PopSearchSaleTab from "./PopSearchSaleTab/PopSearchSaleTab";

const PopularSearchesTabs = () => {
  return (
    <>
      <Box>
        <Tabs className="similar-tabs">
          <Center borderBottom="1px" borderBottomColor="gray.300" mb="10">
            <TabList color="white" border="0">
              <Tab>For Sale</Tab>
              <Tab>To Rent</Tab>
            </TabList>
          </Center>

          <TabPanels>
            <TabPanel px={0} pb={0}>
              <PopSearchRentTab />
            </TabPanel>
            <TabPanel px={0} pb={0}>
              <PopSearchSaleTab />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};
export default PopularSearchesTabs;
