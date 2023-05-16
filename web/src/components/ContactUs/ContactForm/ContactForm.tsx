import {
  Image,
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
  Box,
  FormControl,
  Input,
  GridItem,
  FormLabel,
  Select,
  Grid,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Field, Form, Formik } from "formik";

const ContactForm = () => {
  
  const [phone, setPhone] = useState();
  const [customerType, setCustomerType] = useState();
  const onChangeCustomerType = (type: any) => {
    console.log(type)
      setCustomerType(type);
  };

  return (
    <>
      <Card
        border={"1px"}
        borderColor={"white"}
        bg={"#ededed"}
        mb={{ sm: "10", md: "15", lg: "20" }}
      >
        <CardBody>
          <Heading
            as="h6"
            fontSize={"20px"}
            fontWeight={"700"}
            color="blackAlpha.900"
            mb="7"
          >
            Contact Us
          </Heading>
          {/* <Form> */}
          <Grid gap={6} templateColumns={{ sm: "1", md: "2" }} mb="5">
            <GridItem>
              <FormControl isRequired>
                <FormLabel>Customer Type</FormLabel>
                <Select
                defaultValue={customerType} onChange={(e) => onChangeCustomerType(e.target.value)}
                  _focus={{ outline: "none", border: "0", boxShadow: "none" }}
                  h="50px"
                  name="type"
                  bg="whiteAlpha.900"
                  border="none"
                  color="gray.600"
                >                               
                <option value="0" disabled selected>Select</option>     
                <option value="1">Individual</option>
                  <option value="2">Organization</option>
                </Select>
              </FormControl>
            </GridItem>

            {customerType === '2' ?
                                        <GridItem className="org">
                                        <FormControl isRequired>
                                          <FormLabel>Organization Name</FormLabel>
                                          <Input
                                            _focus={{ outline: "none", border: "0", boxShadow: "none" }}
                                            type="text"
                                            placeholder=""
                                            h="50px"
                                            bg="whiteAlpha.900"
                                            border="none"
                                            color="gray.600"
                                          />
                                        </FormControl>
                                      </GridItem>
                                        :
                                        <>
                                            <GridItem>
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Select
                  _focus={{ outline: "none", border: "0", boxShadow: "none" }}
                  placeholder="Select"
                  h="50px"
                  bg="whiteAlpha.900"
                  border="none"
                  color="gray.600"
                >
                  <option>Mr.</option>
                  <option>Mrs.</option>
                  <option>Ms.</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  _focus={{ outline: "none", border: "0", boxShadow: "none" }}
                  type="text"
                  placeholder=""
                  h="50px"
                  bg="whiteAlpha.900"
                  border="none"
                  color="gray.600"
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>Middle Name</FormLabel>
                <Input
                  _focus={{ outline: "none", border: "0", boxShadow: "none" }}
                  type="text"
                  placeholder=""
                  h="50px"
                  bg="whiteAlpha.900"
                  border="none"
                  color="gray.600"
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input
                  _focus={{ outline: "none", border: "0", boxShadow: "none" }}
                  type="text"
                  placeholder=""
                  h="50px"
                  bg="whiteAlpha.900"
                  border="none"
                  color="gray.600"
                />
              </FormControl>
            </GridItem>
                                        </>
                                    }


            
            
            <GridItem>
              <FormControl isRequired>
                <FormLabel>Email ID</FormLabel>
                <Input
                  _focus={{ outline: "none", border: "0", boxShadow: "none" }}
                  type="email"
                  placeholder=""
                  h="50px"
                  bg="whiteAlpha.900"
                  border="none"
                  color="gray.600"
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired className="mob_no">
                <FormLabel>Mobile No.</FormLabel>
                <PhoneInput
                w="100%"
                  name="mob"
                  country={"ae"}
                  preferredCountries={["ae"]}
                  // onlyCountries={['ae']}
                  priority={{ ae: 0, in: 1, us: 2 }}
                  onChange={setPhone}
                  required={true}
                  autoFocus={true}
                  enableSearch={true}
                  enableAreaCodeStretch={true}
                  countryCodeEditable={false}
                  defaultErrorMessage="Please Enter valid Mob. No."
                  isValid={(value, country) => {
                    if (value.match(/12345/)) {
                      return "Invalid value: " + value + ", " + country.name;
                    } else if (value.match(/1234/)) {
                      return false;
                    } else if (value.match(/00/)) {
                      return false;
                    } else {
                      return true;
                    }
                  }}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  _focus={{ outline: "none", border: "0", boxShadow: "none" }}
                  type="text"
                  placeholder=""
                  h="50px"
                  bg="whiteAlpha.900"
                  border="none"
                  color="gray.600"
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2} ml="auto">
              <Button type="submit" variant={"primary"} px={20} py={3}>
                Submit
              </Button>
            </GridItem>
          </Grid>
          {/* </Form> */}
        </CardBody>
      </Card>
    </>
  );
};

export default ContactForm;
