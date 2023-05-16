import { Box, SimpleGrid, Image } from "@chakra-ui/react";

const AboutImgComp = () => {
  const data = [
    {
      icon: "/images/Amenities.png",
    },
    {
      icon: "/images/Amenities.png",
    },
    {
      icon: "/images/Amenities.png",
    },
    {
      icon: "/images/Amenities.png",
    },
  ];

  return (
    <>
      <SimpleGrid spacing="6" alignItems={"baseline"} columns={{ sm: 1, md: 2, lg: 4 }}>
      <Box>
        <Image
        ml="auto"
        alt="img"
        src="/images/mission-1.png"
        width="100%"
        borderRadius={10}
        height={270}
        boxShadow="0 2px 18px rgb(0 0 0 / 50%)"
        objectFit="cover"
      />
        </Box><Box>

        <Image
        ml="auto"
        alt="img"
        src="/images/mission-2.png"
        width="100%"
        borderRadius={10}
        height={200}
        boxShadow="0 2px 18px rgb(0 0 0 / 50%)"
        objectFit="cover"
      />
        </Box><Box>

        <Image
        ml="auto"
        alt="img"
        src="/images/mission-3.png"
        width="100%"
        borderRadius={10}
        height={200}
        boxShadow="0 2px 18px rgb(0 0 0 / 50%)"
        objectFit="cover"
      />
        </Box>
        <Box>
        <Image
        ml="auto"
        alt="img"
        src="/images/mission-4.png"
        width="100%"
        borderRadius={10}
        height={270}
        boxShadow="0 2px 18px rgb(0 0 0 / 50%)"
        objectFit="cover"
      />
        </Box>
      </SimpleGrid>
    </>
  );
};
export default AboutImgComp;
