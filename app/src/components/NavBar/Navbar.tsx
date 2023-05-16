import { authState } from "@/atmos/authModalAdon";
import {
  Avatar,
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Select,
  Spacer,
  Text,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import { useRecoilValue } from "recoil";
import Link from "next/link";

const Navbar: React.FC = () => {
  const authStateStatus = useRecoilValue(authState);
  // console.log("🚀 ~ file: Navbar.tsx:24 ~ authStateStatus:", authStateStatus)

  return (
    <Flex as="nav" mb={"4"} bg="white" alignItems="center" borderRadius="lg">
      <Box>
        <Select placeholder="All Buildings" className="building-option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
      <Spacer />
      <HStack spacing="0">
        {/* <Box display={"flex"} alignItems={"center"} px="6">
          <Box as="span" className="notif-icon" position={"relative"} top={"4px"} cursor={"pointer"}>
            <Icon as={MdNotificationsNone} boxSize={6} color='blackAlpha.400' />
            <Text>21</Text>
          </Box>
        </Box> */}
        <Menu>
          <MenuButton position={"relative"}>
            <Flex px="5" alignItems={"center"}>
              <Box display={"flex"} alignItems={"center"}>
                <Box
                  as="span"
                  className="notif-icon"
                  position={"relative"}
                  top={"4px"}
                  cursor={"pointer"}
                >
                  <Icon
                    as={MdNotificationsNone}
                    boxSize={6}
                    color="blackAlpha.400"
                  />
                  <Text>21</Text>
                </Box>
              </Box>
            </Flex>
          </MenuButton>
          <MenuList alignItems={"center"}>
            <Center>Notifications</Center>
            <MenuDivider />
            <MenuItem>Notif1</MenuItem>
            <MenuItem>Notif1</MenuItem>
          </MenuList>
        </Menu>
        <Divider
          orientation="vertical"
          colorScheme="red"
          height="40px"
          px="0"
        />
        <Menu>
          <MenuButton position={"relative"}>
            <Flex alignItems={"center"}>
              <Box display={"flex"} alignItems={"center"}>
                <Text
                  as="span"
                  fontSize={"14px"}
                  fontWeight={"500"}
                  className="avatar-name"
                >
                  Prospective Tenant
                  {authStateStatus?.username}
                </Text>
                <Avatar
                  name={
                    authStateStatus?.loggedIn ? authStateStatus?.username : ""
                  }
                  src={authStateStatus?.data?.userProfile?.profile_img}
                  height={"40px"}
                  width={"40px"}
                />
              </Box>
            </Flex>
          </MenuButton>
          <MenuList alignItems={"center"}>
            <br />
            <Center>
              <Avatar
                name={
                  authStateStatus?.loggedIn ? authStateStatus?.username : ""
                }
                size={"xl"}
                src={authStateStatus?.data?.userProfile?.profile_img}
              />
            </Center>
            <br />
            <Center>
              <p>{authStateStatus?.username}</p>
            </Center>
            <br />
            <MenuDivider />
            <MenuItem>
              <Link href="/profile">Profile</Link>
            </MenuItem>
            <MenuItem>
              <Text>Logout</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};
export default Navbar;
