import { authModalState, authState } from "@/atmos/authModalAdon";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Box, Flex, Icon, Menu,
    MenuButton, MenuList, Text
} from "@chakra-ui/react";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { VscAccount } from "react-icons/vsc";
import { useRecoilState, useRecoilValue } from "recoil";
import NoUserList from "./NoUserList";
import UserList from "./UserList";
type UserMenuProps = {};

const UserMenu: React.FC<UserMenuProps> = () => {
    const authStateStatus = useRecoilValue(authState);
    const [authModal, setModalState] = useRecoilState(authModalState);
    return (
        <Menu>
            <MenuButton
                cursor="pointer"
                padding="0px 6px"
                borderRadius="4px"
                _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
            >
                <Flex alignItems="center">
                    <Flex alignItems="center">
                        {authStateStatus?.loggedIn ? (
                            <>
                                <Icon fontSize={24} mr={1} as={CgProfile} />
                                <Box
                                    display={{ base: "none", lg: "flex" }}
                                    flexDirection="column"
                                    fontSize="8pt"
                                    alignItems="flex-start"
                                    mr={8}
                                >
                                    <Text fontWeight={700} padding={2}>
                                        {authStateStatus?.username}
                                    </Text>
                                    {/* <Flex alignItems="center">
                                        <Icon
                                            as={IoSparkles}
                                            color="brand.100"
                                            mr={1}
                                        />
                                        <Text color="gray.400">1 karma</Text>
                                    </Flex> */}
                                </Box>
                            </>
                        ) : (
                            <Icon
                                fontSize={24}
                                mr={1}
                                color="gray.400"
                                as={VscAccount}
                            />
                        )}
                    </Flex>
                    <ChevronDownIcon color="gray.500" />
                </Flex>
            </MenuButton>
            <MenuList>
                {authStateStatus?.loggedIn ? (
                    <UserList />
                ) : (
                    <NoUserList setModalState={setModalState} />
                )}
            </MenuList>
        </Menu>
    );
};
export default UserMenu;
