import { Box, Card, CardBody, Image, SimpleGrid, Text } from "@chakra-ui/react";

const Description = () => {
  const cardItem = [
    {
      icon: "/images/Amenities.png",
      title: "Gym and Swiming Pool",
    },
    {
      icon: "/images/Amenities.png",
      title: "Close Proximity to Retail and Resturants",
    },
    {
      icon: "/images/Amenities.png",
      title: "Concierge",
    },
    {
      icon: "/images/Amenities.png",
      title: "Central AC",
    },
    {
      icon: "/images/Amenities.png",
      title: "Private Parking",
    },
    {
      icon: "/images/Amenities.png",
      title: "Built in Wardrobes",
    },
    {
      icon: "/images/Amenities.png",
      title: "Pets Allowed",
    },
    {
      icon: "/images/Amenities.png",
      title: "Maids Room(only for 3 and 4 bedrooms)",
    },
  ];

  return (
    <>
      <SimpleGrid mb="5">
        <Card border="0" bg="white" h="100%" shadow="none">
          <CardBody>
            <Text fontSize="lg" mb="4" fontWeight="bold">
              Amenities
            </Text>
            <SimpleGrid spacing="5" columns={{ sm: 2, md: 3, lg: 4 }}>
              {cardItem.map((item, index) => (
                <Box key={index}>
                  <Card border="0" bg="gray.50" h="100%" shadow="none">
                    <CardBody p="4">
                      <Image
                        src={item.icon}
                        mb="15px"
                        mx="auto"
                        width="60px"
                        height="60px"
                      />
                      <Text
                        fontSize="xs"
                        color="gray.800"
                        fontWeight="600"
                        textAlign="center"
                      >
                        {item.title}
                      </Text>
                    </CardBody>
                  </Card>
                </Box>
              ))}
            </SimpleGrid>
          </CardBody>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default Description;
