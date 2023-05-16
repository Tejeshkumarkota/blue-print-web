import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  useColorModeValue,
  ListItem,
  ListIcon,
  OrderedList,
} from "@chakra-ui/react";

const TermsContent = () => {
  return (
    <>
      <Box
        bg={useColorModeValue("whiteAlpha.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.400")}
      >
        <Container maxW={"6xl"} px={{ sm: "5", md: "5", lg: "0" }}>
          <Box>
            <Box width="100%" mb={10} pt={5}>
              <Heading
                as="h1"
                fontSize="36px"
                mb="10"
                fontWeight={700}
                display={"flex"}
                alignItems={"center"}
              >
                <Image
                  src="/images/terms-conditions-side.png"
                  height={78}
                  width={78}
                  borderRadius="50%"
                  mr="4"
                />
                Terms and Condition
              </Heading>
              <Box>
                {/* <Heading
                  as="h2"
                  fontSize="24px"
                  mb="6"
                  fontWeight={700}
                  color={"blackAlpha.900"}
                  textTransform={"uppercase"}
                >
                  What type of information do we collect?
                </Heading> */}
                <Text fontSize="20px" mb="6" color="gray.600">
                  Thank you for selecting the Services offered by Exalogic
                  Consulting Pvt. Ltd. and/or its subsidiaries and affiliates
                  (referred to as "Real Cube", "we", "our", or "us") provided to
                  you on this website and/or mobile apps, including content,
                  updates and new releases, (collectively, the "Services").
                  Review these Terms of Service ("Agreement") thoroughly. By
                  accepting electronically (for example, clicking "I Agree" or
                  "Login"), installing, accessing or using the Services, you
                  agree to these terms. If you do not agree to this Agreement,
                  then you may not use the Services.
                </Text>
              </Box>
              <Box>
                <Heading
                  as="h2"
                  fontSize="24px"
                  mb="6"
                  fontWeight={700}
                  color={"blackAlpha.900"}
                  textTransform={"uppercase"}
                >
                  THIS AGREEMENT DESCRIBES THE TERMS GOVERNING YOUR USE OF REAL
                  CUBE SERVICES. IT INCLUDES BY REFERENCE:
                </Heading>
                {/* <Text fontSize="20px" mb="6" color="gray.600">
                  Your information, whether public or private, will not be sold,
                  exchanged, transferred, or given to any other company for any
                  reason whatsoever, without your consent, other than for the
                  express purpose of delivering the service requested.
                </Text>
                <Text fontSize="20px" mb="6" color="gray.600">
                  Any of the information we collect from you may be used in one
                  of the following ways:
                </Text> */}
                <Box>
                  <OrderedList pl="20">
                    <ListItem fontSize="20px" mb="6" color="gray.600">
                      Real Cube Privacy Policy provided to you in the Services
                      available on the website or provided to you otherwise.
                    </ListItem>
                    <ListItem fontSize="20px" mb="6" color="gray.600">
                      Any terms provided separately to you for the Services,
                      including product or program terms, ordering, activation,
                      payment terms, etc.
                    </ListItem>
                  </OrderedList>
                </Box>
              </Box>
              <Box>
                <Heading
                  as="h2"
                  fontSize="24px"
                  mb="6"
                  fontWeight={700}
                  color={"blackAlpha.900"}
                  textTransform={"uppercase"}
                >
                  ADVICE
                </Heading>
                <Text fontSize="20px" mb="6" color="gray.600">
                  The contents of Real Cube Services do not constitute advice
                  and should not be relied upon in making or refraining from
                  making, any decision.
                </Text>
              </Box>
              <Box>
                <Heading
                  as="h2"
                  fontSize="24px"
                  mb="6"
                  fontWeight={700}
                  color={"blackAlpha.900"}
                  textTransform={"uppercase"}
                >
                  CHANGE OF USE
                </Heading>
                <Text fontSize="20px" mb="6" color="gray.600">
                  Real Cube reserves the right to:
                </Text>
                <Box>
                  <OrderedList pl="20">
                    <ListItem fontSize="20px" mb="6" color="gray.600">
                      Change or remove (temporarily or permanently) the Website
                      or any part of it without notice and you confirm that Real
                      Cube shall not be liable to you for any such change or
                      removal.
                    </ListItem>
                    <ListItem fontSize="20px" mb="6" color="gray.600">
                      Change these Terms and Conditions at any time, and your
                      continued use of the Services following any changes shall
                      be deemed to be your acceptance of such change. Links to
                      Third Party Websites Real Cube Services may include links
                      to third party websites that are controlled and maintained
                      by others. Any link to other websites is not an
                      endorsement of such websites and you acknowledge and agree
                      that we are not responsible for the content or
                      availability of any such sites. No resale of service You
                      agree not to reproduce, duplicate, copy, sell, resell or
                      exploit for any commercial purposes, any portion of the
                      service, use of the Service, or access to the Service.
                      Real Cube reserves the right at any time to modify or
                      discontinue, temporarily or permanently, the Service (or
                      any part thereof). This will take place with notice and
                      adequate time given to you, so that you may retain the
                      information assets created by you on Real Cube. Beyond the
                      time given, you agree that Real Cube shall not be liable
                      to you or to any third party.
                    </ListItem>
                  </OrderedList>
                </Box>
              </Box>
              <Box>
                <Heading
                  as="h2"
                  fontSize="24px"
                  mb="6"
                  fontWeight={700}
                  color={"blackAlpha.900"}
                  textTransform={"uppercase"}
                >
                  CONTENT
                </Heading>
                <Text fontSize="20px" mb="6" color="gray.600">
                  You are responsible for your content. You are responsible for
                  all materials ("Content") uploaded, posted or stored through
                  your use of the Services. You grant Real Cube a worldwide,
                  royalty-free, non-exclusive license to host and use any
                  Content provided through your use of the Services to offer you
                  the Services. Real Cube is not responsible for the Content or
                  data you submit through the Services. You agree not to use,
                  nor permit any third party to use, the Services to upload,
                  post, distribute, link to, publish, reproduce, engage in or
                  transmit any of the following, including but not limited to.
                </Text>
                <Box>
                  <OrderedList pl="20">
                    <ListItem fontSize="20px" mb="6" color="gray.600">
                      Illegal, fraudulent, defamatory, obscene, pornographic,
                      profane, threatening, abusive, hateful, harassing,
                      offensive, inappropriate or objectionable information or
                      communications of any kind, including without limitation
                      conduct that would encourage "flaming" others, or criminal
                      or civil liability under any law.
                    </ListItem>
                    <ListItem fontSize="20px" mb="6" color="gray.600">
                      Content that would impersonate someone else or falsely
                      represent your identity or qualifications, or that
                      constitutes a breach of any individual's privacy.
                    </ListItem>
                    <ListItem fontSize="20px" mb="6" color="gray.600">
                      Except as permitted by Real Cube in writing, investment
                      opportunities, solicitations, chain letters, pyramid
                      schemes, other unsolicited commercial communication or
                      engage in spamming or flooding.
                    </ListItem>
                    <ListItem fontSize="20px" mb="6" color="gray.600">
                      Virus, trojan horse, worm or other disruptive or harmful
                      software or data.
                    </ListItem>
                    <ListItem fontSize="20px" mb="6" color="gray.600">
                      Any information, software or Content which yours is not
                      legally and without permission from the copyright owner or
                      intellectual property rights owner.
                    </ListItem>
                  </OrderedList>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default TermsContent;
