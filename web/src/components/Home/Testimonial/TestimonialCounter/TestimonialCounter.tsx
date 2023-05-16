import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
// import { useCountUp } from "react-countup";

const TestimonialCounter = () => {
  // useCountUp({
  //   ref: "counter",
  //   end: 11000,
  //   delay: 100,
  //   enableScrollSpy: true,
  //   scrollSpyDelay: 200,
  // });

  // useCountUp({
  //   ref: "counter-one",
  //   end: 25000,
  //   delay: 100,
  //   enableScrollSpy: true,
  //   scrollSpyDelay: 200,
  // });

  // useCountUp({
  //   ref: "counter-two",
  //   end: 100000,
  //   delay: 100,
  //   enableScrollSpy: true,
  //   scrollSpyDelay: 200,
  // });

  return (
    <>
      <Box
        bg="#fff"
        backgroundImage="url('/images/sla-bg-img.png') "
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        alignItems="center"
        // borderRadius={10}
      >
        <Container maxW={"6xl"} px={{ sm: "5", md: "5", lg: "0" }} py={10}>
          <SimpleGrid
            columns={{ sm: "1", md: "3" }}
            spacing={7}
            alignItems="center"
            h="100%"
            w="100%"
            minH="250px"
          >
            <Box
              padding="30px"
              display="inline-flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <Image
                alt="img"
                src="/images/sla-resolved.png"
                mb="35px"
                width={82}
                height={93}
              />
              <Heading
                as="h2"
                fontSize="28px"
                color="white"
                mb="5"
                fontWeight="600"
              >
                <Text as="span" id="counter">
                  11,000
                </Text>
                <Text as="span" pl="2">
                  +
                </Text>
              </Heading>
              <Text fontSize="md" color="white">
                SLA's Resolved
              </Text>
            </Box>
            <Box
              padding="30px"
              display="inline-flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <Image
                alt="img"
                src="/images/reg-users.png"
                mb="35px"
                width={82}
                height={93}
              />
              <Heading
                as="h2"
                fontSize="28px"
                color="white"
                mb="5"
                fontWeight="600"
              >
                <Text as="span" id="counter-one">
                  25,000
                </Text>
                <Text as="span" pl="2">
                  +
                </Text>
              </Heading>

              <Text fontSize="md" color="white">
                Registered Users
              </Text>
            </Box>
            <Box
              padding="30px"
              display="inline-flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <Image
                alt="img"
                src="/images/prop-activated.png"
                mb="35px"
                width={82}
                height={93}
              />
              <Heading
                as="h2"
                fontSize="28px"
                color="white"
                mb="5"
                fontWeight="600"
              >
                <Text as="span" id="counter-two">
                  100,000
                </Text>
                <Text as="span" pl="2">
                  +
                </Text>
              </Heading>

              <Text fontSize="md" color="white">
                Properties Activated
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default TestimonialCounter;
