import MyActivity from "@/components/Dashboard/MyActivity/MyActivity";
import MyContracts from "@/components/Dashboard/MyContracts/MyContracts";
import MyLikes from "@/components/Dashboard/MyLikes/MyLikes";
import MyOffers from "@/components/Dashboard/MyOffers/MyOffers";
import MyUpcomingVisits from "@/components/Dashboard/MyUpcomingVisits/MyUpcomingVisits";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <>
      <SimpleGrid pb="15px" px={0} spacing={10}>
        <Box>
          <Image
            boxSize="250px"
            src="/images/banner-dash.jpg"
            borderRadius="5px"
            alt="Property Banner"
            objectFit={"cover"}
            width={"100%"}
          />
        </Box>
      </SimpleGrid>
      <MyActivity />
      <SimpleGrid pb="15px" px={0} columns={2} spacing={3}>
        <MyUpcomingVisits />
        <MyOffers />
      </SimpleGrid>
      <SimpleGrid pb="0" px={0} columns={2} spacing={3}>
        <MyContracts />
        <MyLikes />
      </SimpleGrid>
    </>
  );
}
