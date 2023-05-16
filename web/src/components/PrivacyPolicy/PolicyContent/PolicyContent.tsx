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

const PolicyContent = () => {
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
                  src="/images/privacy-side.png"
                  height={78}
                  width={78}
                  borderRadius="50%"
                  mr="4"
                />
                Privacy Policy
              </Heading>
              <Box>
                <Heading
                  as="h2"
                  fontSize="24px"
                  mb="6"
                  fontWeight={700}
                  color={"blackAlpha.900"}
                  textTransform={"uppercase"}
                >
                  What type of information do we collect?
                </Heading>
                <Text fontSize="20px" mb="6" color="gray.600">
                  We collect information from you when you register on our site
                  by filling out any form. When registering on our site through
                  any form, as appropriate, you may be asked to enter your:
                  name, e- mail address, residential address, mailing address or
                  phone number.
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
                  WHAT INFORMATION DO WE USE?
                </Heading>
                <Text fontSize="20px" mb="6" color="gray.600">
                  Your information, whether public or private, will not be sold,
                  exchanged, transferred, or given to any other company for any
                  reason whatsoever, without your consent, other than for the
                  express purpose of delivering the service requested.
                </Text>
                <Text fontSize="20px" mb="6" color="gray.600">
                  Any of the information we collect from you may be used in one
                  of the following ways:
                </Text>
                <Box>
                  <OrderedList pl="20">
                    <ListItem fontSize="20px" mb="6" color="gray.600">
                      To personalize your experience - your information helps us
                      to better respond to your individual needs.
                    </ListItem>
                    <ListItem fontSize="20px" mb="6" color="gray.600">
                      To improve our website - we continually strive to improve
                      our website offerings based on the information and
                      feedback we receive from you.
                    </ListItem>
                    <ListItem fontSize="20px" mb="6" color="gray.600">
                      To improve customer service - your information helps us to
                      more effectively respond to your customer service requests
                      and support needs.
                    </ListItem>
                    <ListItem fontSize="20px" mb="6" color="gray.600">
                      To send periodic emails - the email address you provide
                      shall be used to provide periodic updates to you that are
                      related to Real Cube and its affiliates, partners and
                      nothing else. If at any time you would like to stop
                      receiving future emails, you can email
                      info@realcube.estate requesting the un-subscription and
                      your email address shall be removed from the distribution
                      list.
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
                  DO WE USE COOKIES?
                </Heading>
                <Text fontSize="20px" mb="6" color="gray.600">
                  Yes. Cookies are small files that a site or its service
                  provider transfers to your computer’s hard drive through your
                  Web browser (if you allow) that enables the sites or service
                  providers' systems to recognize your browser and capture and
                  remember certain information. We use cookies to understand and
                  save your preferences for future visits and compile aggregate
                  data about site traffic and site interaction so that we can
                  offer better site experiences and tools in the future. We may
                  contract with third-party service providers to assist us in
                  better understanding our site visitors. These service
                  providers are not permitted to use the information collected
                  on our behalf except to help us conduct and improve our
                  business. Do we disclose any information to outside parties?
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
                  DO WE DISCLOSE ANY INFORMATION TO OUTSIDE PARTIES?
                </Heading>
                <Text fontSize="20px" mb="6" color="gray.600">
                  We do not sell, trade, or otherwise transfer to outside
                  parties your personally identifiable information (Personal
                  Information). This does not include trusted third parties who
                  assist us in operating our website, conducting our business,
                  or servicing you, so long as those parties agree to keep this
                  information confidential. We may also release your information
                  when we believe it is appropriate to comply with the law,
                  enforce our site policies, or protect ours or other rights,
                  property, or safety. However, non- personally identifiable
                  visitor information may be provided to other parties for
                  marketing, advertising, or other uses.
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
                  PRIVACY OF CHILDREN
                </Heading>
                <Text fontSize="20px" mb="6" color="gray.600">
                  We do not knowingly collect any Personal Information from
                  children under the age of 13. If you are under the age of 13,
                  please do not submit any Personal Information through our
                  Website or Service. We encourage parents and legal guardians
                  to monitor their children's Internet usage and to help enforce
                  this Policy by instructing their children never to provide
                  Personal Information through our Website or Service without
                  their permission. If you have reason to believe that a child
                  under the age of 13 has provided Personal Information to us
                  through our website or Service, please contact us. You must
                  also be at least 16 years of age to consent to the processing
                  of your personal data in your country (in some countries we
                  may allow your parent or guardian to do so on your behalf).
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
                  LEGAL DISCLOSURE
                </Heading>
                <Text fontSize="20px" mb="6" color="gray.600">
                  We will disclose any information we collect, use or receive if
                  required or permitted by law, such as to comply with a
                  subpoena, or similar legal process, and when we believe in
                  good faith that disclosure is necessary to protect our rights,
                  protect your safety or the safety of others, investigate
                  fraud, or respond to a government request. In the event we go
                  through a business transition, such as a merger or acquisition
                  by another company, or sale of all or a portion of its assets,
                  your user account, and personal data will likely be among the
                  assets transferred.
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
                  CHANGES AND AMENDMENTS
                </Heading>
                <Text fontSize="20px" mb="6" color="gray.600">
                  We reserve the right to modify this Policy relating to the
                  Website or Services at any time, effective upon posting of an
                  updated version of this Policy on the Website. When we do, we
                  will revise the updated date at the bottom of this page.
                  Continued use of the Website after any such changes shall
                  constitute your consent to such changes.
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
                  ACCEPTANCE OF THIS POLICY
                </Heading>
                <Text fontSize="20px" mb="6" color="gray.600">
                  You acknowledge that you have read this Policy and agree to
                  all its terms and conditions. By using the Website or its
                  Services you agree to be bound by this Policy. If you do not
                  agree to abide by the terms of this Policy, you are not
                  authorized to use or access the Website and its Services.
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
                  CONTACTING US
                </Heading>
                <Text fontSize="20px" mb="6" color="gray.600">
                  If you have any questions about this Policy, please contact
                  us. This document was last updated on November 09, 2022.
                </Text>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default PolicyContent;
