import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import {
    IoFilterCircleOutline, IoVideocamOutline
} from "react-icons/io5";

const Icons: React.FC = () => {
    // const { toggleMenuOpen } = useDirectory();
    return (
        <Flex>
            <Flex
                display={{ base: "none", md: "flex" }}
                align="center"
                borderRight="1px solid"
                borderColor="gray.200"
            >
                <Flex
                    mr={1.5}
                    ml={1.5}
                    padding={1}
                    cursor="pointer"
                    _hover={{ bg: "gray.200" }}
                >
                    <Icon as={BsArrowUpRightCircle} fontSize={20} />
                </Flex>
                <Flex
                    mr={1.5}
                    ml={1.5}
                    padding={1}
                    cursor="pointer"
                    _hover={{ bg: "gray.200" }}
                >
                    <Icon as={IoFilterCircleOutline} fontSize={20} />
                </Flex>
                <Flex
                    mr={1.5}
                    ml={1.5}
                    padding={1}
                    cursor="pointer"
                    _hover={{ bg: "gray.200" }}
                >
                    <Icon as={IoVideocamOutline} fontSize={20} />
                </Flex>
            </Flex>
            <></>
        </Flex>
    );
};
export default Icons;
