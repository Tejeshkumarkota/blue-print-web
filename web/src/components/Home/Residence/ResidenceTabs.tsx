import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Center,
    Flex,
    Heading,
    Image,
    Spacer,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text
} from "@chakra-ui/react";


const ResidenceTabs = () => {
    return (
        <>
        <Box>
            <Tabs className="residence-tabs">
                <Center py={10}>
                    <TabList>
                        <Tab>For Sale</Tab>
                        <Tab>To Rent</Tab>
                    </TabList>
                </Center>

                <TabPanels>
                    <TabPanel px={0}>
                        <Card maxW='sm'>
                            <CardBody p={0}>
                                <Image
                                    src='/images/residence-one.png'
                                    alt='Green double couch with wooden legs'
                                    className="img-residence"
                                />
                                <Stack spacing='3' p={5}>
                                    <Heading size='md' fontWeight={400}>Fully furnished Spacious Appartment for Rent</Heading>
                                    <Flex>
                                        <Center>
                                        <Image src='/images/icon-location.png' className="loc-icn" mr={2} height={4}/>
                                         <Text>TyTexte 3 | Ground Floor, ira Oasis 3</Text>
                                        </Center>
                                        
                                    </Flex>
                                    <Flex>
                                        <Box className="res-icon">
                                            <Image src='/images/icon-bed.png' height={5} mr={2}/>
                                            3
                                        </Box>
                                        <Spacer/>
                                        <Box className="res-icon">
                                            <Image src='/images/icon-bath.png' height={5} mr={2}/>
                                            3
                                        </Box>
                                        <Spacer/>
                                        <Box className="res-icon">
                                            <Image src='/images/icon-area.png' height={5} mr={2}/>
                                            1400 sqft
                                        </Box>
                                        <Spacer/>
                                        <Box className="res-icon">
                                            <Image src='/images/icon-parking.png' height={5} mr={2}/>
                                            Yes
                                        </Box>
                                    </Flex>
                                </Stack>
                            </CardBody>
                            <CardFooter pt={0} alignItems={"center"}>
                                    <ButtonGroup spacing='2'>
                                        <Button variant='primary' px={5} py={3} colorScheme='blue'>
                                            Book now
                                        </Button>
                                    </ButtonGroup>
                                    <Spacer/>
                                    <Flex className="aed">
                                        <span> AED 10,000 </span>
                                        <Text> / Year </Text>
                                    </Flex>
                            </CardFooter>
                        </Card>
                        
                    </TabPanel>
                    <TabPanel px={0}>
                        <Card maxW='sm'>
                            <CardBody p={0}>
                                <Image
                                    src='/images/residence-one.png'
                                    alt='Green double couch with wooden legs'
                                    className="img-residence"
                                />
                                <Stack spacing='3' p={5}>
                                    <Heading size='md' fontWeight={400}>Fully furnished Spacious Appartment for Rent</Heading>
                                    <Flex>
                                        <Center>
                                        <Image src='/images/icon-location.png' className="loc-icn" mr={2} height={4}/>
                                         <Text>TyTexte 3 | Ground Floor, ira Oasis 3</Text>
                                        </Center>
                                        
                                    </Flex>
                                    <Flex>
                                        <Box className="res-icon">
                                            <Image src='/images/icon-bed.png' height={5} mr={2}/>
                                            3
                                        </Box>
                                        <Spacer/>
                                        <Box className="res-icon">
                                            <Image src='/images/icon-bath.png' height={5} mr={2}/>
                                            3
                                        </Box>
                                        <Spacer/>
                                        <Box className="res-icon">
                                            <Image src='/images/icon-area.png' height={5} mr={2}/>
                                            1400 sqft
                                        </Box>
                                        <Spacer/>
                                        <Box className="res-icon">
                                            <Image src='/images/icon-parking.png' height={5} mr={2}/>
                                            Yes
                                        </Box>
                                    </Flex>
                                </Stack>
                            </CardBody>
                            <CardFooter pt={0} alignItems={"center"}>
                                    <ButtonGroup spacing='2'>
                                        <Button variant='primary' px={5} py={3} colorScheme='blue'>
                                            Book now
                                        </Button>
                                    </ButtonGroup>
                                    <Spacer/>
                                    <Flex className="aed">
                                        <span> AED 10,000 </span>
                                        <Text> / Year </Text>
                                    </Flex>
                            </CardFooter>
                        </Card>
                        
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
        </>
    );
};
export default ResidenceTabs;
