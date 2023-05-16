import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const MyUpcomingVisits = () => {
  return (
    <>
      <SimpleGrid pb="15px" px={0} columns={1} spacing={3}>
        <Box>
          <Card
            className="my-upcoming-visit-card"
            border={"0"}
            boxShadow={"none"}
            borderRadius={"10px"}
          >
            <CardBody>
              <Grid mb="3" templateColumns="repeat(2, 1fr)" gap={3}>
                <GridItem colSpan={1}>
                  <Text
                    as="h3"
                    fontSize={"16px"}
                    color={"#000000"}
                    fontWeight={"500"}
                  >
                    My Upcoming Visits
                  </Text>
                </GridItem>
                <GridItem textAlign={"end"} colSpan={1}>
                  <Link href={"/"}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={"400"}
                      color={"#000000"}
                      as="span"
                    >
                      View All
                    </Text>
                  </Link>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                <GridItem colSpan={1}>
                    Test
                </GridItem>
                <GridItem colSpan={2}>
                    test2
                </GridItem>
              </Grid>
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default MyUpcomingVisits;
