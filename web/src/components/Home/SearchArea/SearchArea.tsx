import {
  Box,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from "@chakra-ui/react";
import SearchForm from "./SearchForm/SearchForm";

const SearchArea = () => {
  return (
    <>
      <Box
        bg="#fff"
        backgroundImage="url('/images/banner-template2.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        minH="850px"
        pt={120}
        pb={70}
      >
        <Container maxW={"6xl"} py={0} px={0}>
          <SimpleGrid columns={1} spacing={30} pb={10}>
            <Box>
              <Heading className="page-title-home">
                Easiest way to Find your Dream Home.
              </Heading>
              <Text className="banner-desc">
                This is where you find a dream home for you a various types, all
                over the <br /> world at affordable price.
              </Text>
            </Box>
            <Box className="custom-tab-search">
              <Tabs size="md" variant="enclosed">
                <TabList>
                  <Tab>Buy</Tab>
                  <Tab>Rent</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <SearchForm />
                  </TabPanel>
                  <TabPanel>
                    <SearchForm />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </SimpleGrid>
          <SimpleGrid className="properties-service" columns={3} spacingX={30} px={5} pt={5}>
            <Center flexDirection={"column"} className="service-tops">
              <Heading className="" mb={5}>
                200 k
              </Heading>
              <Text className="">
                People believes in our services.
              </Text>
            </Center>
            <Center flexDirection={"column"} className="service-tops">
              <Heading className="" mb={5}>
                4.5 k
              </Heading>
              <Text className="">
                Properties & Houses are ready for occupancies.
              </Text>
            </Center>
            <Center flexDirection={"column"} className="service-tops">
              <Heading className="" mb={5}>
                80 k
              </Heading>
              <Text className="">
                Partners who have worked with us.
              </Text>
            </Center>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default SearchArea;
