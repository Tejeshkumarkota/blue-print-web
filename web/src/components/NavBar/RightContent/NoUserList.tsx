import React from "react";
import { MenuItem, Flex, Icon } from "@chakra-ui/react";
import { MdOutlineLogin } from "react-icons/md";
import { AuthModalStates } from "@/atmos/authModalAdon";

type NoUserListProps = {
    setModalState: (value: AuthModalStates) => void;
};

const NoUserList: React.FC<NoUserListProps> = ({ setModalState }) => {
    return (
        <>
            <MenuItem
                fontSize="10pt"
                fontWeight={700}
                _hover={{ bg: "blue.500", color: "white" }}
                onClick={() => setModalState({ open: true, view: "Login" })}
            >
                <Flex alignItems="center">
                    <Icon fontSize={20} mr={2} as={MdOutlineLogin} />
                    Log In / Sign Up
                </Flex>
            </MenuItem>
        </>
    );
};
export default NoUserList;
