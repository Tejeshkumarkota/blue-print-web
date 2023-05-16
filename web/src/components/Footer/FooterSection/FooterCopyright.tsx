import {
  Box,
  Center,
  Container,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function FooterCopyright() {
  return (
    <>
      <Box
        as="footer"
        bg={useColorModeValue("white", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container maxW={"6xl"} py={5} px={{ sm: "5", md: "5", lg: "0" }}>
          <SimpleGrid columns={1}>
            <Center>
              <Text fontSize={"sm"}>© 2023 RealCube. All rights reserved</Text>
            </Center>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
