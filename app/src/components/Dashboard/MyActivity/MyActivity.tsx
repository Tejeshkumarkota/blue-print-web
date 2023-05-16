import {
    Box,
    Card,
    CardBody,
    Grid,
    GridItem,
    Heading,
    Image,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";

const MyActivity = () => {
  return (
    <>
      <SimpleGrid pb="15px" columns={1} spacing={3}>
        <Box py={"6px"}>
          <Heading as="h1" fontSize={"18px"}>
            My Activity
          </Heading>
        </Box>
      </SimpleGrid>
      <SimpleGrid pb="15px" px={0} columns={4} spacing={3}>
        <Box>
          <Card
            className="my-activity-card"
            border={"0"}
            boxShadow={"none"}
            borderRadius={"10px"}
          >
            <CardBody px={"10px"} py={"15px"}>
              <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                <GridItem colSpan={1}>
                  <Image
                    boxSize="32px"
                    src="/images/visits-icon-dash.svg"
                    alt="Upcoming Visits"
                    mb="10px"
                  />
                  <Text>Upcoming Visits</Text>
                </GridItem>
                <GridItem
                  display={"flex"}
                  justifyContent={"end"}
                  alignItems={"center"}
                  colSpan={1}
                  textAlign={"end"}
                >
                  <Text as="h2"> 0 </Text>
                </GridItem>
              </Grid>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card
            className="my-activity-card"
            border={"0"}
            boxShadow={"none"}
            borderRadius={"10px"}
          >
            <CardBody px={"10px"} py={"15px"}>
              <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                <GridItem colSpan={1}>
                  <Image
                    boxSize="32px"
                    src="/images/likes-icon-dash.svg"
                    alt="My Likes"
                    mb="10px"
                  />
                  <Text>My Likes</Text>
                </GridItem>
                <GridItem
                  display={"flex"}
                  justifyContent={"end"}
                  alignItems={"center"}
                  colSpan={1}
                  textAlign={"end"}
                >
                  <Text as="h2"> 3 </Text>
                </GridItem>
              </Grid>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card
            className="my-activity-card"
            border={"0"}
            boxShadow={"none"}
            borderRadius={"10px"}
          >
            <CardBody px={"10px"} py={"15px"}>
              <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                <GridItem colSpan={1}>
                  <Image
                    boxSize="32px"
                    src="/images/offers-icon-dash.svg"
                    alt="My Offers"
                    mb="10px"
                  />
                  <Text>My Offers</Text>
                </GridItem>
                <GridItem
                  display={"flex"}
                  justifyContent={"end"}
                  alignItems={"center"}
                  colSpan={1}
                  textAlign={"end"}
                >
                  <Text as="h2"> 2 </Text>
                </GridItem>
              </Grid>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card
            className="my-activity-card"
            border={"0"}
            boxShadow={"none"}
            borderRadius={"10px"}
          >
            <CardBody px={"10px"} py={"15px"}>
              <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                <GridItem colSpan={1}>
                  <Image
                    boxSize="32px"
                    src="/images/contracts-icon-dash.svg"
                    alt="My Contracts"
                    mb="10px"
                  />
                  <Text>My Contracts</Text>
                </GridItem>
                <GridItem
                  display={"flex"}
                  justifyContent={"end"}
                  alignItems={"center"}
                  colSpan={1}
                  textAlign={"end"}
                >
                  <Text as="h2"> 1 </Text>
                </GridItem>
              </Grid>
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default MyActivity;
