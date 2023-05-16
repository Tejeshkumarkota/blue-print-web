import {
  Box,
  Card,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TestimonialProp = () => {
  return (
    <>
      <Box>
        <Container maxW={"6xl"} px={{ sm: "5", md: "5", lg: "0" }} pt="5">
          <SimpleGrid
            columns={{ sm: "1", md: "2" }}
            spacing={6}
            pt="10"
            pb={{ md: "0", lg: "10" }}
            alignItems="center"
          >
            <Box>
              <Image
                ml="auto"
                alt="img"
                src="images/prop-right-1.png"
                width={571}
                height={426}
                maxW={410}
                maxH={{ md: "250", lg: "317" }}
                borderRadius={10}
              />
            </Box>
            <Box>
              <Heading as="h1" fontSize="40px" mb="5">
                We Provide Right Choice of Properties that you need
              </Heading>
              {/* <Text fontSize="40px" lineHeight="50px" mb="5" fontWeight="600"> */}
              {/* We Provide Right Choice of Properties that you need */}
              {/* </Text> */}
              <Text fontSize="sm" color="gray.700">
                Our record-breaking deals and global reach has combined forces
                on a strong marketing and technology platform to create the most
                influential luxury real estate firm in the region is supported
                by the world's largest global realty brand.
              </Text>
            </Box>
          </SimpleGrid>
          <Box gap={5} display={{ sm: "block", md: "flex" }}>
            <Box
              width={{ sm: "100%", md: "38%" }}
              position="relative"
              py={{ md: "20", lg: "0" }}
            >
              <Image
                ml="auto"
                alt="img"
                src="images/prop-right-3.png"
                width="100%"
                height={317}
                borderRadius={10}
                position={{ md: "initial", lg: "absolute" }}
                maxW="417"
                maxH={{ md: "250", lg: "317" }}
                top="-80px"
              />
            </Box>
            <Box width={{ sm: "100%", md: "62%" }}>
              <SimpleGrid
                columns={{ sm: "1", md: "3" }}
                spacing={7}
                pt="10"
                pb="10"
                alignItems="center"
              >
                <Box h="100%">
                  <Card
                    p="25px"
                    h="100%"
                    borderRadius="10px"
                    boxShadow="0px 4px 20px rgba(0,0,0,0.15) !important"
                  >
                    <Image
                      alt="img"
                      src="/images/budget-icon1.png"
                      width={50}
                      height={50}
                      mb="15px"
                    />
                    <Heading as="h6" fontSize="16px" mb="5" fontWeight="600">
                      Budget Friendly
                    </Heading>
                    <Text fontSize="sm" color="gray.700">
                      Rent like never before. Here’s how
                    </Text>
                  </Card>
                </Box>
                <Box h="100%">
                  <Card
                    p="25px"
                    h="100%"
                    borderRadius="10px"
                    boxShadow="0px 4px 20px rgba(0,0,0,0.15) !important"
                  >
                    <Image
                      alt="img"
                      src="/images/budget-icon2.png"
                      mb="15px"
                      width={50}
                      height={50}
                    />
                    <Heading as="h6" fontSize="16px" mb="5" fontWeight="600">
                      Prime Location
                    </Heading>
                    <Text fontSize="sm" color="gray.700">
                      Rent like never before. Here’s how
                    </Text>
                  </Card>
                </Box>
                <Box h="100%">
                  <Card
                    p="25px"
                    h="100%"
                    borderRadius="10px"
                    boxShadow="0px 4px 20px rgba(0,0,0,0.15) !important"
                  >
                    <Image
                      alt="img"
                      src="/images/budget-icon3.png"
                      mb="15px"
                      width={50}
                      height={50}
                    />
                    <Heading as="h6" fontSize="16px" mb="5" fontWeight="600">
                      Trusted
                    </Heading>
                    <Text fontSize="sm" color="gray.700">
                      Rent like never before. Here’s how
                    </Text>
                  </Card>
                </Box>
              </SimpleGrid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default TestimonialProp;
