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
import ResidenceTabs from "./ResidenceTabs";

const Residence = () => {
  return (
    <>
      <Box>
        <Container maxW={"6xl"} py={10} px={0}>
          <SimpleGrid columns={1} spacing={30}>
            <Flex align={"center"}>
              <Heading className="residence-title">
                Our Popular Residence
              </Heading>
              <Spacer />
              <Center className="residence-txt">
                <Link href={"/listing/propertylisitng"}>
                  Explore All <ArrowForwardIcon pl={2} />
                </Link>
              </Center>
            </Flex>
          </SimpleGrid>
          <ResidenceTabs />
        </Container>
      </Box>
    </>
  );
};

export default Residence;
