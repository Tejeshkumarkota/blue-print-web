import { authState } from "@/atmos/authModalAdon";
import { ssoUserDetailswithLocationsData } from "@/constants/generics/getSSOURL";
import { Flex, Icon, MenuDivider, MenuItem } from "@chakra-ui/react";
import React from "react";

import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import { useRecoilValue } from "recoil";
type UserListProps = {};

const UserList: React.FC<UserListProps> = () => {

    const authStateStatus = useRecoilValue(authState);
    const logout = async () => {
        // await signOut(auth);
    };
    const SSORedirect = () => {
        const url = ssoUserDetailswithLocationsData(authStateStatus, '/dashboard')
        window.location.assign(ssoUserDetailswithLocationsData(authStateStatus, '/dashboard'));
    }
    return (
        <>
            <MenuItem
                fontSize="10pt"
                fontWeight={700}
                _hover={{ bg: "blue.500", color: "white" }}
            >
                <Flex alignItems="center" onClick={SSORedirect}>
                    <Icon fontSize={20} mr={2} as={CgProfile} />
                    Profile
                </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
                fontSize="10pt"
                fontWeight={700}
                _hover={{ bg: "blue.500", color: "white" }}
                onClick={logout}
            >
                <Flex alignItems="center">
                    <Icon fontSize={20} mr={2} as={MdOutlineLogin} />
                    Log Out
                </Flex>
            </MenuItem>
        </>
    );
};
export default UserList;
