import { ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const SearchForm = () => {

  const [dropdownPriceVisible, setDropdownPriceVisible] = useState(false);

  const onClosePriceRange = () => {
    setDropdownPriceVisible(!dropdownPriceVisible);
  };

  const optionsLocation = [
    { label: "Abu Dhabi", value: "Abu Dhabi" },
    { label: "AI Bateen Gardens", value: "AI Bateen Gardens" },
    { label: "AI Falah", value: "AI Falah" },
  ];
  const optionsResidential = [
    { label: "Residential", value: "Residential" },
    { label: "Commercial", value: "Commercial" },
  ];
  const optionsPropertyType = [
    { label: "Villa", value: "Villa" },
    { label: "Town House", value: "Town House" },
    { label: "Apartment", value: "Apartment" },
  ];
  const optionsBedrooms = [
    { label: "Studio", value: "Studio" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
  ];
  const optionsAmenities = [
    { label: "Balcony", value: "Balcony" },
    { label: "Maids Room", value: "Maids Room" },
    { label: "Private Garden", value: "Private Garden" },
  ];
  const [selected, setSelected] = useState([]);

  const handleLocation = (selected: any, option: any) => {
    if (!selected.length) {
      return "Location";
    } else if (selected.length == optionsLocation.length) {
      return "All Items Selected";
    } else if (option.length == 1) {
      option.label;
    } else {
      selected.map((val: any) => val.label + ",");
    }
  };

  const handleProperty = (selected: any, option: any) => {
    if (!selected.length) {
      return "Property Type";
    } else if (selected.length == optionsPropertyType.length) {
      return "All Items Selected";
    } else if (option.length == 1) {
      option.label;
    } else {
      selected.map((val: any) => val.label + ",");
    }
  };

  const handleBedrooms = (selected: any, option: any) => {
    if (!selected.length) {
      return "Bedrooms";
    } else if (selected.length == optionsBedrooms.length) {
      return "All Items Selected";
    } else if (option.length == 1) {
      option.label;
    } else {
      selected.map((val: any) => val.label + ",");
    }
  };

  const handleAmenities = (selected: any, option: any) => {
    if (!selected.length) {
      return "Amenities";
    } else if (selected.length == optionsAmenities.length) {
      return "All Items Selected";
    } else if (option.length == 1) {
      option.label;
    } else {
      selected.map((val: any) => val.label + ",");
    }
  };

  return (
    <>
      <SimpleGrid columns={4} p={2} spacingX="15px" spacingY="15px">
        <Box>
          <Select icon={<ChevronDownIcon />} iconSize="28px" placeholder='Residential' className="form-control">
            <option value="0">Residential</option>
            <option value="1">Commercial</option>
          </Select>
        </Box>
        <Box>
          <MultiSelect
            className="form-control"
            options={optionsLocation}
            value={selected}
            onChange={setSelected}
            labelledBy="Location"
            valueRenderer={(val: any) => handleLocation(selected, val)}
          />
        </Box>
        <Box>
          <MultiSelect
            className="form-control"
            options={optionsPropertyType}
            value={selected}
            onChange={setSelected}
            labelledBy="Property Type"
            valueRenderer={(val: any) => handleProperty(selected, val)}
          />
        </Box>
        <Box className="ar-form-ctrl">
          <Menu
            matchWidth
            closeOnSelect={dropdownPriceVisible}
          >
            <MenuButton onClick={onClosePriceRange} rightIcon={<ChevronDownIcon boxSize={7} />} className="form-control slider-button" as={Button}>
              Price Range
            </MenuButton>
            <MenuList className="price-slider-filter">
              <MenuItem bg={"white"} pt={0}>
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  w={"100%"}
                >
                  <Box>
                    <Heading as="h6">Price</Heading>
                  </Box>
                  <Box>
                    <CloseIcon onClick={onClosePriceRange} boxSize={2} />
                  </Box>
                </Flex>
              </MenuItem>
              <MenuItem bg={"white"} pt={0} py={3}>
                <Flex alignItems={"center"} w={"100%"}>
                  <RangeSlider
                    aria-label={["min", "max"]}
                    defaultValue={[0, 30]}
                  >
                    <RangeSliderTrack>
                      <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb left={0} index={0} />
                    <RangeSliderThumb index={1} />
                  </RangeSlider>
                </Flex>
              </MenuItem>
              <MenuItem bg={"white"} pt={0} pb={3}>
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  w={"100%"}
                >
                  <Box>
                    <Text> Min: AED 1,000 </Text>
                  </Box>
                  <Box>
                    <Text> Max: AED 201,000 </Text>
                  </Box>
                </Flex>
              </MenuItem>
              <MenuItem 
                bg={"white"} 
                pt={0}
              >
                <Flex
                   alignItems={"center"}
                   w={"100%"}
                   justifyContent={"space-between"}
                >
                  <Box 
                    w={"100%"} 
                    display={"flex"}
                  >
                    <Input  
                      cursor={"pointer"}
                      className="outline"
                      py={2}
                      flex={1}
                      placeholder='Reset' 
                      value="Reset" 
                      type="reset" 
                    />
                  </Box>
                  <Box 
                    w={"100%"} 
                    display={"flex"}
                  >
                    <Input  
                      onClick={onClosePriceRange}
                      className="btn-ar-srh primary"
                      cursor={"pointer"}
                      py={2}
                      flex={1}
                      ml={2}
                      placeholder='Apply' 
                      value="Apply" 
                      type="submit" 
                    />
                  </Box>
                </Flex>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <MultiSelect
            className="form-control"
            options={optionsBedrooms}
            value={selected}
            onChange={setSelected}
            labelledBy="Bedrooms"
            valueRenderer={(val: any) => handleBedrooms(selected, val)}
          />
        </Box>
        <Box className="ar-form-ctrl">
          <Menu matchWidth>
            <MenuButton rightIcon={<ChevronDownIcon boxSize={7} />} className="form-control slider-button" as={Button}>
              Area
            </MenuButton>
            <MenuList className="price-slider-filter">
              <MenuItem bg={"white"} pt={0}>
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  w={"100%"}
                >
                  <Box>
                    <Heading as="h6">Area</Heading>
                  </Box>
                  <Box>
                    <CloseIcon boxSize={2} />
                  </Box>
                </Flex>
              </MenuItem>
              <MenuItem bg={"white"} pt={0} py={3}>
                <Flex alignItems={"center"} w={"100%"}>
                  <RangeSlider
                    aria-label={["min", "max"]}
                    defaultValue={[10, 30]}
                  >
                    <RangeSliderTrack>
                      <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                  </RangeSlider>
                </Flex>
              </MenuItem>
              <MenuItem bg={"white"} pt={0} pb={3}>
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  w={"100%"}
                >
                  <Box>
                    <Text> Min: 10 Sqmt </Text>
                  </Box>
                  <Box>
                    <Text> Max: 30000 Sqmt </Text>
                  </Box>
                </Flex>
              </MenuItem>
              <MenuItem 
                bg={"white"} 
                pt={0}
              >
                <Flex
                   alignItems={"center"}
                   w={"100%"}
                   justifyContent={"space-between"}
                >
                  <Box 
                    w={"100%"} 
                    display={"flex"}
                  >
                    <Input  
                      cursor={"pointer"}
                      className="outline"
                      py={2}
                      flex={1}
                      placeholder='Reset' 
                      value="Reset" 
                      type="reset" 
                    />
                  </Box>
                  <Box 
                    w={"100%"} 
                    display={"flex"}
                  >
                    <Input
                      className="btn-ar-srh primary"
                      cursor={"pointer"}
                      py={2}
                      flex={1}
                      ml={2}
                      placeholder='Apply' 
                      value="Apply" 
                      type="submit" 
                    />
                  </Box>
                </Flex>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <MultiSelect
            className="form-control"
            options={optionsAmenities}
            value={selected}
            onChange={setSelected}
            labelledBy="Amenities"
            valueRenderer={(val: any) => handleAmenities(selected, val)}
          />
        </Box>
        <Box>
          <Input
            placeholder="Keyword Search"
            className="form-control"
            size="lg"
          />
        </Box>
      </SimpleGrid>
      <SimpleGrid columns={1} p={2} spacingX="15px" spacingY="15px">
        <Box display={"flex"} justifyContent={"end"}>
          <Button type="submit" px={16} py={3} variant="primary">
            Find
          </Button>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default SearchForm;
