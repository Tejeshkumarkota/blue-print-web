import Breadcrumbs from "@/components/ContactUs/Breadcrumb/Breadcrumbs";
import ContactForm from "@/components/ContactUs/ContactForm/ContactForm";
import ContactTabs from "@/components/ContactUs/ContactTabs/ContactTabs";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

type indexProps = {};

const ContactIndexPage: React.FC<indexProps> = () => {
  return (
    <>
      <Box
        color={useColorModeValue("gray.700", "gray.400")}
        bg="#fff"
        backgroundImage="url('/images/contact-bg.png')"
        backgroundSize="cover"
        minH="850px"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        alignItems="center"
      >
        <Container maxW={"6xl"} pt="110" px={{ sm: "5", md: "5", lg: "0" }}>
          <SimpleGrid templateColumns={{ lg: "2fr 3fr" }} spacing={8}>
            <Box>
              <Breadcrumbs />
              <Box>
                <Heading as="h1" fontSize={"48px"} color="whiteAlpha.900">
                  Get in touch
                </Heading>
                <Heading as="h2" fontSize={"48px"} color="whiteAlpha.900">
                  with us
                </Heading>
              </Box>
              <ContactTabs />
            </Box>
            <Box>
              <ContactForm/>
            </Box>
          </SimpleGrid>
          {/* <ContactBanner />
      <ContactTabs/>
      <ContactTabsContent/> */}
        </Container>
      </Box>
    </>
  );
};
export default ContactIndexPage;
