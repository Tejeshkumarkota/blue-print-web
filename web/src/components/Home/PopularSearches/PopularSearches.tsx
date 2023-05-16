import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
    Box,
    Center,
    Container,
    Flex,
    Heading,
    SimpleGrid,
    Spacer,
} from "@chakra-ui/react";
import Link from "next/link";
import PopularSearchesTabs from "./PopularSearchesTab/PopularSearchesTabs";

const PopularSearches = () => {
  return (
    <>
      <Box bg="blackAlpha.800">
        <Container maxW={"6xl"} py={20} px={0}>
          <SimpleGrid columns={1} spacing={30}>
            <Flex align={"center"}>
              <Heading as="h5" fontSize="18px" color="white" mb="7">
              Popular searches in the UAE
              </Heading>
              <Spacer />
              <Center className="residence-txt">
                <Link href={"/listing/propertylisitng"}>
                  Explore All <ArrowForwardIcon pl={2} />
                </Link>
              </Center>
            </Flex>
          </SimpleGrid>
          <PopularSearchesTabs />
        </Container>
      </Box>
    </>
  );
};

export default PopularSearches;
