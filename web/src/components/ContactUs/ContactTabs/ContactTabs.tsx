import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdMail } from "react-icons/md";

const ContactTabs = () => {
  return (
    <>
      <Box>
        <Tabs className="similar-tabs contact">
          <Box pb={3} pt={2}>
            <TabList color={"gray.400"} borderBottom={"1px"}>
              <Tab fontSize={"16px"} pb="3" mr="1" pl="0">
                Abu Dhabi
              </Tab>
              <Tab fontSize={"16px"} pb="3" mr="1">
                London
              </Tab>
              <Tab fontSize={"16px"} pb="3" mr="1">
                Dubai
              </Tab>
              <Tab fontSize={"16px"} pb="3">
                Bengaluru
              </Tab>
            </TabList>
          </Box>

          <TabPanels>
            <TabPanel px={0}>
              <Card border={"1px"} borderColor={"white"} bg={"whiteAlpha.300"}>
                <CardBody>
                  <Heading
                    as="h6"
                    fontSize={"26px"}
                    fontWeight={"600"}
                    color="whiteAlpha.900"
                    mb="7"
                  >
                    Find us at
                  </Heading>
                  <Flex mb={4}>
                    <Box as="span" pt={1}>
                      <CiLocationOn
                        color="#ffd599"
                        width={1}
                        height={3}
                        fontSize={"20px"}
                      />
                    </Box>
                    <Text ml="3" fontSize={"16px"} color="whiteAlpha.900">
                      Level 35, PO Box 73801 ,Maqam Tower,Sowwah Square, Maryah
                      Island.
                    </Text>
                  </Flex>
                  <Heading
                    as="h6"
                    fontSize={"26px"}
                    fontWeight={"600"}
                    color="whiteAlpha.900"
                    mb="7"
                  >
                    Reach out to us at
                  </Heading>
                  <Flex
                    alignItems={"center"}
                    fontWeight={500}
                    mb={2}
                    p={1}
                    borderRadius="25px"
                    bg={"whiteAlpha.400"}
                    w="max-content"
                  >
                    <Box
                      as="span"
                      bg={"whiteAlpha.900"}
                      h="42px"
                      w="42px"
                      borderRadius={"50%"}
                      color={"blackAlpha.900"}
                      display={"inline-flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <BsFillTelephoneFill fontSize={"20px"} />
                    </Box>
                    <Text
                      pl="3"
                      pr="6"
                      fontSize={"16px"}
                      color="whiteAlpha.900"
                    >
                      +91 804 101 0727
                    </Text>
                  </Flex>
                  <Flex
                    alignItems={"center"}
                    fontWeight={500}
                    mb={2}
                    p={1}
                    borderRadius="25px"
                    bg={"whiteAlpha.300"}
                    w="max-content"
                  >
                    <Box
                      as="span"
                      bg={"whiteAlpha.900"}
                      h="42px"
                      w="42px"
                      borderRadius={"50%"}
                      color={"blackAlpha.900"}
                      display={"inline-flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <MdMail fontSize={"20px"} />
                    </Box>
                    <Text
                      pl="3"
                      pr="7"
                      fontSize={"16px"}
                      color="whiteAlpha.900"
                    >
                      realcube.exalogic.co
                    </Text>
                  </Flex>
                </CardBody>
              </Card>
            </TabPanel>
            <TabPanel px={0}>
              <Card border={"1px"} borderColor={"white"} bg={"whiteAlpha.300"}>
                <CardBody>
                  <Heading
                    as="h6"
                    fontSize={"26px"}
                    fontWeight={"600"}
                    color="whiteAlpha.900"
                    mb="7"
                  >
                    Find us at
                  </Heading>
                  <Flex mb={4}>
                    <Box as="span" pt={1}>
                      <CiLocationOn
                        color="#ffd599"
                        width={1}
                        height={3}
                        fontSize={"20px"}
                      />
                    </Box>
                    <Text ml="3" fontSize={"16px"} color="whiteAlpha.900">
                      Kemp House, 160 City Road,EC1V 2NX, London, UK
                    </Text>
                  </Flex>
                  <Heading
                    as="h6"
                    fontSize={"26px"}
                    fontWeight={"600"}
                    color="whiteAlpha.900"
                    mb="7"
                  >
                    Reach out to us at
                  </Heading>
                  <Flex
                    alignItems={"center"}
                    fontWeight={500}
                    mb={2}
                    p={1}
                    borderRadius="25px"
                    bg={"whiteAlpha.400"}
                    w="max-content"
                  >
                    <Box
                      as="span"
                      bg={"whiteAlpha.900"}
                      h="42px"
                      w="42px"
                      borderRadius={"50%"}
                      color={"blackAlpha.900"}
                      display={"inline-flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <BsFillTelephoneFill fontSize={"20px"} />
                    </Box>
                    <Text
                      pl="3"
                      pr="6"
                      fontSize={"16px"}
                      color="whiteAlpha.900"
                    >
                      +91 804 101 0727
                    </Text>
                  </Flex>
                  <Flex
                    alignItems={"center"}
                    fontWeight={500}
                    mb={2}
                    p={1}
                    borderRadius="25px"
                    bg={"whiteAlpha.300"}
                    w="max-content"
                  >
                    <Box
                      as="span"
                      bg={"whiteAlpha.900"}
                      h="42px"
                      w="42px"
                      borderRadius={"50%"}
                      color={"blackAlpha.900"}
                      display={"inline-flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <MdMail fontSize={"20px"} />
                    </Box>
                    <Text
                      pl="3"
                      pr="7"
                      fontSize={"16px"}
                      color="whiteAlpha.900"
                    >
                      realcube.exalogic.co
                    </Text>
                  </Flex>
                </CardBody>
              </Card>
            </TabPanel>
            <TabPanel px={0}>
              <Card border={"1px"} borderColor={"white"} bg={"whiteAlpha.300"}>
                <CardBody>
                  <Heading
                    as="h6"
                    fontSize={"26px"}
                    fontWeight={"600"}
                    color="whiteAlpha.900"
                    mb="7"
                  >
                    Find us at
                  </Heading>
                  <Flex mb={4}>
                    <Box as="span" pt={1}>
                      <CiLocationOn
                        color="#ffd599"
                        width={1}
                        height={3}
                        fontSize={"20px"}
                      />
                    </Box>
                    <Text ml="3" fontSize={"16px"} color="whiteAlpha.900">
                      Level 14,PO Box 634321 Fortune Executive Towers Jumeirah
                      Lakes Towers
                    </Text>
                  </Flex>
                  <Heading
                    as="h6"
                    fontSize={"26px"}
                    fontWeight={"600"}
                    color="whiteAlpha.900"
                    mb="7"
                  >
                    Reach out to us at
                  </Heading>
                  <Flex
                    alignItems={"center"}
                    fontWeight={500}
                    mb={2}
                    p={1}
                    borderRadius="25px"
                    bg={"whiteAlpha.400"}
                    w="max-content"
                  >
                    <Box
                      as="span"
                      bg={"whiteAlpha.900"}
                      h="42px"
                      w="42px"
                      borderRadius={"50%"}
                      color={"blackAlpha.900"}
                      display={"inline-flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <BsFillTelephoneFill fontSize={"20px"} />
                    </Box>
                    <Text
                      pl="3"
                      pr="6"
                      fontSize={"16px"}
                      color="whiteAlpha.900"
                    >
                      +91 804 101 0727
                    </Text>
                  </Flex>
                  <Flex
                    alignItems={"center"}
                    fontWeight={500}
                    mb={2}
                    p={1}
                    borderRadius="25px"
                    bg={"whiteAlpha.300"}
                    w="max-content"
                  >
                    <Box
                      as="span"
                      bg={"whiteAlpha.900"}
                      h="42px"
                      w="42px"
                      borderRadius={"50%"}
                      color={"blackAlpha.900"}
                      display={"inline-flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <MdMail fontSize={"20px"} />
                    </Box>
                    <Text
                      pl="3"
                      pr="7"
                      fontSize={"16px"}
                      color="whiteAlpha.900"
                    >
                      realcube.exalogic.co
                    </Text>
                  </Flex>
                </CardBody>
              </Card>
            </TabPanel>
            <TabPanel px={0}>
              <Card border={"1px"} borderColor={"white"} bg={"whiteAlpha.300"}>
                <CardBody>
                  <Heading
                    as="h6"
                    fontSize={"26px"}
                    fontWeight={"600"}
                    color="whiteAlpha.900"
                    mb="7"
                  >
                    Find us at
                  </Heading>
                  <Flex mb={4}>
                    <Box as="span" pt={1}>
                      <CiLocationOn
                        color="#ffd599"
                        width={1}
                        height={3}
                        fontSize={"20px"}
                      />
                    </Box>
                    <Text ml="3" fontSize={"16px"} color="whiteAlpha.900">
                      Level 7, Raheja Paramount.Residency road,Bengaluru,
                      Karnataka 560025
                    </Text>
                  </Flex>
                  <Heading
                    as="h6"
                    fontSize={"26px"}
                    fontWeight={"600"}
                    color="whiteAlpha.900"
                    mb="7"
                  >
                    Reach out to us at
                  </Heading>
                  <Flex
                    alignItems={"center"}
                    fontWeight={500}
                    mb={2}
                    p={1}
                    borderRadius="25px"
                    bg={"whiteAlpha.400"}
                    w="max-content"
                  >
                    <Box
                      as="span"
                      bg={"whiteAlpha.900"}
                      h="42px"
                      w="42px"
                      borderRadius={"50%"}
                      color={"blackAlpha.900"}
                      display={"inline-flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <BsFillTelephoneFill fontSize={"20px"} />
                    </Box>
                    <Text
                      pl="3"
                      pr="6"
                      fontSize={"16px"}
                      color="whiteAlpha.900"
                    >
                      +91 804 101 0727
                    </Text>
                  </Flex>
                  <Flex
                    alignItems={"center"}
                    fontWeight={500}
                    mb={2}
                    p={1}
                    borderRadius="25px"
                    bg={"whiteAlpha.300"}
                    w="max-content"
                  >
                    <Box
                      as="span"
                      bg={"whiteAlpha.900"}
                      h="42px"
                      w="42px"
                      borderRadius={"50%"}
                      color={"blackAlpha.900"}
                      display={"inline-flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <MdMail fontSize={"20px"} />
                    </Box>
                    <Text
                      pl="3"
                      pr="7"
                      fontSize={"16px"}
                      color="whiteAlpha.900"
                    >
                      realcube.exalogic.co
                    </Text>
                  </Flex>
                </CardBody>
              </Card>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};
export default ContactTabs;
